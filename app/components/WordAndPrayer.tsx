"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Book, Heart, Cross } from "lucide-react";
import { monthlyWord, weeklyPrayers } from "../data/contents";

export default function WordAndPrayer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentPrayerIndex, setCurrentPrayerIndex] = useState(0);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);
  const [selectedPrayer, setSelectedPrayer] = useState(weeklyPrayers[0]);

  const nextPrayer = () => {
    setCurrentPrayerIndex((prev) => (prev + 1) % weeklyPrayers.length);
  };

  const prevPrayer = () => {
    setCurrentPrayerIndex((prev) => (prev - 1 + weeklyPrayers.length) % weeklyPrayers.length);
  };

  const openPrayerModal = (prayer: any) => {
    setSelectedPrayer(prayer);
    setIsPrayerModalOpen(true);
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50" id="word-and-prayer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <Book className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Spiritual Nourishment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Word for the Month & 
              <span className="text-transparent bg-clip-text bg-blue-600"> Prayer Focus</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Side - Word for the Month */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={monthlyWord.image}
                  alt={monthlyWord.title}
                  className="w-full h-[400px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-full mb-4">
                    <Cross className="w-3 h-3 text-white" />
                    <span className="text-white text-xs font-semibold">Word for {monthlyWord.date}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {monthlyWord.title}
                  </h3>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 border-l-4 border-blue-500">
                    <p className="text-blue-200 text-sm italic">"{monthlyWord.verse}"</p>
                  </div>
                  
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                    {monthlyWord.message}
                  </p>
                  
                  <button className="mt-6 inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors">
                    <span>Declare this word</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Prayer for the Week */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-blue-600 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Heart className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-2xl font-bold text-white">Prayer for the Week</h3>
                    <p className="text-blue-100 text-sm mt-1">Join us in prayer</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 rounded-lg px-3 py-1">
                      <span className="text-white text-sm">{weeklyPrayers.length} Prayers</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prayer List - Scrollable */}
              <div className="max-h-[400px] overflow-y-auto">
                {weeklyPrayers.map((prayer, index) => (
                  <motion.div
                    key={prayer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + (index * 0.03) }}
                    onClick={() => openPrayerModal(prayer)}
                    className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all cursor-pointer group"
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                              {index + 1}
                            </span>
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {prayer.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {prayer.prayer}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            {prayer.date}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Hints */}
              <div className="bg-gray-50 p-4 text-center border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Click on any prayer to read and meditate
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prayer Modal */}
      {isPrayerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setIsPrayerModalOpen(false)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-blue-600 p-6 sticky top-0">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">{selectedPrayer.title}</h3>
                <button
                  onClick={() => setIsPrayerModalOpen(false)}
                  className="text-white hover:text-gray-200 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-blue-800 italic">"{selectedPrayer.verse}"</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Prayer Point:</h4>
                <p className="text-gray-700 leading-relaxed">{selectedPrayer.prayer}</p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-4">
                <h4 className="font-semibold text-purple-900 mb-2">💭 Reflect & Apply:</h4>
                <p className="text-purple-800 text-sm">
                  Take 5 minutes to pray this prayer. Trust God to answer according to His will.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}