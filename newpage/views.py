from django.shortcuts import render
from .models import Workslist
from django.views.generic import ListView
from newpage.serializers import WorksListSerializer
from rest_framework import viewsets

class WorksListViewSet(viewsets.ModelViewSet):
    queryset = Workslist.objects.all()
    serializer_class = WorksListSerializer
    

# Create your views here.
class AboutView(ListView):
    queryset = Workslist.objects.all()
    context_object_name = 'workslist'
    template_name = "index.html"