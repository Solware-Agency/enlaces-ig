import {Crown, Calendar, Linkedin } from "lucide-react";

//aquí ponen el logo de solware
const solwareLogo =
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/Logos/Svg/Logo_Blanco_Solware.svg";

export default function Linktree() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Fondos animados */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ... (puedes dejar los fondos animados como en tu código) ... */}
      </div>
      {/* Contenido principal */}
      <div className="relative z-10 max-w-sm w-full mx-auto">
        <div
          className="backdrop-blur-md bg-white/90 dark:bg-gray-800/80 border border-white/30 shadow-2xl rounded-3xl overflow-hidden"
        >
          {/* Encabezado */}
          <div className="bg-gradient-to-br from-slate-800/90 to-indigo-900/90 backdrop-blur-sm p-6 text-center border-b border-white/10 rounded-t-3xl">
            <img
              src={solwareLogo}
              alt="Solware Logo"
              className="w-16 h-16 mx-auto mb-2 rounded-full shadow-lg bg-white/20 p-2"
            />
            <h2 className="text-2xl font-bold text-white mb-1">Solware</h2>
            <p className="text-white/80 text-xs">
              Accesos rápidos a nuestros proyectos y contacto
            </p>
            {/* Módulo pequeño de reconocimiento Hackathon IESA */}
            <div className="flex items-center justify-center gap-3 mt-4 rounded-xl px-4 py-2 border border-yellow-400/60 dark:border-yellow-300/40 bg-white/10 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="flex-shrink-0">
                <a href="https://www.iesa.edu.ve" target="_blank" rel="noopener noreferrer">
                  <img src="/Logo IESA.png" alt="IESA Hackathon Logo" className="w-10 h-10 rounded-full shadow" />
                </a>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 dark:text-yellow-400 mr-1"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
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
              <img src={solwareLogo} alt="Solware" className="w-7 h-7" />
              <span className="font-semibold text-white text-base">Web de Solware</span>
            </a>
            <a
              href="https://calendar.app.google/EYruMbWpJwJ82gHr6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_32px_0_rgba(168,85,247,0.7)]"
              aria-label="Agendar"
            >
              <Calendar className="w-7 h-7 text-white stroke-[1.2]" />
              <span className="font-semibold text-white text-base">Agendar</span>
            </a>
            <a
              href="http://www.solhub.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_32px_0_rgba(59,130,246,0.7)]"
              aria-label="Solhub"
            >
              <Crown className="w-7 h-7 text-white stroke-[1.2]" />
              <span className="font-semibold text-white text-base">Solhub</span>
            </a>
            <a
              href="https://www.linkedin.com/company/agencia-solware"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:bg-[#0077b5] hover:shadow-[0_0_32px_0_rgba(0,119,181,0.7)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 text-white stroke-[1.2]" />
              <span className="font-semibold text-white text-base">LinkedIn</span>
            </a>
            <a
              href="https://wa.me/584129974533"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/20 shadow-lg border border-white/20 transition-all duration-300 group hover:scale-105 hover:bg-[#25D366] hover:shadow-[0_0_32px_0_rgba(37,211,102,0.7)]"
              aria-label="WhatsApp"
            >
              <svg
                className="w-7 h-7 text-white mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.787"/>
              </svg>
              <span className="font-semibold text-white text-base">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}