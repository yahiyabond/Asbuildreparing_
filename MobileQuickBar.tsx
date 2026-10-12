import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={BUSINESS_INFO.phoneUrl}
          className="btn-excited-call w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white font-extrabold text-xs shadow-lg active:scale-95 whitespace-nowrap"
        >
          <Phone className="w-4 h-4 fill-white animate-phone-ring" />
          <span>Call Now</span>
        </a>
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-excited-whatsapp w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-extrabold text-xs shadow-lg active:scale-95 whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4 fill-white animate-msg-nudge" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
