# Portfolio — Camila Méndez
Personal website & developer portfolio


Sitio web portafolio personal construido con Next.js y TypeScript para mostrar proyectos, experiencia y habilidades.

## Descripción

Este repositorio contiene la web personal / portafolio, disponible en español e inglés. Está pensado para presentar proyectos web, ejemplos de visualización y habilidades técnicas, con un diseño moderno, responsive y animaciones sutiles.

## Características

- Interfaz moderna y responsive.
- Soporte bilingüe (ES / EN) mediante un contexto de idioma.
- Secciones: Hero, Sobre mí, Educación, Experiencia, Proyectos, Habilidades y Contacto.

- Carrusel de imágenes para proyectos (embla-carousel).
- Descarga de CV.
- Optimizada para despliegue en Vercel.

## Stack Tecnológico

- Next.js (App Router)
- TypeScript
- Tailwind CSS

- Framer Motion (animaciones)
- embla-carousel-react (carrusel de imágenes)

## Estructura principal

- `src/app/` — código de la aplicación (rutas, layout, páginas)
  - `components/` — componentes reutilizables
  - `context/LanguageContext.tsx` — proveedor de idioma y traducciones

- `public/` — activos estáticos (imágenes, CV PDF)

## Requisitos

- Node.js (16+)
- npm o yarn

## Instalación y ejecución local

```bash
# clonar
git clone <repo-url>
cd portfolio

# instalar dependencias
npm install

# ejecutar en modo desarrollo
npm run dev
```

La app correrá en `http://localhost:3000`.

## Scripts útiles

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — ejecutar build en modo producción

## Despliegue en Vercel

1. Conectar el repositorio en Vercel (import project).
2. Variables: no requiere variables especiales por defecto.
3. Comando de build: `npm run build`.
4. Salida: `vercel` detecta automáticamente Next.js.


## Internacionalización (i18n)

Se usa un `LanguageContext` simple con claves de traducción en `src/app/context/LanguageContext.tsx`. Para agregar o editar texto:

- Abrir `LanguageContext.tsx` y añadir las claves en `en` y `es`.
- Reemplazar textos hardcodeados por `const { t } = useLanguage();` y usar `t('clave')`.

Consejo: si un componente define funciones internas que usan `t(...)`, asegúrate de llamar `useLanguage()` dentro del mismo scope donde se usa.


## Personalización rápida

- Información personal y traducciones: `src/app/context/LanguageContext.tsx`.
- Proyectos: `src/app/components/ProjectsSection.tsx`.
- CV: reemplaza `public/CamilaMendez_CV.pdf` con tu versión 

## Contacto

- Email mostrado en la web: `mendezcamilaitati@gmail.com`.
- 🌐 Sitio en producción: https://portfolio-camila-mendez.vercel.app/
