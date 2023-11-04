from django.db import models
from django.contrib.auth.models import AbstractUser,PermissionsMixin
from django.db import models
from django.utils.translation import gettext as _

from .managers import CustomUserManager
from multiselectfield import MultiSelectField

# Create your models here.

class CustomUser(AbstractUser,PermissionsMixin):
    ROLES_CHOICES=[
        ("1","Admin"),
        ("2","Author"),
    ]
    user_name =models.CharField(max_length=150,unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    roles = models.CharField(max_length=255,choices=ROLES_CHOICES)
    USERNAME_FIELD = 'user_name'
    REQUIRED_FIELDS = ("first_name","last_name")
    objects = CustomUserManager()
    def __str__(self):
        return self.user_name

