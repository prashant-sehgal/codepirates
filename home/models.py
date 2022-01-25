from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Message(models.Model):
    id = models.AutoField(primary_key=True)
    sender = models.CharField(max_length=100)
    email = models.EmailField()
    date = models.DateField(auto_now=True)
    view = models.TextField()
    reply = models.TextField(default='None')

    def __str__(self):
        return self.sender

class Playlist(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    FILTER_CHOICES = [
    ('artificial_intelligence', 'Artificial Intelligence'),
    ('programming', 'Programming'),
    ('web_development', 'Web Development'),
    ('mobile_development', 'Mobile Development'),
    ('data', 'Data')
    ]
    filter = models.CharField(max_length=23, choices=FILTER_CHOICES)
    date = models.DateField(auto_now=True)
    source = models.CharField(max_length=200)
    image = models.ImageField(upload_to='Playlist-Images')
    description = models.TextField()

    def __str__(self):
        return self.name

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    playlist = models.CharField(max_length=50)
    date = models.DateField(auto_now=True)
    view = models.TextField()

    def __str__(self):
        return self.view

class Feedback(models.Model):
    id = models.AutoField(primary_key=True)
    playlist = models.CharField(max_length=50)
    likedUsers = ArrayField(models.CharField(max_length=100), default=list, blank=True)
    dislikedUsers = ArrayField(models.CharField(max_length=100), default=list, blank=True)

    def __str__(self):
        return self.playlist