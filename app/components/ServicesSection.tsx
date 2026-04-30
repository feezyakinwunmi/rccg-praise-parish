"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar, Users, Heart, Music, BookOpen, ArrowRight } from "lucide-react";

const services = [
  {
    day: "Sunday School",
    time: "8:00 AM - 9:00 AM",
    icon: BookOpen,
    description: "Biblical teaching and discipleship",
    image: "/sc.jpg",
    height: "h-64 sm:h-72",
    color: "from-blue-500 to-blue-600"
  },
  {
    day: "First Service",
    time: "7:30 AM - 9:00 AM",
    icon: Clock,
    description: "Morning worship experience",
    image: "/ch3.jpg",
    height: "h-48 sm:h-56",
    color: "from-blue-600 to-purple-600"
  },
  {
    day: "Second Service",
    time: "10:00 AM - 12:00 PM",
    icon: Heart,
    description: "Main Sunday celebration",
    image: "/ch4.jpg",
    height: "h-72 sm:h-80",
    color: "from-purple-500 to-purple-600"
  },
  {
    day: "Youth Service",
    time: "2nd-4th Sunday @ 12:30 PM",
    icon: Users,
    description: "Dynamic service for the youth",
    image: "/youth.jpg",
    height: "h-56 sm:h-64",
    color: "from-pink-500 to-purple-600"
  },

];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Compelling Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-semibold">
                Worship With Us
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Experience God's Presence
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                In Every Service
              </span>
            </motion.h2>

            {/* Main Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Remember, your Sunday service isn't complete without Sunday School. 
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium italic border-l-4 border-blue-500 pl-4">
                "A Sunday service without Sunday School is like a treasure thrown into the ocean — 
                you leave with enthusiasm but miss the depth of God's Word."
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Sunday School is where foundations are built, questions are answered, and 
                faith takes root. Join us as we dive deep into God's Word together!
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-xs text-gray-600">Weekly Services</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-xs text-gray-600">Active Members</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              View Full Schedule
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Side - Masonry Style Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-min">
              {services.map((service, index) => (
                <motion.div
                  key={service.day}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + (index * 0.05), duration: 0.5 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${service.height}`}
                  style={{
                    gridRow: `span ${Math.ceil(parseInt(service.height.split('h-')[1]) / 16)}`,
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.day}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <service.icon className="w-3 h-3 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-sm sm:text-base">
                        {service.day}
                      </h3>
                    </div>
                    <p className="text-blue-200 text-xs sm:text-sm">
                      {service.time}
                    </p>
                    <p className="text-white/70 text-xs mt-1 hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-white/0 rounded-2xl group-hover:border-white/30 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}