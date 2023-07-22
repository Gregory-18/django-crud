from django.contrib import admin
from .models import Cajas, Imagen


class ImagenInline(admin.TabularInline):
    model = Imagen
    extra = 1


class ProductoAdmin(admin.ModelAdmin):
    inlines = [ImagenInline]
    list_display = ('nombre', 'precio', 'creado', 'modificado')
    list_filter = ('creado', 'modificado')
    search_fields = ('nombre', 'colores', 'material_utilizado')


admin.site.register(Cajas, ProductoAdmin)
