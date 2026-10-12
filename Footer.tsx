import React from 'react';
import { Phone, Mail, MessageSquare, Wrench, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/repairData';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2 group text-white">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                {BUSINESS_INFO.name}
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional doorstep repair and servicing for air conditioners, refrigerators, washing machines, microwave ovens, and water dispensers.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase font-semibold text-slate-500 tracking-wider block mb-2.5">
                Connect Directly
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.phoneUrl}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
                  aria-label="Call Business Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-colors"
                  aria-label="WhatsApp Business Chat"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.emailUrl}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Repair Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blue-400 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-500 block">Phone:</span>
                <a
                  href={BUSINESS_INFO.phoneUrl}
                  className="font-bold text-white hover:text-blue-400 transition-colors text-base font-display tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Email:</span>
                <a
                  href={BUSINESS_INFO.emailUrl}
                  className="text-slate-300 hover:text-blue-400 transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <span className="text-xs text-slate-500 block">Service Hours:</span>
                <span className="text-slate-300 text-xs">{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
