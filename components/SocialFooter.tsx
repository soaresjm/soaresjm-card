
import React from 'react';

interface SocialFooterProps {
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
}

export const SocialFooter: React.FC<SocialFooterProps> = ({ socials }) => {
  const links = [
    { icon: 'fab fa-instagram', url: socials.instagram },
    { icon: 'fab fa-linkedin-in', url: socials.linkedin },
    { icon: 'fab fa-facebook-f', url: socials.facebook },
  ];

  return (
    <div className="flex gap-8 mt-10">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          className="text-white/40 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-125"
        >
          <i className={`${link.icon} text-xl`}></i>
        </a>
      ))}
    </div>
  );
};
