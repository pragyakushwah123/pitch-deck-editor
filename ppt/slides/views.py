from rest_framework import viewsets
from .models import Slide, File
from .serializers import SlideSerializer, FileSerializer

class SlideViewSet(viewsets.ModelViewSet):
    queryset = Slide.objects.all()
    serializer_class = SlideSerializer

class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer
