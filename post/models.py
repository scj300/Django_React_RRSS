from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=25, blank=True)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    img_url=models.CharField(max_length=200)
    id= models.BigAutoField(primary_key=True)

    def __str__(self):
        return f'{self.title}: {self.content}'

class Follow(models.Model):
    follower = models.ForeignKey(User, related_name='following',on_delete=models.CASCADE)
    following = models.ForeignKey(Post, related_name='followers',on_delete=models.CASCADE)

    def __unicode__(self):
        return u'%s follows %s' % (self.follower, self.following)


class User(models.Model):
    name= User.username
    id = User.pk






