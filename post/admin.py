from django.contrib import admin

# Register your models here.
from post.models import Post
from post.models import Follow

admin.site.register(Post)
admin.site.register(Follow)

