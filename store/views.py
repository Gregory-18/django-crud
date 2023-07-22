from django.shortcuts import render, get_object_or_404
from .models import Cajas


def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')

def shop(request):
    cajas = Cajas.objects.all()
    context = {
        'cajas': cajas,
    }
    return render(request, 'shop.html', context)

def shop_single(request):
    cajas = Cajas.objects.all()
    context = {
        'cajas': cajas
    }
    return render(request, 'shop-single.html', context)
