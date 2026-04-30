"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Clock, 
  Users, 
  Heart, 
  Music, 
  BookOpen,
  Cross,
  Coffee,
  ChevronRight,
  MapPin,
  Bell,
  Sun,
  Moon,
  Zap
} from "lucide-react";

// All services data - Updated Schedule
const services = [
  {
    id: 1,
    day: "Sunday",
    title: "Early Risers Service",
    time: "7:30 AM - 9:00 AM",
    icon: Sun,
    color: "from-amber-500 to-orange-500",
    description: "An early morning worship experience to start your Sunday with God's presence and fresh anointing.",
    location: "Main Sanctuary",
    type: "weekly",
  },
  {
    id: 2,
    day: "Sunday",
    title: "Sunday School",
    time: "8:00 AM - 9:00 AM",
    icon: BookOpen,
    color: "from-blue-400 to-blue-500",
    description: "In-depth Bible study and discipleship for all ages. Grow in the knowledge of God's Word.",
    location: "Sunday School Hall",
    type: "weekly",
    note: "Runs concurrently with Early Risers Service",
  },
  {
    id: 3,
    day: "Sunday",
    title: "Second Service",
    time: "9:00 AM - 11:00 AM",
    icon: Heart,
    color: "from-purple-500 to-purple-600",
    description: "Our main Sunday celebration with powerful worship, prayer, and life-changing messages.",
    location: "Main Sanctuary",
    type: "weekly",
  },
  {
    id: 4,
    day: "Sunday",
    title: "Baptismal & Believers Class",
    time: "Immediately after Second Service",
    icon: Cross,
    color: "from-blue-600 to-purple-600",
    description: "New converts class and baptismal preparation for those ready to take a step of faith.",
    location: "Fellowship Hall",
    type: "weekly",
    note: "For new believers and those ready for baptism",
  },
  {
    id: 5,
    day: "Sunday",
    title: "Youth Service",
    time: "12:30 PM - 2:30 PM",
    icon: Users,
    color: "from-pink-500 to-red-500",
    description: "Dynamic youth-focused service with contemporary worship and relevant teachings.",
    location: "Youth Center",
    type: "special",
    schedule: "2nd, 3rd & 4th Sundays only",
  },
  {
    id: 6,
    day: "Tuesday",
    title: "Digging Deep Service",
    time: "5:00 PM - 6:00 PM",
    icon: BookOpen,
    color: "from-teal-500 to-green-500",
    description: "Intensive Bible study and teaching service for spiritual growth and depth.",
    location: "Main Sanctuary",
    type: "weekly",
  },
  {
    id: 7,
    day: "Wednesday",
    title: "Divine Mercy Hour",
    time: "8:30 AM - 10:30 AM",
    icon: Cross,
    color: "from-red-500 to-pink-500",
    description: "A special mid-week service focused on experiencing God's mercy, healing, and breakthrough prayers.",
    location: "Main Sanctuary",
    type: "weekly",
    highlight: true,
  },
  {
    id: 8,
    day: "Thursday",
    title: "Moving Mountains",
    time: "5:00 PM - 6:00 PM",
    icon: Zap,
    color: "from-indigo-500 to-purple-500",
    description: "Power-packed prayer and fasting service for mountain-moving breakthroughs.",
    location: "Prayer Sanctuary",
    type: "weekly",
  },
 
 
];

// Days of week for filtering
const days = ["All", "Sunday", "Tuesday", "Wednesday", "Thursday", ];

export default function ServicesPage() {
  const [selectedDay, setSelectedDay] = useState("All");
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    if (selectedDay === "All") {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.day === selectedDay));
    }
  }, [selectedDay]);

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
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Worship With Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Services
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Join us for worship, prayer, and fellowship throughout the week. There's a place for everyone at RCCG The Praise Parish.
          </p>
        </motion.div>

        {/* Weekly Schedule Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-6 mb-8 text-white overflow-x-auto"
        >
          <div className="min-w-[600px]">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-6 h-6 animate-pulse" />
              <h3 className="font-bold text-lg">Weekly Schedule at a Glance</h3>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs">
              <div className="font-bold">Tuesday</div>
              <div className="font-bold">Wednesday</div>
              <div className="font-bold">Thursday</div>
              
              <div className="font-bold">Sunday</div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-xs mt-2">
                  <div className="text-blue-200">5pm Digging Deep</div>
              <div className="text-yellow-200 font-semibold">8:30am Divine Mercy</div>
              <div className="text-blue-200">5pm Moving Mountains</div>
             
              <div className="text-blue-200">7:30am, 9am, 12:30pm</div>
            </div>
          </div>
        </motion.div>

        {/* Day Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                selectedDay === day
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const isHighlighted = service.highlight;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  isHighlighted ? "ring-2 ring-red-400" : ""
                }`}
              >
                {isHighlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg z-10">
                    🔥 Mercy Hour
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-500">{service.day}s</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>{service.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{service.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {service.note && (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-2 rounded text-xs text-amber-700">
                      📌 {service.note}
                    </div>
                  )}
                  
                  {service.schedule && (
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-2 rounded text-xs text-purple-700">
                      📅 {service.schedule}
                    </div>
                  )}
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      service.type === "weekly" ? "bg-green-100 text-green-600" : 
                      service.type === "special" ? "bg-orange-100 text-orange-600" :
                      "bg-purple-100 text-purple-600"
                    }`}>
                      {service.type === "weekly" ? "Weekly" : service.type === "special" ? "Special" : "Monthly"}
                    </span>
                    <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Join Us <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sunday Schedule Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sun className="w-5 h-5" />
              Sunday Service Schedule
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Sun className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Early Risers Service</p>
                    <p className="text-sm text-gray-500">First service of the day</p>
                  </div>
                </div>
                <p className="text-blue-600 font-semibold">7:30 AM - 9:00 AM</p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sunday School</p>
                    <p className="text-sm text-gray-500">Bible study for all ages</p>
                  </div>
                </div>
                <p className="text-blue-600 font-semibold">8:00 AM - 9:00 AM</p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Second Service</p>
                    <p className="text-sm text-gray-500">Main Sunday celebration</p>
                  </div>
                </div>
                <p className="text-blue-600 font-semibold">9:00 AM - 11:00 AM</p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between border-b pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Cross className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Baptismal & Believers Class</p>
                    <p className="text-sm text-gray-500">For new converts</p>
                  </div>
                </div>
                <p className="text-blue-600 font-semibold">After Second Service</p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Youth Service</p>
                    <p className="text-sm text-gray-500">2nd, 3rd & 4th Sundays only</p>
                  </div>
                </div>
                <p className="text-blue-600 font-semibold">12:30 PM - 2:30 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">Need More Information?</h3>
          <p className="text-gray-600 mb-4">Have questions about our services or ministries?</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
            Contact Us
          </button>
        </motion.div>
      </div>
    </main>
  );
}