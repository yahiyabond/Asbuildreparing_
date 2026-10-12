import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, X, Check, MessageSquare, Send, CornerDownRight } from 'lucide-react';
import { ReviewItem } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  replyToReview?: ReviewItem | null;
  onSubmitReview: (review: {
    author: string;
    appliance: string;
    comment: string;
    rating: number;
  }) => void;
  onSubmitReply?: (
    reviewId: string,
    reply: {
      author: string;
      comment: string;
    }
  ) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  replyToReview,
  onSubmitReview,
  onSubmitReply,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [author, setAuthor] = useState('');
  const [appliance, setAppliance] = useState('AC Repair & Service');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (replyToReview) {
      setAppliance(replyToReview.appliance);
    } else {
      setAppliance('AC Repair & Service');
    }
  }, [replyToReview]);

  if (!isOpen) return null;

  const isReplying = Boolean(replyToReview);

  const applianceOptions = [
    'AC Repair & Service',
    'Refrigerator / Fridge Repair',
    'Washing Machine Repair',
    'Microwave Oven Repair',
    'Water Dispenser Repair',
  ];

  const ratingDescriptions = [
    '',
    'Needs Improvement',
    'Fair Experience',
    'Good Experience',
    'Very Good Service',
    'Excellent Service!',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    if (isReplying && replyToReview && onSubmitReply) {
      onSubmitReply(replyToReview.id, {
        author: author.trim(),
        comment: comment.trim(),
      });
    } else {
      onSubmitReview({
        author: author.trim(),
        appliance,
        comment: comment.trim(),
        rating,
      });
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setAuthor('');
      setComment('');
      setRating(5);
    }, 1800);
  };

  const whatsappShareUrl = `https://wa.me/918688446317?text=${encodeURIComponent(
    `*Customer Feedback for AS build Repairing*\n\n` +
      `*Name:* ${author.trim() || 'Customer'}\n` +
      `*Service:* ${appliance}\n` +
      `*Rating:* ${rating}/5\n` +
      `*Review:* ${comment.trim() || 'Great service experience'}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative my-auto"
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/90 backdrop-blur-md shrink-0">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-blue-600 tracking-wider uppercase block">
              {isReplying ? 'Post a Reply' : 'Customer Review'}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-0.5 truncate max-w-[240px] sm:max-w-xs">
              {isReplying ? `Replying to ${replyToReview?.author}` : 'Share Your Review'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-hidden"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 sm:py-10 text-center space-y-3"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                {isReplying ? 'Reply Added Successfully!' : 'Thank You for Your Review!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {isReplying
                  ? 'Your reply has been posted directly to this review thread.'
                  : 'Your review has been published. We appreciate your valuable feedback on AS build Repairing!'}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {isReplying && replyToReview && (
                <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-slate-700">
                  <div className="flex items-center gap-1.5 font-bold text-blue-700 mb-1">
                    <CornerDownRight className="w-3.5 h-3.5" />
                    <span>
                      In reply to {replyToReview.author} ({replyToReview.appliance}):
                    </span>
                  </div>
                  <p className="italic text-slate-600 pl-5 line-clamp-2">
                    "{replyToReview.comment}"
                  </p>
                </div>
              )}

              {/* Star Rating Selector - only for new reviews */}
              {!isReplying && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Overall Rating
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex items-center gap-1 sm:gap-1.5 bg-slate-50 p-2 rounded-xl border border-slate-200 w-fit">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled =
                          (hoverRating !== null ? hoverRating : rating) >= star;
                        return (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(null)}
                            className="p-1 sm:p-1.5 rounded-lg text-amber-400 hover:scale-115 transition-transform duration-150 focus:outline-hidden touch-manipulation"
                            aria-label={`${star} star rating`}
                          >
                            <Star
                              className={`w-6 h-6 sm:w-7 sm:h-7 ${
                                isFilled
                                  ? 'fill-amber-400 text-amber-400 drop-shadow-xs'
                                  : 'text-slate-300'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-amber-600 sm:pl-1">
                      {ratingDescriptions[hoverRating !== null ? hoverRating : rating]}
                    </span>
                  </div>
                </div>
              )}

              {/* Appliance Selection - only for new reviews */}
              {!isReplying && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Appliance Serviced
                  </label>
                  <select
                    value={appliance}
                    onChange={(e) => setAppliance(e.target.value)}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  >
                    {applianceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Your Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul M."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              {/* Review / Reply Text */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isReplying ? 'Your Reply' : 'Your Review / Feedback'}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={
                    isReplying
                      ? 'Write your response or shared experience regarding this service...'
                      : 'Share details of your experience with the technician or repair quality...'
                  }
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3.5 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{isReplying ? 'Post Reply' : 'Submit Review'}</span>
                </button>
                {!isReplying && (
                  <a
                    href={whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all"
                    title="Send directly to technician on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Send on WhatsApp</span>
                  </a>
                )}
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
