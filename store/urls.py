from django.urls import path
from . import views as store
urlpatterns = [
    path('', store.index, name="index"),
    # path('shop/', store.shop, name="shop"),
    path('shop/', store.shop_single, name="shop_single"),
    path('contact/', store.contact, name="contact"),
    path('about/', store.about, name="about"),
    
]
