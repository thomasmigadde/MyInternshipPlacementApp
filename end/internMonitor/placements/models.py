from django.db import models

# Create your models here.
class StakeHolder(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    description = models.TextField()
    def __str__(self):
        return f'{self.name} - {self.position}'
    