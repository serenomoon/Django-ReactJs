from django.db import models

# Create your models here.
class Workslist(models.Model):
    titleeng = models.CharField(max_length=150)
    titleesp = models.CharField(max_length=150)
    uploadimg = models.ImageField(upload_to ='newpage/static/img/',max_length=150)
    img = models.CharField(max_length=600)
    texteng = models.TextField()
    textesp = models.TextField()
    linktogit = models.CharField(max_length=150)

    def _str_(self):
        return self.titleesp