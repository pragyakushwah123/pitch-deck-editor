from django.contrib import admin
from .models import Slide, File

@admin.register(Slide)
class SlideAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('created_at',)

@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    search_fields = ('title',)
