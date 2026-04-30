"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function PastorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image Section with enhanced animation */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0 group">
              <motion.img
                src="/ps.jpg"
                alt="Pastor Shina Alabi"
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1"
              >
                <span className="text-white text-xs font-semibold">Senior Pastor</span>
              </motion.div>
            </div>
            
            {/* Decorative blur circles */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Text Section with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left"
          >
            {/* Title with fade-up animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Meet Our Pastor
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto lg:mx-0 mt-4" />
            </motion.div>

            {/* Name with scale animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Pastor Shina Alabi
                </span>
              </h3>
              <p className="text-blue-600 font-semibold text-lg mt-1">Popularly Called <span className="text-purple-600">P.S</span></p>
            </motion.div>

            {/* Bio text with staggered animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Pastor Shina Alabi, affectionately known as <span className="font-semibold text-blue-600">P.S</span>, is a dynamic man of God with a heart for the lost and a passion for seeing lives transformed by the power of God's Word. With over 15 years of ministry experience, he has been instrumental in building a thriving community of believers at RCCG The Praise Parish.
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-600 leading-relaxed text-sm sm:text-base"
              >
                His dynamic teaching style and genuine love for people have made him a beloved figure in the community. Under his leadership, the church has seen remarkable growth and impact in the surrounding neighborhoods. His powerful sermons and fatherly guidance continue to inspire many.
              </motion.p>
            </motion.div>

            {/* Button with pulse animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base relative overflow-hidden group"
              >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base relative overflow-hidden group">
                <span className="relative z-10">Read About →</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              </Link>
            </motion.div>

            {/* Social/Quote badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4"
            >
              <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" />
                </svg>
                <span className="text-xs text-gray-600">"Leading with love, serving with grace"</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}