import Image from "next/image";

// Componentes de iconos SVG
const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CrownIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-yellow-500 dark:text-yellow-400">
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF8C00" />
      </linearGradient>
    </defs>
    <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2"/>
    <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2"/>
    <path d="M18 9h1.5a1 1 0 0 0 0-5H18" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2"/>
    <path d="M4 22h16" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2"/>
    <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="1"/>
    <path d="M6 9H4.5a1 1 0 0 1 0-5H6" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.787"/>
  </svg>
);

//aquí ponen el logo de solware
const solwareLogo =
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/Logos/Svg/Logo_Blanco_Solware.svg";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Fondos animados */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Círculos flotantes animados con nuevas animaciones */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 animate-float animate-glow animate-morph" 
             style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 right-16 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse animate-float" 
             style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-20 w-12 h-12 bg-indigo-400/20 animate-bounce animate-glow" 
             style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400/20 animate-pulse animate-morph" 
             style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        
        {/* Formas geométricas flotantes */}
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-yellow-400/30 rotate-45 animate-slow-spin animate-glow" 
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 right-5 w-6 h-6 bg-pink-400/30 rotate-12 animate-ping animate-float" 
             style={{ animationDelay: '1.5s' }}></div>
        
        {/* Ondas de gradiente mejoradas */}
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-slow-spin"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full animate-slow-spin" 
             style={{ animationDirection: 'reverse' }}></div>
        
        {/* Más círculos con efectos */}
        <div className="absolute top-1/5 left-3/4 w-14 h-14 bg-emerald-400/20 animate-float animate-glow" 
             style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/5 left-1/5 w-10 h-10 bg-rose-400/20 animate-morph animate-pulse" 
             style={{ animationDelay: '4s' }}></div>
        
        {/* Partículas flotantes pequeñas mejoradas */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-ping animate-float" 
             style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-white/50 rounded-full animate-pulse animate-glow" 
             style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-bounce animate-morph" 
             style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-3/5 right-1/3 w-2 h-2 bg-white/35 rounded-full animate-float animate-glow" 
             style={{ animationDelay: '5s' }}></div>
        
        {/* Formas adicionales para más dinamismo */}
        <div className="absolute top-1/8 right-1/8 w-6 h-6 bg-violet-400/25 animate-slow-spin animate-pulse" 
             style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/8 left-1/8 w-8 h-8 bg-teal-400/25 animate-float animate-morph" 
             style={{ animationDelay: '7s' }}></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-sm w-full mx-auto">
        <div className="backdrop-blur-md bg-white/90 dark:bg-gray-800/80 border border-white/30 shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Encabezado */}
          <div className="bg-gradient-to-br from-slate-800/90 to-indigo-900/90 backdrop-blur-sm p-6 text-center border-b border-white/10 rounded-t-3xl">
            <Image
              src={solwareLogo}
              alt="Solware Logo"
              width={64}
              height={64}
              className="mx-auto mb-2 rounded-full shadow-lg bg-white/20 p-2"
            />
            <h2 className="text-2xl font-bold text-white mb-1">Solware</h2>
            <p className="text-white/80 text-xs">
              Accesos rápidos a nuestros proyectos y contacto
            </p>
            
            {/* Módulo pequeño de reconocimiento Hackathon IESA */}
            <div className="flex items-center justify-center gap-3 mt-4 rounded-xl px-4 py-2 border border-yellow-400/60 dark:border-yellow-300/40 bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="flex-shrink-0">
                <a href="https://www.iesa.edu.ve" target="_blank" rel="noopener noreferrer">
                  <Image src="/Logo IESA.png" alt="IESA Hackathon Logo" width={40} height={40} className="rounded-full shadow" />
                </a>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <TrophyIcon />
                  <span className="font-semibold text-sm text-gray-900 dark:text-white">Ganadores Hackathon IESA 2025</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="flex flex-col items-center w-full">
                    <span className="text-xs text-purple-700 dark:text-purple-300 font-semibold">1er Lugar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fila de accesos */}
          <div className="flex flex-col gap-4 py-8 px-6 bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm">
            <a
              href="https://www.solware.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_32px_0_rgba(59,130,246,0.7)]"
              aria-label="Web de Solware"
            >
              <Image src={solwareLogo} alt="Solware" width={28} height={28} />
              <span className="font-semibold text-white text-base">Web de Solware</span>
            </a>
            
            <a
              href="https://calendar.app.google/EYruMbWpJwJ82gHr6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.7)]"
              aria-label="Agendar"
            >
              <CalendarIcon />
              <span className="font-semibold text-white text-base">Agendar</span>
            </a>
            
            <a
              href="http://www.solhub.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_32px_0_rgba(59,130,246,0.7)]"
              aria-label="Solhub"
            >
              <CrownIcon />
              <span className="font-semibold text-white text-base">Solhub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/company/agencia-solware"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:bg-[#0077b5] hover:shadow-[0_0_32px_0_rgba(0,119,181,0.7)]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
              <span className="font-semibold text-white text-base">LinkedIn</span>
            </a>
            
            <a
              href="https://wa.me/584129974533"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:bg-[#25D366] hover:shadow-[0_0_32px_0_rgba(37,211,102,0.7)]"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
              <span className="font-semibold text-white text-base">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
