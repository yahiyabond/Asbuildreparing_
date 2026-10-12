import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck, Tag, Wrench, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/repairData';

export const Hero: React.FC = () => {
  const [activeHeroSlide, setActiveHeroSlide] = useState<number>(0);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const showcaseSlides = [
    {
      id: 'main-hero',
      title: 'Multi-Appliance Doorstep Technician',
      subtitle: 'AC · Refrigerator · Washing Machine · Microwave · Water Dispenser',
      image: BUSINESS_INFO.heroImage,
    },
    ...SERVICES.map((s) => ({
      id: s.id,
      title: s.title,
      subtitle: s.imageCaption || s.category,
      image: s.image,
    })),
  ];

  const currentSlide = showcaseSlides[activeHeroSlide] || showcaseSlides[0];

  const marqueeItems = [
    'AC Repair & Service',
    'Refrigerator / Fridge Care',
    'Washing Machine Repair',
    'Microwave Oven Repair',
    'Water Dispenser Repair',
    'Budget Friendly Rates',
    'Doorstep Diagnostics',
    'Direct Hotline: 8688446317',
    'Mon – Sun 9 AM – 11 PM',
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-14 lg:pt-16 lg:pb-16">
      {/* Overhead Spotlight Light Shine */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-4/5 max-w-5xl h-48 bg-gradient-to-b from-sky-400/35 via-blue-500/20 to-transparent blur-3xl pointer-events-none animate-spotlight" />

      {/* Dynamic Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

      {/* Subtle geometric dot grid pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          {/* Left Column: Headline, subheadline, contact display and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Clean unboxed service scope label */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase flex-wrap">
              <span>Doorstep Appliance Repair</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Prompt Diagnostics</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-300 inline-flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-emerald-400" />
                <span>Budget Friendly</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold sm:font-extrabold tracking-normal sm:tracking-tight leading-[1.12] font-display text-balance relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-sky-400/25 to-indigo-500/20 rounded-3xl blur-2xl pointer-events-none -z-10" />
              <span className="headline-luminous-light inline-block">
                Professional
              </span>{' '}
              <span className="text-white/95 font-semibold drop-shadow-md">
                Home Appliance
              </span>{' '}
              <span className="relative inline-block">
                <span className="headline-luminous-light font-bold">
                  Repair Services
                </span>
                <span className="block h-1 w-full bg-gradient-to-r from-sky-400 via-white to-blue-500 rounded-full mt-1.5 shadow-[0_0_14px_rgba(255,255,255,0.85)]" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
              Dependable doorstep repair and diagnostic service for{' '}
              <strong className="text-white font-semibold">ACs</strong>,{' '}
              <strong className="text-white font-semibold">Refrigerators</strong>,{' '}
              <strong className="text-white font-semibold">Washing Machines</strong>,{' '}
              <strong className="text-white font-semibold">Microwave Ovens</strong>, and{' '}
              <strong className="text-white font-semibold">Water Dispensers</strong>.
            </p>

            {/* Direct Phone Number Display Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-800/95 to-slate-900/90 border border-blue-500/40 backdrop-blur-xl max-w-xl shadow-[0_10px_35px_-10px_rgba(37,99,235,0.3)] hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-blue-300 flex items-center gap-2 flex-wrap">
                    <span>Direct Service Hotline</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-emerald-300 inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Trusted Technician</span>
                    </span>
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneUrl}
                    className="text-2xl sm:text-3xl font-extrabold text-white hover:text-blue-400 transition-colors tracking-tight font-display flex items-center gap-2 mt-0.5"
                  >
                    <span className="tabular-nums drop-shadow-md">{BUSINESS_INFO.phone}</span>
                  </a>
                </div>
                <a
                  href={BUSINESS_INFO.phoneUrl}
                  className="btn-excited-call inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 transform whitespace-nowrap shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 fill-white animate-phone-ring" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Action Buttons: Call Now & WhatsApp */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={BUSINESS_INFO.phoneUrl}
                className="btn-excited-call inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-black text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-[0_12px_30px_-5px_rgba(37,99,235,0.6)] transition-all whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 transform ring-2 ring-blue-400/50"
              >
                <Phone className="w-5 h-5 fill-white animate-phone-ring" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-excited-whatsapp inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-black text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-[0_12px_30px_-5px_rgba(16,185,129,0.6)] transition-all whitespace-nowrap shrink-0 hover:scale-105 active:scale-95 transform ring-2 ring-emerald-400/50"
              >
                <MessageSquare className="w-5 h-5 fill-white animate-msg-nudge" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Unboxed Metadata indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="tabular-nums">Mon – Sun, 9:00 AM – 11:00 PM</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Doorstep Service Available</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>All 5 Major Appliances Covered</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accurate Interactive Appliance Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-3"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-800 group shimmer-card ring-1 ring-blue-500/20 aspect-[16/10] sm:aspect-[16/10] lg:aspect-auto lg:flex-1 min-h-[280px] sm:min-h-[340px]">
              {!imgError[currentSlide.id] ? (
                <img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={() =>
                    setImgError((prev) => ({ ...prev, [currentSlide.id]: true }))
                  }
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center">
                  <Wrench className="w-12 h-12 text-blue-400 mb-3" />
                  <span className="text-base font-bold text-white font-display">
                    {currentSlide.title}
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    {currentSlide.subtitle}
                  </span>
                </div>
              )}

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Informational overlay banner */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 text-white shadow-lg">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-white truncate">
                    {currentSlide.title}
                  </span>
                  <span className="text-sky-300 font-semibold whitespace-nowrap shrink-0">
                    AS build Repairing
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1 truncate">
                  {currentSlide.subtitle}
                </p>
              </div>
            </div>

            {/* Interactive Thumbnail Selector Strip for all 6 accurate appliance photos */}
            <div className="grid grid-cols-6 gap-2 pt-1" role="tablist" aria-label="Appliance service photo preview">
              {showcaseSlides.map((slide, idx) => {
                const isSelected = activeHeroSlide === idx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveHeroSlide(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] border transition-all focus:outline-hidden ${
                      isSelected
                        ? 'border-sky-400 ring-2 ring-sky-400/50 scale-103 opacity-100'
                        : 'border-slate-700/80 opacity-65 hover:opacity-100 hover:border-slate-500'
                    }`}
                    title={slide.title}
                    aria-label={`Preview ${slide.title}`}
                    aria-selected={isSelected}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Infinite Marquee Ticker */}
      <div className="mt-12 pt-6 border-t border-slate-800/80 overflow-hidden bg-slate-950/60 py-3">
        <div className="animate-marquee flex items-center gap-8 text-xs font-medium text-slate-400 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="hover:text-white transition-colors">{item}</span>
              <span aria-hidden="true" className="text-blue-500/80">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
