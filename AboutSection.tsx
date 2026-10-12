import React from 'react';
import { motion } from 'motion/react';
import { Check, Home, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
                About Our Service
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display text-balance">
                Dedicated to <span className="animated-brand-text">Reliable Appliance Care</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">AS build Repairing</strong> provides professional repair and maintenance services for everyday household appliances. When your air conditioner stops cooling, refrigerator fails to maintain temperature, or washing machine runs into a draining issue, having dependable doorstep service makes all the difference.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              We focus on clear communication, prompt on-site diagnostics, and practical solutions. Instead of transporting bulky machinery to distant workshops, our technician visits your residence to inspect the fault, identify the underlying cause, and restore proper function with minimal disruption to your daily schedule.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-blue-600 flex items-center justify-center">
                    <Home className="w-4 h-4" />
                  </div>
                  <span>On-Site Diagnostics</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Inspections conducted at your premises for your convenience and safety.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-600 flex items-center justify-center">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <span>Direct Communication</span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Speak directly with the service contact at <span className="tabular-nums font-medium">8688446317</span> with no call center layers.
                </p>
              </div>
            </div>

            {/* 3-Step Simple Process */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                How Our Service Works
              </span>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/60">
                  <span className="text-xs font-extrabold text-blue-600 font-display block">01. Reach Out</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight tabular-nums">Call or WhatsApp 8688446317</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/60">
                  <span className="text-xs font-extrabold text-blue-600 font-display block">02. Inspection</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight">Technician doorstep visit</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/60">
                  <span className="text-xs font-extrabold text-blue-600 font-display block">03. Solution</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight">Clear repair & check</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <a
                href={BUSINESS_INFO.phoneUrl}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md whitespace-nowrap shrink-0"
              >
                <span>Contact AS build Repairing</span>
              </a>
              <span className="text-xs text-slate-500">
                Ready to assist with your appliance needs
              </span>
            </div>
          </motion.div>

          {/* Right Column: Visual Feature Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-slate-900 text-white p-8 overflow-hidden shadow-xl border border-slate-800 shimmer-card group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-blue-600/25 rounded-full blur-2xl pointer-events-none animate-float-slow" />
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-40 h-40 bg-emerald-600/15 rounded-full blur-2xl pointer-events-none animate-float-reverse" />

              <h3 className="text-xl font-bold font-display text-white mb-4">
                Our Service Standards
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>
                    <strong className="text-white block font-medium">Clear Problem Explanation</strong>
                    We explain what part is faulty and why the issue occurred before proceeding.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>
                    <strong className="text-white block font-medium">Clean & Respectful Work</strong>
                    We treat your living space with care and maintain a clean work area during repairs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>
                    <strong className="text-white block font-medium">Genuine Attention to Detail</strong>
                    Testing the appliance post-repair to confirm stability and normal operation.
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Direct service assistance</span>
                <span className="font-semibold text-blue-400 tabular-nums">8688446317</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
