import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 relative overflow-hidden ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      {/* Animated Light Shine Sweep across the header bar */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="w-48 sm:w-80 h-full bg-gradient-to-r from-transparent via-sky-400/25 sm:via-blue-400/30 to-transparent animate-light-sweep blur-xs" />
      </div>

      {/* Animated Glowing Light Beam on the bottom border of the header */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none z-20">
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 via-blue-500 to-transparent animate-beam-line shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-slate-900 focus:outline-hidden whitespace-nowrap shrink-0"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transform duration-200 overflow-hidden ring-1 ring-blue-400/40">
              <Wrench className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300 relative z-10 drop-shadow-xs" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-display group-hover:text-blue-600 transition-colors whitespace-nowrap shrink-0">
              AS build Repairing
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-all relative py-1 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-blue-600 font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Direct Phone Call Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="btn-excited-call inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all shadow-md hover:scale-105 active:scale-95 transform ring-1 ring-blue-400/40 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 fill-white animate-phone-ring" />
              <span className="tabular-nums">Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="btn-excited-call p-2.5 text-white bg-blue-600 rounded-xl shadow-md"
              aria-label="Call AS build Repairing"
            >
              <Phone className="w-4 h-4 fill-white animate-phone-ring" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 relative z-30">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href={BUSINESS_INFO.phoneUrl}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 rounded-xl"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span className="tabular-nums">Call {BUSINESS_INFO.phone}</span>
            </a>
            <p className="text-center text-[11px] text-slate-500">
              Direct Service Hotline · Doorstep Support
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
