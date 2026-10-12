import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background animated glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none animate-float-reverse" />
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <div className="editorial-kicker text-blue-300">
              Direct Customer Support
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display text-shadow-strong text-balance">
              Need <span className="animated-gradient-text inline-block">Appliance Repair?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
              Reach out directly to <strong className="text-white font-bold">AS build Repairing</strong>. We are ready to assist you with prompt on-site diagnostics and reliable doorstep repair.
            </p>

            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4 text-left">
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-blue-500/70 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="text-xs uppercase tracking-wider font-medium text-slate-400 mb-1">
                    Direct Call
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneUrl}
                    className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight font-display flex items-center gap-2"
                  >
                    <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Tap to dial immediately from your phone
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 hover:border-blue-500/70 transition-colors flex flex-col justify-between group">
                <div>
                  <div className="text-xs uppercase tracking-wider font-medium text-slate-400 mb-1">
                    Email Inquiry
                  </div>
                  <a
                    href={BUSINESS_INFO.emailUrl}
                    className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight font-display break-all flex items-center gap-2"
                  >
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    Send photos of appliance label or issue
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Buttons: Call Now, WhatsApp, Email Us */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
              <a
                href={BUSINESS_INFO.phoneUrl}
                className="btn-excited-call inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-black text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-[0_12px_30px_-5px_rgba(37,99,235,0.7)] transition-all whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 transform ring-2 ring-blue-400/50"
              >
                <Phone className="w-5 h-5 fill-white animate-phone-ring" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-excited-whatsapp inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-black text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-[0_12px_30px_-5px_rgba(16,185,129,0.7)] transition-all whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 transform ring-2 ring-emerald-400/50"
              >
                <MessageSquare className="w-5 h-5 fill-white animate-msg-nudge" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.emailUrl}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 border border-slate-600 hover:border-blue-400 rounded-xl shadow-md transition-all whitespace-nowrap shrink-0"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-800/80 max-w-xl mx-auto text-xs text-slate-400">
              <p className="font-semibold text-slate-300 mb-1">
                Tip when contacting us:
              </p>
              <p>
                Mention the appliance type (AC, Fridge, Washing Machine, Microwave, or Water Dispenser) and a brief description of the issue for quickest assistance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
