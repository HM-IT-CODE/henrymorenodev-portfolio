# Sistema de Gestión de Garantías MeruQ

## Descripción

Este proyecto es una aplicación web desarrollada para la gestión de garantías de productos tecnológicos, permitiendo a los clientes registrar solicitudes de recolección, consultar el estado de sus garantías y a los administradores gestionar reportes y análisis globales de costos.

## Características principales

- **Formulario de Garantías:** Permite a los clientes registrar productos para garantía, validando datos y autocompletando información según el RIF.
- **Confirmación de Dirección:** Modal interactivo para confirmar o editar la dirección de recolección.
- **Búsqueda avanzada:** Búsqueda por serial, factura o descripción, con integración de DataTables para reportes.
- **Reportes y análisis:** Exportación de reportes a PDF y Excel, filtros avanzados y visualización de costos.
- **Integración con Supabase:** Almacena datos de clientes y artículos en la nube.
- **Notificaciones y UX:** Uso de SweetAlert2 y Semantic UI para una experiencia de usuario moderna y amigable.

## Tecnologías utilizadas

- **React** (v18)
- **Redux** y **Redux Toolkit**
- **Formik** y **Yup** para formularios y validaciones
- **Semantic UI React** para componentes visuales
- **SweetAlert2** para notificaciones
- **Supabase** para backend y almacenamiento
- **Axios** para peticiones HTTP
- **jsPDF** y **XLSX** para exportación de reportes
- **DataTables** (con jQuery) para tablas avanzadas
- **SASS** para estilos personalizados

## Estructura del proyecto

```
src/
├── actions/                # Acciones de Redux
├── assets/                 # Imágenes y recursos estáticos
├── components/
│   ├── formularios/
│   │   └── tecnologia/
│   │       ├── ConfirmAddressModal.jsx   # Modal para confirmar dirección
│   │       ├── FormHeader.jsx           # Encabezado del formulario
│   │       ├── FormFields.jsx           # Campos del formulario
│   │       ├── FormButtons.jsx          # Botones del formulario
│   │       ├── Tecnologia.jsx           # Componente principal del formulario
│   │       └── ...                      # Otros componentes auxiliares
│   ├── pages/
│   │   └── components/
│   │       └── Reports/
│   │           └── ListReports/
│   │               └── Garantia_General.jsx # Reporte general de garantías
│   └── ...                      # Otros componentes globales
├── reducers/                # Reducers de Redux
├── utils/                   # Utilidades (ej: supabase.js)
├── styles/                  # Archivos SASS/SCSS
└── index.js                 # Punto de entrada de la app
```
