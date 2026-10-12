import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/repairData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear information about our home appliance repair services, coverage, and how to reach us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-400 shadow-md ring-1 ring-blue-400/20'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-hidden hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-md font-mono tabular-nums ${
                        isOpen
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 font-display">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-blue-50 text-blue-600'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80 pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Helper */}
        <div className="mt-10 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-slate-900">
              Have another question about your appliance?
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              Call us directly at <span className="tabular-nums font-medium">8688446317</span> to discuss your specific appliance problem.
            </div>
          </div>
          <a
            href={BUSINESS_INFO.phoneUrl}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="tabular-nums">Call 8688446317</span>
          </a>
        </div>
      </div>
    </section>
  );
};
