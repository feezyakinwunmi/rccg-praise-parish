"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Welcome to RCCG The Praise Parish",
    subtitle: "The Favoured Family Where You Belong",
    description: "Join us as we worship God in spirit and truth, experiencing His presence and love every Sunday.",
    buttonText: "Join Us Today",
    image: "/pra.jpg",
  },
  {
    title: "Empowering Lives Through Faith",
    subtitle: "Building a Community of Believers",
    description: "Discover your purpose and grow spiritually through our various ministries and programs.",
    buttonText: "Learn More",
    image: "/epe5.jpg",
  },
  {
    title: "Making Disciples of All Nations",
    subtitle: "Spreading the Gospel of Jesus Christ",
    description: "Join our mission to impact our community and beyond with the love of Christ.",
    buttonText: "Get Involved",
    image: "/tppc.jpg",
  },
  {
    title: "Powerful Worship Experience",
    subtitle: "Lift Your Voice in Praise",
    description: "Experience the presence of God through powerful worship and heartfelt praise.",
    buttonText: "Join Worship",
    image: "/ccq.jpg",
  },
  {
    title: "Community Outreach",
    subtitle: "Making a Difference Together",
    description: "Join us as we reach out to our community with love and compassion.",
    buttonText: "Get Involved",
    image: "/epe4.jpg",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Generate particles with better visibility
  useEffect(() => {
    const particleArray = [];
    const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"];
    for (let i = 0; i < 60; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 15 + 8,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(particleArray);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + slides.length) % slides.length;
    const position = diff - Math.floor(slides.length / 2);
    
    const translateX = position * 70;
    const scale = 1 - Math.abs(position) * 0.15;
    const opacity = 1 - Math.abs(position) * 0.3;
    const zIndex = slides.length - Math.abs(position);
    const blur = Math.abs(position) > 1 ? 2 : 0;
    
    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      filter: `blur(${blur}px)`,
      transition: "all 0.5s ease-out",
    };
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-100 to-purple-100 pt-16 sm:pt-20">
      
      {/* Floating Visible Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full shadow-lg"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: 1,
            }}
            animate={{
              y: [0, -50, 0, 50, 0],
              x: [0, 30, 0, -30, 0],
  opacity: [0.2, 0.5, 0.2], 
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Larger Visible Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-500 pointer-events-none" />

      {/* Floating Crosses/Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/30 text-sm sm:text-base"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Floating Small Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border border-blue-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-120px)]">
          
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {slides[currentIndex].title}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 mb-3 sm:mb-4">
                  {slides[currentIndex].subtitle}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                  {slides[currentIndex].description}
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  {slides[currentIndex].buttonText}
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center lg:justify-start space-x-2 pt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === index ? "w-8 bg-blue-600" : "w-2 bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-center lg:justify-start gap-3">
              <button onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)} className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)} className="p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side - Curved Carousel */}
          <div className="flex-1 order-1 lg:order-2 h-[400px] sm:h-[500px] flex items-center justify-center">
            <div className="relative flex items-center justify-center w-full">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="absolute w-[220px] h-[280px] sm:w-[280px] sm:h-[350px] cursor-pointer"
                  style={getCardStyle(index)}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/20">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${
                      index === currentIndex ? "opacity-30" : "opacity-60"
                    }`} />
                    
                    {/* Glass effect */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/30 to-transparent" />
                    
                   
                    
                    {index === currentIndex && (
                      <>
                        <div className="absolute inset-0 border-2 border-blue-400/60 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      </>
                    )}
                    
                    {/* Floating particles around active card */}
                    {index === currentIndex && (
                      <>
                        <motion.div
                          animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-400/40 blur-md"
                        />
                        <motion.div
                          animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 2.5 }}
                          className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-purple-400/40 blur-md"
                        />
                        <motion.div
                          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="absolute top-1/2 -right-6 w-5 h-5 rounded-full bg-pink-400/30 blur-sm"
                        />
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </div>
  );
}