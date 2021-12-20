from django.contrib import admin
from .models import Workslist

# Register your models here.
@admin.register(Workslist)
class WorksAdmin(admin.ModelAdmin):
    list_display = ('titleeng', 'titleesp', 'texteng', 'textesp', 'img', 'linktogit')
    list_filter = ('titleesp',)
    search_fields = ('titleeng', 'titleesp', 'texteng', 'textesp')
    # prepopulated_fields = {'slug': ('title',)}
    # raw_id_fields = ('author',)
    # date_hierarchy = 'publish'
    # ordering = ('status', 'publish')