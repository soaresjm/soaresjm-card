
import { BrokerData } from './types';

export const downloadVCard = (data: BrokerData) => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
ORG:Design & AI Studio
TITLE:${data.role}
TEL;TYPE=CELL:${data.whatsapp}
EMAIL:${data.email}
URL:${data.website}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${data.name.replace(/\s+/g, '_')}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
