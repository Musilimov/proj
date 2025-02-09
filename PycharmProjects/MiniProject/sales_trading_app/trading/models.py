from django.db import models
from users.models import User
from products.models import Product


class Order(models.Model):
    ORDER_TYPES = [('buy', 'Buy'), ('sell', 'Sell')]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order_type = models.CharField(max_length=10, choices=ORDER_TYPES)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.order_type} {self.quantity} {self.product.name}"
