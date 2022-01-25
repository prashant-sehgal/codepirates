from django.contrib import admin
from .models import Playlist, Message, Feedback, Comment

# Register your models here.

admin.site.register(Playlist)
admin.site.register(Message)
admin.site.register(Feedback)
admin.site.register(Comment)