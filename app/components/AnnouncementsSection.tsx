"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, Music, Mic, Crown } from "lucide-react";

// Event data structure
interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  type: "upcoming" | "past";
  icon: React.ElementType;
  location?: string;
  time?: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Lagos Province 132 Women of Grace Conference",
    date: "Saturday, May 16, 2026",
    description: "A powerful women's conference tagged 'SOARING HIGHER IN CHRIST'. Join us for a day of worship, empowerment, and divine encounters.",
    image: "/mp1.jpg",
    type: "upcoming",
    icon: Users,
    location: "RCCG The Praise Parish, Ora Estate, Epe",
    time: "8:00 AM - 4:00 PM",
  },
  {
    id: "2",
    title: "Pastor's Appreciation Sunday",
    date: "Saturday, May 31, 2026",
    description: "A special day to honor and celebrate our beloved Pastor Shina Alabi (P.S) for his dedication and service to God's kingdom.",
    image: "/ppp.jpg",
    type: "upcoming",
    icon: Crown,
    location: "RCCG The Praise Parish, Ora Estate, Epe",
    time: "9:00 AM - 1:00 PM",
  },
  {
    id: "3",
    title: "The EPE PRAISE EXPERIENCE",
    date: "December 15, 2024",
    description: "A night of praise and worship with Pastor Nathaniel Bassey. An unforgettable experience of God's presence through music and worship.",
    image: "/epe1.jpg",
    type: "past",
    icon: Music,
    location: "Epe, Lagos",
    time: "4:00 PM - 9:00 PM",
  },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const upcomingEvents = events.filter(event => event.type === "upcoming");
  const pastEvents = events.filter(event => event.type === "past");
  
  const displayedEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + slidesToShow >= displayedEvents.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, displayedEvents.length - slidesToShow) : prev - 1
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const openEventsPage = () => {
    window.open("/events", "_blank");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Church Events</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Events & Programs</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Join us for life-changing events and powerful worship experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 sm:px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "upcoming"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Upcoming Events ({upcomingEvents.length})
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 sm:px-8 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "past"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Past Events ({pastEvents.length})
          </button>
        </motion.div>

        <div ref={ref}>
          {displayedEvents.length > 0 ? (
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  animate={{ x: `-${currentIndex * (100 / slidesToShow)}%` }}
                  transition={{ duration: 0.5 }}
                  className="flex"
                  style={{ width: `${(displayedEvents.length * 100) / slidesToShow}%` }}
                >
                  {displayedEvents.map((event, index) => (
                    <div key={event.id} className="px-3 sm:px-4" style={{ width: `${100 / displayedEvents.length}%` }}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105 h-full group"
                      >
                        <div className="relative h-48 sm:h-56 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          
                          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                            event.type === "upcoming" 
                              ? "bg-green-500 text-white" 
                              : "bg-gray-500 text-white"
                          }`}>
                            {event.type === "upcoming" ? "Upcoming" : "Past Event"}
                          </div>
                          
                          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                            <div className="flex items-center gap-2 text-white text-xs">
                              <Calendar className="w-3 h-3" />
                              <span>{event.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-5 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                            {event.description}
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            {event.location && (
                              <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <MapPin className="w-3 h-3" />
                                <span>{event.location}</span>
                              </div>
                            )}
                            {event.time && (
                              <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <Clock className="w-3 h-3" />
                                <span>{event.time}</span>
                              </div>
                            )}
                          </div>
                          
                          <button
                            onClick={openEventsPage}
                            className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-sm flex items-center justify-center gap-2"
                          >
                            <span>View Full Details</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {slidesToShow < displayedEvents.length && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition -ml-2 sm:-ml-4 z-10"
                  >
                    <ChevronLeft size={20} className="sm:w-5 sm:h-5 text-blue-600" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition -mr-2 sm:-mr-4 z-10"
                  >
                    <ChevronRight size={20} className="sm:w-5 sm:h-5 text-blue-600" />
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No {activeTab} Events</h3>
              <p className="text-gray-500">Check back soon for upcoming events!</p>
            </div>
          )}
        </div>

        {displayedEvents.length > 0 && (
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {Array.from({ length: Math.ceil(displayedEvents.length / slidesToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * slidesToShow)}
                className={`h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / slidesToShow) === index ? "w-6 sm:w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <button
            onClick={openEventsPage}
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all transform hover:scale-105 border border-gray-200"
          >
            <Calendar className="w-4 h-4" />
            <span>View All Events</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}