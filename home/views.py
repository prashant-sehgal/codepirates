from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .models import Message, Playlist, Comment, Feedback
from django.http import HttpResponse
import re

# Create your views here.

def findUrl(string):
    regex = r"(?i)\b((?:https?://|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’]))"
    url = re.findall(regex,string)       
    return [x[0] for x in url] 

def home(request):
    page = "home"
    playlists = Playlist.objects.all()
    return render(request, 'home/home.html', {'page':page, 'playlists':playlists})

def sendMessage(request):
    if request.user.is_authenticated and request.method == 'POST':
        sender = request.user.first_name+' '+request.user.last_name
        email = request.user.email
        message = request.POST['message']

        newMessgae = Message(sender=sender, email=email, view=message)
        newMessgae.save()
        return redirect('/#contact')
    else:
        return redirect('/')

def messages(request, type): # type - rest, all, answered
    if request.user.is_superuser:
        page = "messages"
        totalMessages = len(Message.objects.all())
        messages = []
        if type == 'rest':
            messages = Message.objects.filter(reply='None')
        elif type == 'answered':
            for obj in Message.objects.all():
                if obj.reply != 'None':
                    messages.append(obj)
        elif type == 'all':
            messages = Message.objects.all()    
        
        answered = totalMessages - len(Message.objects.filter(reply='None'))
        rest = totalMessages - answered
        return render(request, 'home/messages.html', {'page':page, 'messages':messages, 'totalMessages':totalMessages, 'answered': answered, 'rest': rest})
    
    else:
        return redirect('/')

def reply(request, id):
    if request.user.is_superuser:
        message = Message.objects.get(id=id)
        reply = request.POST['reply']
        message.reply = reply
        date = message.date
        #sending reply via email in message
        subject = "Reply by Code Pirtaes on your Message"
        content = f"Your message: {message.view}\nReply: {reply}\n\n if you are not satified with this reply, you can ask us again.\n You can use Our emails- goldysehgal.95790@outlook.com, prashantsehgal.95790@gmail.com or you can ask us on Twitter handle: https://www.twitter.com/goldysehgal_ with #codequery, or you can simply use Contact us tab on Code Pirates"
    
        try:
            send_mail(subject, content, 'goldysehgal.95790@outlook.com', [message.email], fail_silently=False)
        except Exception as error:
            return HttpResponse('Reply is not send due to {} \n <h3><a href="/messages/rest">Return to Messages</h3>'.format(error))
        message.date = date
        message.save()
        return redirect('/messages/rest')


def playlist(request, name):
    if request.user.is_authenticated:
        playlist = Playlist.objects.get(name=name)
        playlist.source = findUrl(playlist.source)[0]
        username = request.user.username
        comments = list(Comment.objects.filter(playlist= name))
        comments.reverse()  
        if Feedback.objects.filter(playlist=name).exists():
            pass
        else:
            newFeedbackObject = Feedback(playlist= name)
            newFeedbackObject.save()
        feedback = Feedback.objects.get(playlist=name)
        likedClass = "btn-success" if username in feedback.likedUsers else "btn-outline-success"
        dislikedClass = "btn-danger" if username in feedback.dislikedUsers else "btn-outline-danger"

        page = 'videos'
        print(playlist.source)
        return render(request, 'home/playlist.html', {'playlist':playlist, 'page':page, 'comments':comments, 'likedClass':likedClass, 'dislikedClass':dislikedClass, 'feedback':feedback})

def comment(request, playlist):
    if request.user.is_authenticated and request.method == 'POST':
        view = request.POST['comment']
        username = request.user.username
        newComment = Comment(username=username, playlist=playlist, view=view)
        newComment.save()
        return redirect(f'/playlist/{playlist}/')

    else:
        return redirect('/')

def feedback(request, playlistName, value):
    isliked = bool(value)
    username = request.user.username
    feedback = Feedback.objects.get(playlist=playlistName)
    
    if isliked:
        if username in feedback.dislikedUsers:
            feedback.dislikedUsers.remove(username)
            feedback.likedUsers.append(username)
        elif username in feedback.likedUsers:
            feedback.likedUsers.remove(username)
        else:
            feedback.likedUsers.append(username)
    else:
        if username in feedback.likedUsers:
            feedback.likedUsers.remove(username)
            feedback.dislikedUsers.append(username)
        elif username in feedback.dislikedUsers:
            feedback.dislikedUsers.remove(username)
        else:
            feedback.dislikedUsers.append(username)
    feedback.save()
    return redirect(f'/playlist/{playlistName}/')