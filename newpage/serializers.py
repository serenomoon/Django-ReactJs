from rest_framework_json_api import serializers
from newpage.models import Workslist

class WorksListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Workslist
        fields = ( 'titleeng', 'titleesp', 'img', 'texteng', 'textesp', 'linktogit')
