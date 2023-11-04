from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager):

    def create_user(self,user_name,first_name,last_name,password,**other_fields):
        if not  user_name:
            raise ValueError("Must have an username")

        user = self.model(
            last_name=last_name,user_name=user_name,first_name=first_name,**other_fields
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self,user_name,first_name,last_name,password,**other_fields):
        other_fields.setdefault("is_staff",True)
        other_fields.setdefault("is_superuser",True)
        other_fields.setdefault("is_active",True)

        if other_fields.get("is_staff") is not True:
            raise ValueError("Superuser must be assigned to is_staff=True")
        if other_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True.")

        return self.create_user(user_name,first_name,last_name,password,**other_fields)