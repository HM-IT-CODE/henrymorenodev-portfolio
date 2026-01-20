# OCR Copy — Resumen técnico y de proyecto

## Resumen breve

Construimos una aplicación de escritorio llamada **OCR Copy** que permite capturar la pantalla (o una región) y extraer el texto visible mediante OCR. La app prioriza el uso de un backend nativo en C++ para rendimiento offline, y dispone de un fallback usando la CLI de Tesseract para asegurar que la funcionalidad está disponible sin pasos de compilación adicionales.

## Tecnologías y lenguajes usados

- **Electron / Node.js**: entorno principal que ejecuta la aplicación de escritorio, gestiona ventanas, IPC y empaquetado.
- **JavaScript (ES6+), HTML, CSS**: interfaz de usuario (renderer), overlay de selección de área y lógica del frontend.
- **Preload + IPC**: `preload.js` actúa como puente seguro entre renderer y proceso principal; `ipcMain`/`ipcRenderer` transportan peticiones y respuestas.
- **C++**: ejecutable opcional (`backend/ocr_copy`) que realiza OCR localmente (mejor rendimiento y sin necesidad de depender de servicios externos cuando está compilado).
- **Tesseract OCR (CLI)**: alternativa de reconocimiento de texto que usa los archivos de datos en `tessdata` (`spa.traineddata`, `eng.traineddata`).
- **Node built-ins**: `child_process` (`execFile`) para ejecutar el backend o `tesseract`, y módulos `fs`, `path`, `os`, `clipboard` para I/O y utilidades.
- **electron-builder / npm**: scripts para desarrollo y empaquetado (`npm install`, `npm start`, `npm run build:win`).

## Cómo funciona (flujo de la aplicación)

1. El usuario abre la app y solicita una captura completa o por área.
2. Si se selecciona área, se abre un `overlay` transparente donde el usuario dibuja el rectángulo de selección.
3. El renderer solicita al proceso principal (IPC) ejecutar OCR sobre la ruta de la imagen o sobre la región seleccionada.
4. El proceso principal (`main.js`) decide la estrategia:
   - Si existe `backend/ocr_copy` (ejecutable nativo), lo invoca pasando la imagen y la región.
   - Si no existe o falla, ejecuta la CLI `tesseract` como fallback. Intenta fijar `TESSDATA_PREFIX` para que Tesseract localice `tessdata`.
5. El resultado (texto extraído) se retorna al renderer; el usuario puede copiarlo al portapapeles o guardarlo.

Arquitectura simplificada:

- Renderer (UI) ←→ Preload (API segura) ←→ Main (IPC handlers) ←→ [ C++ backend OR Tesseract CLI ]

## Instalación y ejecución rápida

1. Abrir terminal en la carpeta `electron`:

```bash
cd "c:\Users\henry.moreno\Desktop\Escritorio\C++\app-imagen\electron"
npm install
```

2. Ejecutar la aplicación:

```bash
npm --prefix "c:\Users\henry.moreno\Desktop\Escritorio\C++\app-imagen\electron" start
```

3. Opcional: empaquetar para Windows (requiere configuración adicional para firmado):

```bash
npm --prefix "c:\Users\henry.moreno\Desktop\Escritorio\C++\app-imagen\electron" run build:win
```

## Dónde colocar los datos de idioma (tessdata)

- Para mejor precisión en español coloca `spa.traineddata` en `electron/tessdata` o configura la variable de entorno `TESSDATA_PREFIX` apuntando a la carpeta que contiene los `.traineddata`.

## Archivos clave (ubicaciones)

- [electron/main.js](electron/main.js) — lógica principal, handlers IPC y coordinación con C++/Tesseract.
- [electron/preload.js](electron/preload.js) — funciones seguras expuestas al renderer.
- [electron/index.html](electron/index.html) — interfaz principal.
- [electron/overlay.html](electron/overlay.html) — overlay de selección de área.
- [electron/backend/](electron/backend/) — ejecutable nativo opcional (`ocr_copy`).
- [electron/tessdata/](electron/tessdata/) — carpeta recomendada para `spa.traineddata` / `eng.traineddata`.

## Qué problema resuelve

OCR Copy permite extraer texto de cualquier contenido visual en pantalla (imágenes, ventanas que no permiten selección, capturas) de forma local y rápida, evitando subir datos a servicios en la nube y funcionando incluso en entornos offline cuando el backend nativo está disponible.

## Buenas prácticas y consideraciones

