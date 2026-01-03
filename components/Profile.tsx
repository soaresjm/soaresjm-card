
import React from 'react';
import { BrokerData } from '../types';

interface ProfileProps {
  data: BrokerData;
}

export const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Profile Photo */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full border-[3px] border-[#D4AF37] p-1 overflow-hidden bg-black/50">
          <img 
            src={data.photoUrl} 
            alt={data.name} 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-[#D4AF37] w-8 h-8 rounded-full flex items-center justify-center border-2 border-black/20">
          <i className="fas fa-check text-black text-xs"></i>
        </div>
      </div>

      <h1 className="text-2xl font-bold tracking-tight mb-1">{data.name}</h1>
      <h2 className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase mb-4">
        {data.role}
      </h2>
      <p className="text-white/70 text-sm leading-relaxed max-w-[280px]">
        "{data.bio}"
      </p>
    </div>
  );
};
