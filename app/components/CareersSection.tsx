"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, TrendingUp, Sprout, Stethoscope, ArrowRight, GraduationCap, Code, LineChart, Briefcase } from "lucide-react";

const careerGroups = [
  {
    title: "Technology & Innovation",
    description: "Learn coding, web development, AI, and digital skills for the future",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    icon: Code,
    opportunities: "8+ courses"
  },
  {
    title: "Business & Entrepreneurship",
    description: "Master business management, marketing, finance, and leadership skills",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=600&h=400&fit=crop",
    icon: TrendingUp,
    opportunities: "6+ courses"
  },
  {
    title: "Agriculture & Agribusiness",
    description: "Modern farming techniques, agribusiness, and food security training",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
    icon: Sprout,
    opportunities: "5+ programs"
  },
  {
    title: "Healthcare & Wellness",
    description: "Medical training, healthcare management, and wellness programs",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=400&fit=crop",
    icon: Stethoscope,
    opportunities: "4+ certifications"
  },
  {
    title: "Digital Marketing",
    description: "Social media management, SEO, content creation, and digital strategy",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    icon: LineChart,
    opportunities: "7+ modules"
  },
  {
    title: "Creative Arts & Design",
    description: "Graphic design, video editing, photography, and creative expression",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
    icon: Laptop,
    opportunities: "6+ specializations"
  },
];

export default function CareersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const openJoinPage = () => {
    window.open("/join", "_blank");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-blue-50" id="careers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Career Development</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Build Your Future With Us
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Gain valuable skills and knowledge in high-demand fields. Start your journey to a brighter future today.
          </p>
        </motion.div>

        {/* Career Cards Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 sm:mb-12">
          {careerGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <group.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 line-clamp-1">
                  {group.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mb-2 line-clamp-2">
                  {group.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-blue-300 bg-white/10 px-2 py-1 rounded-full">
                    {group.opportunities}
                  </span>
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all"
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={openJoinPage}
            className="group bg-blue-600 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <span>View More Programs</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-gray-500 text-xs sm:text-sm mt-4">
            Join our community of learners. All programs are designed to help you succeed.
          </p>
        </motion.div>

      </div>
    </section>
  );
}