- Mantener `contextIsolation: true` y `nodeIntegration: false` en la ventana principal para reducir la superficie de ataque.
- Probar el fallback con `tesseract --version` si el ejecutable nativo no funciona.
- Revisar las advertencias de `npm audit` después de `npm install` y actualizar dependencias si es necesario antes de publicar.

## Siguientes pasos recomendados

- Tomar capturas representativas (pantalla principal, overlay, resultado OCR) y guardarlas en `portfolio_shots/`.
- Generar una GIF corta que muestre selección + extracción para el portafolio.
- Si quieres, genero un par de frases listas para CV y captions para cada captura.

---

Si quieres, actualizo el README añadiendo un diagrama SVG pequeño o redacto el texto corto para tu CV.

# OCR Copy — Resumen para portafolio

## Breve descripción

Proyecto de escritorio basado en Electron que captura pantallas/áreas y extrae texto mediante OCR. Usa un backend en C++ (si está compilado) o hace fallback a la CLI de Tesseract.

## Características principales

- Captura de pantalla completa o por área (overlay transparente).
- OCR con backend C++ (`backend/ocr_copy`) o Tesseract CLI como fallback.
- Copia rápida del texto extraído al portapapeles.
- Detección automática de `tessdata` (carpeta `electron/tessdata` o rutas comunes en Windows).

## Cómo ejecutar (rápido)

1. Instalar dependencias (en la carpeta `electron`):

```bash
cd "c:\Users\henry.moreno\Desktop\Escritorio\C++\app-imagen\electron"
npm install
```

2. Iniciar la app (abrirá la ventana Electron):

```bash
npm --prefix "c:\Users\henry.moreno\Desktop\Escritorio\C++\app-imagen\electron" start
```

## Notas de ejecución

- El proyecto intenta usar `electron/backend/ocr_copy.exe` (o `ocr_copy` en Unix). Si no existe, usa `tesseract` (debe estar en el PATH).
- Para mejorar resultados en español, coloca `spa.traineddata` dentro de `electron/tessdata` o configura la variable de entorno `TESSDATA_PREFIX` apuntando a una carpeta con los archivos `.traineddata`.
- Si quieres empaquetar el app para Windows: `npm run build:win` (requiere `electron-builder` y configuraciones de signing si aplican).

## Sugerencias de capturas para portfolio

- Pantalla principal de la app mostrando el botón/monitor de captura.
- Overlay transparente en modo selección de área (el rectángulo de selección visible).
- Resultado del OCR mostrando texto extraído y el botón para copiar al portapapeles.
- Demostración del fallback: indicar que no hay `backend/ocr_copy` y mostrar que Tesseract CLI produjo resultados.
- Estructura del proyecto en el explorador de archivos (resaltar `backend/`, `tessdata/`, `electron/`).

## Archivos y rutas relevantes

- `index.html` — interfaz principal.
- `overlay.html` — overlay para selección de área.
- `main.js` — proceso principal (IPC y lógica OCR).
- `preload.js` — puente seguro entre renderer y main.
- `backend/ocr_copy` — ejecutable C++ (si está compilado).
- `tessdata/` — datos de idioma (`spa.traineddata`, `eng.traineddata`).

## Qué problema soluciona

Permite capturar texto visible en pantalla rápida y localmente sin depender de servicios en la nube. Es útil para:

- Copiar texto de imágenes o ventanas que no permiten selección.
- Extraer texto para traducción, edición o indexado.
- Flujos offline cuando se compila el backend C++ o se instala Tesseract localmente.

## Puntos técnicos y consideraciones

- Seguridad: `preload.js` y `contextIsolation` están configurados para limitar exposición; el overlay usa `nodeIntegration` por simplicidad.
- Dependencias: `electron` y `electron-builder` están en `devDependencies`.
- Auditoría: tras instalar aparecen advertencias `npm audit` (ver salida). Recomiendo revisarlas antes de publicar.

## Pasos siguientes sugeridos

1. Tomar las capturas sugeridas y exportarlas a una carpeta `portfolio_shots/`.
2. Crear un breve GIF mostrando selección + OCR en acción.
3. Incluir en tu portafolio el `README-snapshot.md` y 3-4 capturas con captions (qué se muestra y por qué es relevante).

## Contacto / notas

Si quieres, puedo:

- Generar automáticamente un set de comandos para tomar capturas (p.ej. usando `nircmd` o herramientas de captura en Windows).
- Preparar un pequeño script que automatice la captura de la ventana de la app.
