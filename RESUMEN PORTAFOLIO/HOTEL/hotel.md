# Sistema de Gestión Hotelera - Next.js + Electron

## Descripción General

Este proyecto es una aplicación de gestión hotelera desarrollada con Next.js, Prisma, PostgreSQL y Electron. Permite la administración de habitaciones, reservas, huéspedes, pagos, reportes y más, integrando una interfaz moderna y funcionalidades avanzadas para la operación diaria de un hotel.

## Tecnologías Utilizadas

- **Next.js**: Framework React para aplicaciones web modernas y SSR.
- **Electron**: Empaquetado de la app como aplicación de escritorio multiplataforma.
- **Prisma ORM**: Acceso y modelado de datos en PostgreSQL.
- **PostgreSQL**: Base de datos relacional robusta y escalable.
- **Material-UI**: Componentes visuales modernos y responsivos.
- **TypeScript**: Tipado estático para mayor robustez y mantenibilidad.

## Funcionalidades Principales

- **Gestión de habitaciones**: Alta, edición, listado y control de estado de habitaciones.
- **Reservas y huéspedes**: Registro, edición y seguimiento de reservas y huéspedes.
- **Pagos y caja**: Control de pagos, métodos de pago y caja diaria.
- **Reportes**: Generación de reportes de ocupación y actividad.
- **Panel administrativo**: Gestión de usuarios y roles.
- **Integración con Electron**: Ejecución como app de escritorio.

## Estructura del Proyecto

```
next-electron-app/
├── prisma/           # Esquema y migraciones de base de datos
├── public/           # Recursos estáticos
├── src/
│   ├── app/          # Páginas y rutas Next.js
│   ├── components/   # Componentes reutilizables (UI, formularios, paneles)
│   ├── context/      # Contextos globales (ej. usuario)
│   └── lib/          # Utilidades y cliente Prisma
├── package.json      # Dependencias y scripts
└── ...
```

## Ejemplo de Modelo Prisma

```prisma
model Habitacion {
  id         Int    @id @default(autoincrement())
  numero     Int    @unique
  piso       Int
  tipo       TipoHabitacion
  capacidad  Int
  precioBase Float?
  estado     EstadoHabitacion @default(DISPONIBLE)
  // ...relaciones y campos adicionales
}
```

## Ejemplo de Endpoint API (Next.js Route Handler)

```typescript
// POST /api/habitaciones
export async function POST(req: Request) {
  const data = await req.json();
  // Validación y creación
  const habitacion = await prisma.habitacion.create({ data });
  return NextResponse.json(habitacion, { status: 201 });
}
```

## Ejemplo de Componente React (Formulario de Habitación)

```tsx
<HabitacionFormModal
  open={openForm}
  onClose={() => setOpenForm(false)}
  onSave={handleSave}
  initialData={editData}
  loading={formLoading}
  error={formError}
/>
```

## Cómo Ejecutar el Proyecto

1. Clona el repositorio y entra al directorio.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno y la base de datos.
4. Ejecuta migraciones Prisma:
   ```bash
   npx prisma migrate dev
   ```
5. Inicia la app:
   ```bash
   npm run dev
   ```
6. (Opcional) Empaqueta con Electron para escritorio.

## Valor Profesional

- Arquitectura moderna y escalable.
- Buenas prácticas de tipado y validación.
- Integración fullstack (frontend, backend y base de datos).
- UI profesional y experiencia de usuario avanzada.
- Documentación y código limpio para portafolio profesional.

---

> Proyecto desarrollado por Henry Moreno. Para más información, contacta a [hmorenosifontes@gmail.com].
