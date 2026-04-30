"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Music, Mic, Crown, ChevronRight, Filter, X } from "lucide-react";

// All events data
interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  type: "upcoming" | "past";
  icon: React.ElementType;
  location: string;
  time: string;
  detailedInfo?: string;
}

const allEvents: Event[] = [
  {
    id: "1",
    title: "Lagos Province 132 Women of Grace Conference",
    date: "Saturday, May 16, 2026",
    description: "A powerful women's conference tagged 'SOARING HIGHER IN CHRIST'. Join us for a day of worship, empowerment, and divine encounters.",
    detailedInfo: "Come and experience a transformative day as we gather to worship, learn, and grow together. Speakers include ministers from across Lagos Province. Special music ministration, breakout sessions, and prayer time. Registration is free but required for planning.",
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
    detailedInfo: "Join us as we celebrate our beloved Pastor Shina Alabi (P.S). There will be special presentations, testimonies, musical tributes, and a grand reception in his honor. Come show your love and appreciation for our shepherd.",
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
    detailedInfo: "What a night it was! Thousands gathered to worship with Pastor Nathaniel Bassey. The presence of God was tangible, and lives were transformed through praise.",
    image: "/epe1.jpg",
    type: "past",
    icon: Music,
    location: "Epe, Lagos",
    time: "4:00 PM - 9:00 PM",
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = allEvents.filter(event => {
    if (filter === "all") return true;
    return event.type === filter;
  });

  const upcomingEvents = allEvents.filter(e => e.type === "upcoming");
  const pastEvents = allEvents.filter(e => e.type === "past");

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Church Events</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Events
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Stay updated with all our upcoming and past events at RCCG The Praise Parish
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white text-center">
            <div className="text-2xl font-bold">{allEvents.length}</div>
            <div className="text-sm opacity-90">Total Events</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white text-center">
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <div className="text-sm opacity-90">Upcoming</div>
          </div>
          <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl p-4 text-white text-center">
            <div className="text-2xl font-bold">{pastEvents.length}</div>
            <div className="text-sm opacity-90">Past Events</div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-8"
        >
          {["all", "upcoming", "past"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                filter === f
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              {f === "all" ? "All Events" : f === "upcoming" ? "Upcoming" : "Past Events"}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedEvent(event)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === "upcoming" ? "bg-green-500" : "bg-gray-500"
                  } text-white`}>
                    {event.type === "upcoming" ? "Upcoming" : "Past"}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Events Found</h3>
            <p className="text-gray-500">Check back later for upcoming events</p>
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                <div className="flex flex-wrap gap-3 mt-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Event</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {selectedEvent.detailedInfo || selectedEvent.description}
              </p>
              
              <div className={`rounded-xl p-4 ${
                selectedEvent.type === "upcoming" ? "bg-green-50 border border-green-200" : "bg-gray-50 border border-gray-200"
              }`}>
                <p className={`text-sm font-semibold ${
                  selectedEvent.type === "upcoming" ? "text-green-700" : "text-gray-700"
                }`}>
                  {selectedEvent.type === "upcoming" 
                    ? "🎉 Don't miss this event! Mark your calendar and invite others." 
                    : "📸 This event has passed. Check out our gallery for photos and highlights."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}