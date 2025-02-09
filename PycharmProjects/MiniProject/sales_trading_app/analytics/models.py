from django.db import models

class AnalyticsReport(models.Model):
    report_name = models.CharField(max_length=255)
    data = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.report_name
