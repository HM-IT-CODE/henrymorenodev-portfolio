# Proyecto de Web Scraping de Productos y Descarga de Imágenes

Este proyecto consiste en varios scripts de Python para realizar web scraping de productos de diferentes sitios web (MercadoLibre, DFSK Venezuela, OLX) y descargar imágenes asociadas a los productos. El objetivo es automatizar la recolección de datos y la descarga de imágenes para análisis o catálogos.

## Tecnologías y Librerías Utilizadas

- **Python 3**
- **Selenium**: Automatización de navegación web.
- **Pillow (PIL)**: Procesamiento y guardado de imágenes.
- **Requests**: Descarga de imágenes.
- **Pandas**: Manejo y exportación de datos a Excel.
- **Scrapy**: Web scraping avanzado (ejemplo en `libreriasScrapy.py`).

## Estructura del Proyecto

- `mercadolibre.py`: Extrae productos de MercadoLibre Chile, descarga imágenes y guarda los datos en un Excel.
- `DFSK.py`: Extrae productos de la tienda DFSK Venezuela, descarga imágenes y guarda los datos en un Excel.
- `1.2 1_olx_imagenes.py`: Descarga imágenes de anuncios de OLX Venezuela, mostrando técnicas de scrolling y scraping.
- `libreriasScrapy.py`: Ejemplo de uso de Scrapy para extraer preguntas de StackOverflow.
- Carpeta `imagen/` y `imagenes/`: Almacenan las imágenes descargadas.

## Ejemplo de Funcionamiento

### mercadolibre.py

- Navega por varias páginas de MercadoLibre.
- Extrae nombre, precio y URL de imagen de cada producto.
- Descarga la imagen y la guarda localmente.
- Exporta los datos a `productos_mercadolibre_cl.xlsx`.

### DFSK.py

- Recorre páginas de productos de DFSK Venezuela.
- Extrae nombre, precio y URL de imagen.
- Descarga y guarda imágenes en la carpeta `imagenes/`.
- Exporta los datos a `productos.xlsx`.

### 1.2 1_olx_imagenes.py

- Realiza scrolling automático para cargar todos los anuncios.
- Extrae precio, descripción y descarga la imagen de cada anuncio.
- Guarda las imágenes en la carpeta `imagenes/`.

### libreriasScrapy.py

- Ejemplo de spider con Scrapy para extraer preguntas y descripciones de StackOverflow.

## Instalación de Dependencias

```bash
pip install selenium Pillow requests pandas scrapy
```

## Notas y Recomendaciones

- Es necesario tener `chromedriver.exe` en la carpeta del proyecto y Google Chrome instalado.
- Ajustar las rutas de Chrome y Chromedriver según tu sistema.
- Para ejecutar los scripts, usa:
  ```bash
  python mercadolibre.py
  python DFSK.py
  python "1.2 1_olx_imagenes.py"
  ```
- Para Scrapy:
  ```bash
  scrapy runspider libreriasScrapy.py -o salida.csv
  ```

## Autor

- Leonardo Kuffo (ejemplo OLX)
- Adaptaciones y pruebas: henry.moreno

---

Este proyecto es ideal para tu portafolio si buscas mostrar habilidades en automatización, scraping, manejo de datos y procesamiento de imágenes.
