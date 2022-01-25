"""CodePirates URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home.views import home, messages, reply, playlist, comment, feedback, sendMessage
from django.conf import settings
from django.conf.urls.static import static
from accounts.views import join, login, logout, registerAccount, profile

urlpatterns = [
    path('', home),
    path('join/', join),
    path('join/register_account', registerAccount),
    path('login/', login),
    path('logout/', logout), 
    path('send_message/', sendMessage),
    path('messages/<str:type>', messages),
    path('messages/reply/<int:id>', reply),
    path('playlist/<str:name>/', playlist),
    path('playlist/<str:playlist>/comment', comment),
    path('playlist/<str:playlistName>/feedback/<int:value>', feedback),
    path('profile/', profile),
    path('admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)