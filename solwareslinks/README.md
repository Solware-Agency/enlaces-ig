# Solware Linktree - Next.js

Una página de enlaces estilo Linktree para Solware, construida con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- ✨ Diseño moderno con gradientes animados
- 🏆 Sección de reconocimiento Hackathon IESA con copa dorada
- 📱 Completamente responsive
- ⚡ Optimizado para Vercel
- 🎨 Animaciones CSS personalizadas
- 🔗 Enlaces a proyectos y redes sociales de Solware

## 🛠️ Tecnologías

- **Next.js 15.5.4** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **SVG Icons** - Iconos personalizados sin dependencias externas

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Solware-Agency/enlaces-ig.git

# Navegar al directorio
cd solwareslinks

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🚀 Deployment en Vercel

### Configuración Automática

1. **Conecta tu repositorio**: Ve a [Vercel](https://vercel.com) y conecta tu repositorio de GitHub
2. **Configuración automática**: Vercel detectará automáticamente que es un proyecto Next.js
3. **Deploy**: Haz clic en "Deploy" y ¡listo!

### Configuración Manual (si es necesario)

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install`

### Variables de Entorno (opcional)

Si necesitas configurar variables de entorno, crea un archivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

## 📁 Estructura del Proyecto

```
solwareslinks/
├── app/
│   ├── globals.css          # Estilos globales y animaciones
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de inicio (Linktree)
├── public/
│   └── iesa-logo.svg        # Logo de IESA
├── vercel.json              # Configuración de Vercel
├── next.config.ts           # Configuración de Next.js
└── package.json             # Dependencias y scripts
```

## 🎨 Personalización

### Cambiar Enlaces
Edita el archivo `app/page.tsx` para modificar los enlaces y texto.

### Actualizar Animaciones
Las animaciones personalizadas están en `app/globals.css`.

### Cambiar Colores
Los colores se manejan con clases de Tailwind CSS en los componentes.

## 📞 Contacto

- **Web**: [solware.agency](https://www.solware.agency)
- **LinkedIn**: [Agencia Solware](https://www.linkedin.com/company/agencia-solware)
- **WhatsApp**: [+58 412 997 4533](https://wa.me/584129974533)

## 🏆 Reconocimientos

🥇 **1er Lugar Hackathon IESA 2025**

---

Desarrollado con ❤️ por [Solware Agency](https://www.solware.agency)
