from .models import Monitor
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MonitorSerializer


class MonitorList(APIView):
    def get(self, request, format=None):
        monitors = Monitor.objects.all()
        serializer = MonitorSerializer(monitors, many=True)
        return Response(serializer.data)
