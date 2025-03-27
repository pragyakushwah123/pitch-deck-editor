from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SlideViewSet

router = DefaultRouter()
router.register(r"slides", SlideViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
