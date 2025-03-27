from django.db import models

# Create your models here.

class File(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Slide(models.Model):
    title = models.CharField(max_length=255, default="Slide")
    content = models.TextField()
    file = models.ForeignKey(File, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
