import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  CheckCircle2,
  MessageSquarePlus,
  Reply,
  ThumbsUp,
  Search,
  SlidersHorizontal,
  ChevronDown,
  CornerDownRight,
  MessageCircle,
} from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/repairData';
import { ReviewItem, ReviewReply } from '../types';
import { ReviewModal } from './ReviewModal';

const STORAGE_KEY = 'asbuild_customer_reviews_v2';
const LIKED_KEY = 'asbuild_liked_reviews_v2';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Ignore localStorage read errors
    }
    return SAMPLE_REVIEWS;
  });

  const [likedIds, setLikedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(LIKED_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recent' | 'highest' | 'helpful'>('helpful');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyTarget, setReplyTarget] = useState<ReviewItem | null>(null);
  const [newlyAddedId, setNewlyAddedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch {
      // Ignore storage write errors
    }
  }, [reviews]);

  useEffect(() => {
    try {
      localStorage.setItem(LIKED_KEY, JSON.stringify(likedIds));
    } catch {
      // Ignore storage write errors
    }
  }, [likedIds]);

  const filterCategories = [
    { label: 'All Reviews', value: 'all', count: reviews.length },
    {
      label: 'AC Repair',
      value: 'AC',
      count: reviews.filter((r) => r.appliance.toLowerCase().includes('ac')).length,
    },
    {
      label: 'Refrigerator',
      value: 'Refrigerator',
      count: reviews.filter(
        (r) =>
          r.appliance.toLowerCase().includes('refrigerator') ||
          r.appliance.toLowerCase().includes('fridge')
      ).length,
    },
    {
      label: 'Washing Machine',
      value: 'Washing Machine',
      count: reviews.filter((r) => r.appliance.toLowerCase().includes('washing'))
        .length,
    },
    {
      label: 'Microwave',
      value: 'Microwave',
      count: reviews.filter((r) => r.appliance.toLowerCase().includes('microwave'))
        .length,
    },
    {
      label: 'Water Dispenser',
      value: 'Water Dispenser',
      count: reviews.filter((r) => r.appliance.toLowerCase().includes('dispenser'))
        .length,
    },
  ];

  const processedReviews = useMemo(() => {
    return reviews
      .filter((r) => {
        const matchCategory =
          selectedFilter === 'all' ||
          r.appliance.toLowerCase().includes(selectedFilter.toLowerCase()) ||
          (selectedFilter === 'Refrigerator' &&
            r.appliance.toLowerCase().includes('fridge'));

        const q = searchQuery.toLowerCase().trim();
        const matchSearch =
          !q ||
          r.author.toLowerCase().includes(q) ||
          r.comment.toLowerCase().includes(q) ||
          r.appliance.toLowerCase().includes(q);

        return matchCategory && matchSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'helpful') {
          return (b.helpfulCount || 0) - (a.helpfulCount || 0);
        }
        if (sortBy === 'highest') {
          return b.rating - a.rating;
        }
        return 0;
      });
  }, [reviews, selectedFilter, searchQuery, sortBy]);

  const displayedReviews = processedReviews.slice(0, visibleCount);
  const hasMore = processedReviews.length > visibleCount;

  const handleOpenAddReview = () => {
    setReplyTarget(null);
    setIsModalOpen(true);
  };

  const handleOpenReply = (review: ReviewItem) => {
    setReplyTarget(review);
    setIsModalOpen(true);
  };

  const handleToggleHelpful = (reviewId: string) => {
    const isLiked = likedIds.includes(reviewId);
    if (isLiked) {
      setLikedIds(likedIds.filter((id) => id !== reviewId));
      setReviews((prev) =>
        prev.map((r) =>
          r.id === reviewId
            ? { ...r, helpfulCount: Math.max(0, (r.helpfulCount || 1) - 1) }
            : r
        )
      );
    } else {
      setLikedIds([...likedIds, reviewId]);
      setReviews((prev) =>
        prev.map((r) =>
          r.id === reviewId ? { ...r, helpfulCount: (r.helpfulCount || 0) + 1 } : r
        )
      );
    }
  };

  const handleAddReview = (newReviewData: {
    author: string;
    appliance: string;
    comment: string;
    rating: number;
  }) => {
    const newId = `user-rev-${Date.now()}`;
    const newReviewItem: ReviewItem = {
      id: newId,
      author: newReviewData.author,
      appliance: newReviewData.appliance,
      comment: newReviewData.comment,
      rating: newReviewData.rating,
      date: 'Just now',
      helpfulCount: 1,
      replies: [],
    };
    setReviews([newReviewItem, ...reviews]);
    setNewlyAddedId(newId);
  };

  const handleAddReply = (
    reviewId: string,
    replyData: { author: string; comment: string }
  ) => {
    const newReply: ReviewReply = {
      id: `rep-${Date.now()}`,
      author: replyData.author,
      comment: replyData.comment,
      date: 'Just now',
    };
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id === reviewId) {
          return {
            ...r,
            replies: [...(r.replies || []), newReply],
          };
        }
        return r;
      })
    );
  };

  const averageRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  return (
    <section
      id="reviews"
      className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
            Sample Customer Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
            <span>Customer</span>{' '}
            <span className="animated-brand-text">Reviews</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Below are representative sample feedbacks illustrating customer experiences with our appliance repair services.
          </p>
          <p className="mt-1 text-xs text-slate-400 italic">
            Note: These are illustrative sample customer reviews provided for demonstration of service feedback.
          </p>

          {/* Trust stats & Main CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={handleOpenAddReview}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0"
            >
              <MessageSquarePlus className="w-4 h-4 fill-white" />
              <span>Give Your Review</span>
            </button>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-medium text-slate-700">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-extrabold text-slate-900 ml-1 text-sm tabular-nums">
                  {averageRating} / 5.0
                </span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700 font-semibold tabular-nums">
                {reviews.length} Total Reviews
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700 font-medium">Doorstep Care</span>
            </div>
          </div>
        </div>

        {/* Search, Filter, and Sort Controls Bar */}
        <div className="bg-slate-50/80 p-3 sm:p-4 rounded-2xl border border-slate-200/80 mb-6 sm:mb-8 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reviews by issue, name, or appliance..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'recent' | 'highest' | 'helpful')
              }
              className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl px-3 py-2 focus:outline-hidden focus:border-blue-500"
            >
              <option value="helpful">Most Helpful</option>
              <option value="highest">Highest Rating</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
        </div>

        {/* Responsive Horizontal Category Filter Tabs */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => {
                    setSelectedFilter(cat.value);
                    setVisibleCount(8);
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs font-bold'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="tabular-nums opacity-80">({cat.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count indicator */}
        <div className="mb-4 flex items-center justify-between text-xs text-slate-500 px-1">
          <span className="tabular-nums">
            Showing <strong className="text-slate-800">{displayedReviews.length}</strong> of{' '}
            <strong className="text-slate-800">{processedReviews.length}</strong> reviews
          </span>
          {searchQuery && (
            <span>
              Matches for "<strong>{searchQuery}</strong>"
            </span>
          )}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {displayedReviews.length === 0 ? (
              <div className="col-span-full py-16 text-center text-slate-500 text-sm bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-2">
                <p className="font-semibold text-slate-700">
                  No matching customer reviews found.
                </p>
                <p className="text-xs text-slate-500">
                  Try clearing your search query or selecting "All Reviews" to view feedbacks.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFilter('all');
                    setSearchQuery('');
                  }}
                  className="mt-2 text-xs font-bold text-blue-600 hover:underline inline-block"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              displayedReviews.map((review, index) => {
                const isNewlyAdded = review.id === newlyAddedId;
                const isLiked = likedIds.includes(review.id);
                const helpfulCount = review.helpfulCount || 0;
                const hasReplies = review.replies && review.replies.length > 0;

                return (
                  <motion.div
                    key={review.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between group shimmer-card ${
                      isNewlyAdded
                        ? 'bg-blue-50/70 border-blue-400 shadow-md ring-2 ring-blue-400/20'
                        : 'bg-slate-50 hover:bg-white border-slate-200/90 hover:border-amber-300 shadow-2xs hover:shadow-lg'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div
                          className="flex items-center gap-0.5 sm:gap-1 text-amber-500 shrink-0"
                          aria-label={`${review.rating} out of 5 stars`}
                        >
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleOpenReply(review)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors shrink-0"
                          title="Reply to this review"
                        >
                          <Reply className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Reply</span>
                        </button>
                      </div>

                      <blockquote className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed italic mb-3">
                        "{review.comment}"
                      </blockquote>

                      {hasReplies && (
                        <div className="mt-2 mb-3 pt-2.5 border-t border-slate-200/60 space-y-2">
                          {review.replies!.map((rep) => (
                            <div
                              key={rep.id}
                              className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100/90 text-xs text-slate-700"
                            >
                              <div className="flex items-center justify-between font-bold text-blue-900 mb-0.5">
                                <span className="flex items-center gap-1">
                                  <CornerDownRight className="w-3 h-3 text-blue-600" />
                                  <span>{rep.author}</span>
                                </span>
                                <span className="text-[10px] text-slate-400 font-normal">
                                  {rep.date}
                                </span>
                              </div>
                              <p className="text-slate-600 pl-4">{rep.comment}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="pt-2 mb-3 flex items-center justify-between text-xs text-slate-500">
                        <button
                          type="button"
                          onClick={() => handleToggleHelpful(review.id)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all text-xs font-semibold ${
                            isLiked
                              ? 'bg-blue-100 text-blue-700 font-bold'
                              : 'bg-white hover:bg-slate-200/60 text-slate-600 border border-slate-200/80'
                          }`}
                          title="Mark review as helpful"
                        >
                          <ThumbsUp
                            className={`w-3 h-3 ${
                              isLiked ? 'fill-blue-600 text-blue-600' : ''
                            }`}
                          />
                          <span className="tabular-nums">Helpful ({helpfulCount})</span>
                        </button>
                        {hasReplies && (
                          <span className="flex items-center gap-1 text-[11px] text-blue-600 font-medium tabular-nums">
                            <MessageCircle className="w-3 h-3" />
                            <span>
                              {review.replies!.length}{' '}
                              {review.replies!.length === 1 ? 'reply' : 'replies'}
                            </span>
                          </span>
                        )}
                      </div>

                      <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                            {review.author.charAt(0)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1 truncate">
                              <span className="truncate">{review.author}</span>
                              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 shrink-0" />
                            </div>
                            <div className="text-[11px] text-slate-500 truncate">
                              {review.appliance}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 shrink-0">
                          {review.date || 'Sample'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span className="tabular-nums">
                Load More Reviews ({processedReviews.length - visibleCount} more)
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        replyToReview={replyTarget}
        onSubmitReview={handleAddReview}
        onSubmitReply={handleAddReply}
      />
    </section>
  );
};
