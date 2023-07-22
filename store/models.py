from django.db import models
from django.core.files.storage import default_storage
from django.conf import settings


class Cajas(models.Model):
    nombre = models.CharField(max_length=100)
    colores = models.CharField(max_length=200)
    ancho = models.DecimalField(max_digits=8, decimal_places=2)
    largo = models.DecimalField(max_digits=8, decimal_places=2)
    alto = models.DecimalField(max_digits=8, decimal_places=2)
    material_utilizado = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    creado = models.DateTimeField(auto_now_add=True, verbose_name="Fecha/Creacion")
    modificado = models.DateTimeField(auto_now=True, verbose_name="Fecha/Modificación")
    
    def colores_lista(self):
        return self.colores.split(',')
    
    def delete(self, *args, **kwargs):
        # Elimina las imágenes asociadas antes de eliminar el objeto Caja
        for imagen in self.imagenes.all():
            imagen.delete()

        # Llama al método 'delete' del modelo base para eliminar el objeto Caja
        super().delete(*args, **kwargs)

    class Meta:
        verbose_name = "Catalogo_caja"
        verbose_name_plural = "Catalogo_cajas"
        ordering = ["-creado"]

    def __str__(self):
        return self.nombre


class Imagen(models.Model):
    caja = models.ForeignKey(Cajas, on_delete=models.CASCADE, default=1, related_name='imagenes')
    imagen = models.ImageField(upload_to="productos/")

    def delete(self, *args, **kwargs):
        # Elimina la imagen antes de eliminar el objeto Imagen
        if self.imagen:
            # Obtiene la ruta completa del archivo de imagen
            image_path = self.imagen.path

            # Elimina el archivo de imagen del sistema de archivos
            default_storage.delete(image_path)

        # Llama al método 'delete' del modelo base para eliminar el objeto Imagen
        super().delete(*args, **kwargs)
