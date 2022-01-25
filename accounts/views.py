from asyncio.proactor_events import constants
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.core.mail import send_mail
from home.models import Feedback, Comment, Message
from random import random
from django.http import HttpResponse


# Create your views here.

def join(request):
    if request.user.is_authenticated == False:
        if request.method == 'POST':
            global first_name
            global last_name
            global username
            global email
            global password
            global oneTimePassword

            first_name = request.POST['first_name']
            last_name = request.POST['last_name']
            username = request.POST['username']
            email = request.POST['email']
            password = request.POST['password']
            confirm_password = request.POST['confirm_password']
            errors = []

            errors.append("Username already taken" if User.objects.filter(username=username).exists() else None)
            errors.append("Email already taken" if User.objects.filter(email=email).exists() else None)
            errors.append("Password not matching" if password != confirm_password else None)
            errors.append("Password is too short" if len(password) < 10 else None)
            
            if errors.count(None) == 4:
                oneTimePassword = int(random()*1_000_000)
                while True:
                    if len( str( oneTimePassword ) ) == 6:
                        break
                    else:
                        oneTimePassword = int(random()*1_000_000)
                
                #sending One Time Password to user vio Email...
                subject = "Code Pirates User Verification code"
                message = "Hello User, We see you have an interest in our website, we send this email to verify your email address, if this is realy you \n then checkout the following details you enter in our website\n If everything is write go head and copy otp and paste it in Code Pirates Verify Email page\n First Name: {}\n Last Name: {}\n Username: {}\n Email: {}\n Password: {}\n\n If everything is write, here is your 6 digit OTP: {}".format(first_name, last_name, username, email, password, oneTimePassword)
                
                try:
                    send_mail(subject, message, 'goldysehgal.95790@gmail.com', [email], fail_silently= False)
                except Exception as error:
                    return HttpResponse('Message is not able to send due to: {}'.format(error))
                
                return render(request, 'accounts/register-account.html', {'email':email})

            else:
                return render(request, 'accounts/join.html', {'errors':errors, 'first_name':first_name, 'last_name':last_name, 'username':username, 'email':email ,'password':password, 'confirm_password':confirm_password})
        else:
            return render(request, 'accounts/join.html')
    else:
        return redirect('/')

def registerAccount(request):
    if request.method == 'POST':
        userOTP = int(request.POST['userOTP'])
        if oneTimePassword == userOTP:
            newUser = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email, password=password)
            user = auth.authenticate(request, username=username, password=password)
            auth.login(request, user)
            return redirect('/')
        else:
            error = "Password not matching"
            return render(request, 'accounts/register-account.html', {'error':error, 'email':email})
    else:
        return redirect('/')


def logout(request):
    auth.logout(request)
    return redirect('/')


def login(request):
    if request.user.is_authenticated == False:
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']

            user = auth.authenticate(request, username=username, password=password)
            if user is not None:
                auth.login(request, user)
                return redirect('/')
            else:
                error = "Wrong Username or Password"
                return render(request, 'accounts/login.html', {'error':error, 'username':username, 'password':password})
        else:
            return render(request, 'accounts/login.html')
    else:
        return redirect('/')

def profile(request):
    if request.user.is_authenticated:
        username = request.user.username
        page = 'profile'
        likedPlaylists = []
        dislikedPlaylists = []
        feedback = Feedback.objects.all()

        messages = list(Message.objects.filter(email=request.user.email))
        messages.reverse()

        comments = list(Comment.objects.filter(username=username))
        comments.reverse()

        for object in feedback:
            if username in object.likedUsers:
                likedPlaylists.append(object.playlist)
            elif username in object.dislikedUsers:
                dislikedPlaylists.append(object.playlist)

        return render(request, 'accounts/profile.html', {'page':page, 'likedPlaylists':likedPlaylists, 'dislikedPlaylists':dislikedPlaylists, 'messages':messages, 'comments':comments})
    else:
        return redirect('/')