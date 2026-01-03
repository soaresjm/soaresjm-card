
import React from 'react';
import { Profile } from './components/Profile';
import { ActionButtons } from './components/ActionButtons';
import { PropertyHighlight as FeaturedProject } from './components/PropertyHighlight';
import { SocialFooter } from './components/SocialFooter';
import { downloadVCard } from './vcardService';
import { BrokerData } from './types';

const PROFESSIONAL_INFO: BrokerData = {
  name: 'Soares JM',
  role: 'Web & Graphic Designer | Analista de IA',
  bio: 'Unindo a estética do design de alto padrão com o poder da inteligência artificial para criar experiências digitais exclusivas.',
  photoUrl: 'https://scontent.fmpm1-1.fna.fbcdn.net/v/t39.30808-6/455448373_10218652058560395_1797305952875151241_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=WkUjS6D-4x4Q7kNvgFYvY0N&_nc_oc=AdhO5n0X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X&_nc_zt=23&_nc_ht=scontent.fmpm1-1.fna&_nc_gid=A_X5X5X5X5X5X5X5X5X5X5X&oh=00_AYC5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5&oe=67BE5X5X', // Note: Direct image URLs from FB can expire, ideally use a permanent host.
  whatsapp: '+258848865961',
  email: 'soares.m15@gmail.com',
  website: 'https://www.soaresjm.rf.gd',
  location: 'https://www.google.com/maps/place/5G4Q%2BXR6+SOARES+JM,+Matola/@-25.8389522,32.5409324,15z/data=!4m6!3m5!1s0x1ee69307307687b3:0xadd16f56e8a0216f!8m2!3d-25.8425891!4d32.5395303!16s%2Fg%2F11j84xm3_g?force=pwa&source=mlapk&g_ep=Eg1tbF8yMDI1MTIwOF8wIOC7DCoASAJQAA%3D%3D',
  socials: {
    instagram: '#',
    linkedin: '#',
    facebook: 'https://www.facebook.com/soares.jm',
  }
};

const App: React.FC = () => {
  const handleSaveContact = () => {
    downloadVCard(PROFESSIONAL_INFO);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start py-8 px-4 overflow-y-auto">
      {/* Background with dark tech/creative overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]"></div>
      </div>

      {/* Main Glassmorphism Card */}
      <main className="relative z-10 w-full max-w-[420px] glass-container rounded-[2.5rem] p-6 flex flex-col items-center text-white animate-fade-in shadow-2xl border-white/10">
        
        <Profile data={PROFESSIONAL_INFO} />

        <div className="w-full mt-8 grid grid-cols-2 gap-3">
          <ActionButtons data={PROFESSIONAL_INFO} />
        </div>

        {/* Large Highlight Save Button */}
        <button 
          onClick={handleSaveContact}
          className="w-full mt-4 py-4 px-6 bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold text-sm tracking-widest rounded-2xl transition-all duration-300 transform active:scale-95 gold-glow flex items-center justify-center gap-2 uppercase"
        >
          <i className="fas fa-id-card text-lg"></i>
          Salvar Contato
        </button>

        <FeaturedProject />

        <SocialFooter socials={PROFESSIONAL_INFO.socials} />

        <div className="mt-8 text-[10px] text-white/40 tracking-wider uppercase">
          &copy; 2025 Soares JM • Design & AI Studio
        </div>
      </main>
    </div>
  );
};

export default App;
