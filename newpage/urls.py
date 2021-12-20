from django.urls import path, re_path, include
from newpage import views
from rest_framework import routers


app_name = 'newpage'

router = routers.DefaultRouter()
router.register(r'workslist', views.WorksListViewSet)

urlpatterns = [
    path('', views.AboutView.as_view()),
    path('', include(router.urls)),
    re_path(r'^(?:.*)/?$', views.AboutView.as_view()),
]

