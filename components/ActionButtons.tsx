
import React from 'react';
import { BrokerData } from '../types';

interface ActionButtonsProps {
  data: BrokerData;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ data }) => {
  const actions = [
    {
      label: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      link: `https://api.whatsapp.com/send?phone=${data.whatsapp.replace(/\D/g, '')}`,
      color: 'hover:bg-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      label: 'Endereço',
      icon: 'fas fa-location-dot',
      link: data.location,
      color: 'hover:bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      label: 'E-mail',
      icon: 'far fa-envelope',
      link: `mailto:${data.email}`,
      color: 'hover:bg-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      label: 'Portfólio',
      icon: 'fas fa-globe',
      link: data.website,
      color: 'hover:bg-amber-500/20',
      iconColor: 'text-amber-400'
    }
  ];

  return (
    <>
      {actions.map((action, idx) => (
        <a
          key={idx}
          href={action.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 transform hover:scale-105 ${action.color}`}
        >
          <i className={`${action.icon} ${action.iconColor} text-2xl mb-2 transition-transform group-hover:scale-110`}></i>
          <span className="text-[10px] uppercase font-semibold tracking-widest text-white/60 group-hover:text-white transition-colors">
            {action.label}
          </span>
        </a>
      ))}
    </>
  );
};
