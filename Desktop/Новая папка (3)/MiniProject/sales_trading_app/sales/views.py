from rest_framework import viewsets
from .models import SalesOrder
from .serializers import SalesOrderSerializer

class SalesOrderViewSet(viewsets.ModelViewSet):
    queryset = SalesOrder.objects.all()
    serializer_class = SalesOrderSerializer
