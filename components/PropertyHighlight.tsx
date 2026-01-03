
import React from 'react';

export const PropertyHighlight: React.FC = () => {
  const projectUrl = "https://www.kasadigitalmoz.com";

  return (
    <div className="w-full mt-10">
      <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-4 flex items-center gap-2">
        <span className="w-4 h-[1px] bg-[#D4AF37]/50"></span>
        Projeto em Destaque
      </h3>
      
      <a 
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition-transform duration-300 active:scale-[0.98]"
      >
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
          alt="Kasa Digital Moz" 
          className="w-full h-40 object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-4">
          <p className="text-sm font-bold mb-1 tracking-wide">Kasa Digital Moz</p>
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-white/60">Plataforma Digital • Web Design • Inovação</span>
            <div className="px-3 py-1.5 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg text-[9px] uppercase tracking-wider text-[#D4AF37] font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
              Acessar Site
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
