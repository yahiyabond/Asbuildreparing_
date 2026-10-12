import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Layers, Home, PhoneCall, HeartHandshake, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/repairData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="editorial-kicker text-blue-600 mb-2">
            Why Customers Trust Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display text-balance">
            Why Choose <span className="animated-brand-text">AS build Repairing</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A customer-first approach committed to honest diagnosis, direct technician communication, and dependable doorstep service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group shimmer-card relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors">
                      {getIcon(item.iconName)}
                    </div>
                  </div>
                  <span className="text-xs font-black tracking-widest text-slate-300 group-hover:text-blue-500 transition-colors font-display tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-display mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium">AS build Repairing</span>
                <span className="font-bold text-blue-600 group-hover:translate-x-1 transition-transform">Doorstep Care</span>
              </div>
            </motion.div>
          ))}

          {/* Quick Contact CTA Card filling the 6th slot cleanly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-7 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
                Need Fast Help?
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Have An Appliance Problem?
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Connect with our service directly. We are ready to diagnose and repair your AC, fridge, washing machine, microwave, or water dispenser.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-500/60">
              <a
                href={BUSINESS_INFO.phoneUrl}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-blue-700 font-bold text-sm rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-all shadow-xs"
              >
                <span className="tabular-nums">Call {BUSINESS_INFO.phone}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
