# Generated by Django 3.2.9 on 2022-01-04 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newpage', '0002_workslist_uploadimg'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workslist',
            name='uploadimg',
            field=models.ImageField(max_length=150, upload_to='static/img/'),
        ),
    ]