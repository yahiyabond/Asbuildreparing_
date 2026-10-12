import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  CheckCircle2,
  Wind,
  Refrigerator,
  Disc,
  Zap,
  Droplets,
  MessageSquare,
  ArrowRight,
  Maximize2,
  X,
  Wrench,
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/repairData';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxService, setLightboxService] = useState<ServiceItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-5 h-5 text-sky-400" />;
      case 'Refrigerator':
        return <Refrigerator className="w-5 h-5 text-sky-400" />;
      case 'Disc':
        return <Disc className="w-5 h-5 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-sky-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-sky-400" />;
      default:
        return <Wrench className="w-5 h-5 text-sky-400" />;
    }
  };

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.id === selectedCategory);

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="editorial-kicker text-blue-600 mb-2 flex items-center gap-2 flex-wrap">
            <span>Our Core Specialization</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-emerald-700">Budget Friendly Doorstep Service</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display text-balance">
            Home Appliance <span className="animated-brand-text">Repair & Servicing</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Professional on-site inspection, certified maintenance, and reliable troubleshooting for essential household appliances.
          </p>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-6 p-1.5 bg-slate-200/75 rounded-xl max-w-fit">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              All 5 Services
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedCategory(s.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 ${
                  selectedCategory === s.id
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {s.title.split('&')[0].replace('Repair', '').trim()}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Service Cards Grid with Accurate 4:3 Appliance Repair Photos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const getBorderAccent = (id: string) => {
              switch (id) {
                case 'ac-repair':
                  return 'hover:border-cyan-400';
                case 'fridge-repair':
                  return 'hover:border-indigo-400';
                case 'washing-machine-repair':
                  return 'hover:border-blue-400';
                case 'microwave-repair':
                  return 'hover:border-amber-400';
                case 'water-dispenser-repair':
                  return 'hover:border-emerald-400';
                default:
                  return 'hover:border-blue-400';
              }
            };

            const isFailed = failedImages[service.id];

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group shimmer-card ${getBorderAccent(
                  service.id
                )}`}
              >
                {/* Accurate 4:3 Image Header matching generated 4:3 aspect ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  {!isFailed ? (
                    <img
                      src={service.image}
                      alt={`${service.title} - ${service.imageCaption || service.category}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [service.id]: true }))
                      }
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center">
                      {getServiceIcon(service.iconName)}
                      <span className="mt-2 text-sm font-bold text-white font-display">
                        {service.title}
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        {service.category}
                      </span>
                    </div>
                  )}

                  {/* Measured contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Inspect Full Photo Button */}
                  {!isFailed && (
                    <button
                      type="button"
                      onClick={() => setLightboxService(service)}
                      className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/15 shadow-md transition-all opacity-90 group-hover:opacity-100 hover:scale-105"
                      title={`View full photo of ${service.title}`}
                      aria-label={`View full photo of ${service.title}`}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  )}

                  {/* Bottom Service Category Overlay */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      {getServiceIcon(service.iconName)}
                      <span className="font-bold tracking-wide text-white drop-shadow-xs">
                        0{index + 1}. {service.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 font-display group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    {service.imageCaption && (
                      <p className="mt-1 text-xs font-semibold text-blue-600">
                        {service.imageCaption}
                      </p>
                    )}
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Common issues checklist */}
                    <div className="mt-5 pt-4 border-t border-slate-100 bg-slate-50/60 -mx-6 sm:-mx-7 px-6 sm:px-7 py-3">
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2.5">
                        Common Issues Handled:
                      </span>
                      <ul className="space-y-2">
                        {service.commonIssues.map((issue) => (
                          <li
                            key={issue}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                    <a
                      href={BUSINESS_INFO.phoneUrl}
                      className="btn-excited-call w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-md transition-all hover:scale-103 active:scale-95 transform whitespace-nowrap shrink-0"
                    >
                      <Phone className="w-4 h-4 fill-white animate-phone-ring" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={`https://wa.me/918688446317?text=Hello%20AS%20build%20Repairing%2C%20I%20need%20assistance%20with%20${encodeURIComponent(
                        service.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-excited-whatsapp w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all border border-emerald-300 hover:scale-103 active:scale-95 transform whitespace-nowrap shrink-0"
                      title="Inquire via WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600 animate-msg-nudge" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informational Callout Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-blue-200 transition-colors">
          <div>
            <h4 className="text-base font-bold text-slate-900 font-display">
              Unsure what is causing the appliance issue?
            </h4>
            <p className="text-sm text-slate-600 mt-0.5">
              Call us directly at{' '}
              <span className="font-semibold text-slate-900 tabular-nums">8688446317</span>{' '}
              and describe the sounds, leaks, or cooling behavior you notice.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.phoneUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all whitespace-nowrap shrink-0"
          >
            <span>Speak to Technician</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* High-Resolution Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setLightboxService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 text-white">
                <div>
                  <h3 className="text-lg font-bold font-display">
                    {lightboxService.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {lightboxService.imageCaption || lightboxService.category}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxService(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-hidden">
                <img
                  src={lightboxService.image}
                  alt={lightboxService.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  {lightboxService.description}
                </p>
                <a
                  href={BUSINESS_INFO.phoneUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors whitespace-nowrap shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span className="tabular-nums">Book Service: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
