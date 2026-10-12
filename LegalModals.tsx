import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/repairData';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-blue-600" />
            ) : (
              <FileText className="w-5 h-5 text-blue-600" />
            )}
            <h3 className="text-lg font-bold text-slate-900 font-display">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Last Updated: October 2026</strong>
              </p>
              <p>
                At <strong>{BUSINESS_INFO.name}</strong>, we respect your privacy. This policy outlines how we handle information when you contact us for home appliance repair services.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Information We Collect</h4>
              <p>
                When you call, message on WhatsApp, or email us, we only receive contact details you voluntarily share (such as your phone number, name, residential address for doorstep inspection, and appliance details).
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Use of Information</h4>
              <p>
                We use this information exclusively to communicate regarding your service request, schedule an inspection, and complete the repair work requested. We do not sell, rent, or trade your contact details with external third-party advertisers.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Direct Contact</h4>
              <p>
                For any privacy questions or requests to update your contact record, reach us at{' '}
                <a href={BUSINESS_INFO.emailUrl} className="text-blue-600 underline">
                  {BUSINESS_INFO.email}
                </a>{' '}
                or call{' '}
                <a href={BUSINESS_INFO.phoneUrl} className="text-blue-600 underline tabular-nums">
                  {BUSINESS_INFO.phone}
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated: October 2026</strong>
              </p>
              <p>
                Welcome to <strong>{BUSINESS_INFO.name}</strong>. By accessing our website and requesting our home appliance repair services, you acknowledge the following terms:
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Service Scope</h4>
              <p>
                {BUSINESS_INFO.name} provides on-site diagnostic and repair services for air conditioners, refrigerators, washing machines, microwave ovens, and water dispensers. Service availability depends on technician scheduling and location.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Inspection & Estimates</h4>
              <p>
                Appliance faults are inspected on-site. The technician explains the observed defect and required parts or servicing before proceeding with repairs.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Accuracy of Information</h4>
              <p>
                Customers are requested to provide accurate descriptions of appliance issues and safe working access for the technician during visits.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Contact Details</h4>
              <p>
                For questions regarding terms or service inquiries, contact us at{' '}
                <span className="tabular-nums">{BUSINESS_INFO.phone}</span> or{' '}
                {BUSINESS_INFO.email}.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
