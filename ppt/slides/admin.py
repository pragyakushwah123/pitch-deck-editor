from django.contrib import admin
from .models import Slide

class SlideAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "subtitle", "background_color", "text_color")
    list_filter = ("background_color", "text_color")
    search_fields = ("title", "subtitle", "body")
    readonly_fields = ("id",)

    fieldsets = (
        ("Slide Content", {
            "fields": ("title", "subtitle", "body", "image")
        }),
        ("Theme Settings", {
            "fields": ("background_color", "text_color")
        }),
        ("Font Sizes", {
            "fields": ("title_font_size", "subtitle_font_size", "body_font_size")
        }),
    )

admin.site.register(Slide, SlideAdmin)
