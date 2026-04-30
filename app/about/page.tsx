"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Church, 
  Users, 
  UserRound, 
  Calendar, 
  Target, 
  Eye, 
  Heart,
  BookOpen,
  Globe,
  ChevronRight,
  X,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

// Tab configuration
const tabs = [
  { id: "rccg", label: "RCCG History", icon: Church },
  { id: "parish", label: "Praise Parish", icon: Users },
  { id: "ministers", label: "The Ministers", icon: UserRound },
];

// Ministers data - Add your church ministers here
const ministers = [
  {
    id: 1,
    name: "Pastor Shina Alabi",
    role: "Senior Pastor",
    image: "/ps.jpg",
    bio: "Pastor Shina Alabi, affectionately known as P.S, is the Senior Pastor of RCCG The Praise Parish. He is a dynamic teacher of God's Word with over 15 years of ministry experience.",
    email: "pastor.shina@rccgpraiseparish.org",
    phone: "+234 123 456 7890",
    joined: "2010",
    education: "B.A. Theology, University of Lagos",
    quote: "Leading with love, serving with grace",
  },
  {
    id: 2,
    name: "Pastor Mrs. Peace Alabi",
    role: "Associate Pastor",
    image: "/mp1.jpg",
    bio: "Pastor Mrs. Peace Alabi is a passionate minister and counselor. She oversees the Women's Ministry and provides spiritual guidance to the congregation.",
    email: "pastor.peace@rccgpraiseparish.org",
    phone: "+234 123 456 7891",
    joined: "2012",
    education: "M.A. Christian Counseling",
    quote: "Empowering women through God's love",
  },
  {
    id: 3,
    name: "Pastor Dobrah ",
    role: "Youth Pastor",
    image: "/pp.jpg",
    bio: "Pastor Michael leads the Youth Ministry with energy and creativity. He is dedicated to raising a generation of young people who love God and serve their community.",
    email: "pastor.michael@rccgpraiseparish.org",
    phone: "+234 123 456 7892",
    joined: "2015",
    education: "B.Sc. Youth Development",
    quote: "Raising a generation for Christ",
  },
  {
    id: 4,
    name: "Deacon James Okonkwo",
    role: "Head of Ushering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Deacon James oversees the ushering department, ensuring every worshipper feels welcome and comfortable during services.",
    email: "deacon.james@rccgpraiseparish.org",
    phone: "+234 123 456 7893",
    joined: "2008",
    education: "B.Sc. Business Administration",
    quote: "Serving God by serving His people",
  },
  {
    id: 5,
    name: "Sister Grace Eze",
    role: "Choir Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Sister Grace leads the choir ministry with excellence. She has a passion for worship and has been training choir members for over a decade.",
    email: "sister.grace@rccgpraiseparish.org",
    phone: "+234 123 456 7894",
    joined: "2005",
    education: "B.A. Music",
    quote: "Let everything that has breath praise the Lord",
  },
];

// RCCG History Data (cleaned - no citations)
const rccgData = {
  founder: {
    name: "Rev. Josiah Olufemi Akindayomi",
    born: "1909 - 1980",
    image: "/pja.jpg",
    description: "Born into a family that followed traditional beliefs, Rev. Akindayomi later joined the Anglican Church where he was baptized in 1927. His spiritual journey led him to start a prayer group called 'Egbe Ogo Oluwa' (The Glory of God Fellowship) in 1947. This group eventually became the Redeemed Christian Church of God in 1952.",
    funFact: "He was originally trained to be a herbalist before his conversion to Christianity!",
  },
  currentLeader: {
    name: "Pastor Enoch Adejare Adeboye",
    title: "General Overseer",
    born: "Born March 2, 1942",
    image: "/pea.jpg",
    description: "Dr. Adeboye joined RCCG in 1973 and initially served as a translator for the founder. He was ordained as a pastor in 1975 and became General Overseer in 1981. Under his leadership, RCCG has grown from about 40 parishes in Nigeria to over 51,000 parishes in 198 countries worldwide. He holds a Ph.D. in Applied Mathematics from the University of Lagos and was a mathematics lecturer before becoming a full-time minister.",
  },
  vision: {
    title: "The RCCG Vision",
    points: [
      "To make heaven",
      "To take as many people as possible with us to heaven",
      "To have a member of RCCG in every family of all nations",
      "To accomplish the above, holiness will be our lifestyle",
      "To plant churches within five minutes walking distance in every city of developing countries and five minutes driving distance in developed countries",
    ],
  },
  mission: {
    title: "Core Values",
    points: [
      "P - Perfection in all we do",
      "R - Reliability in service",
      "A - Attractiveness in our worship",
      "I - Integrity in our character",
      "S - Service-Oriented ministry",
      "E - Excellence in everything",
    ],
  },
  growth: {
    parishes: "51,580+",
    countries: "198",
    members: "9.9 Million+",
  },
};

// Parish specific data
const parishData = {
  name: "RCCG The Praise Parish",
  established: "June 1999",
  location: "Ora Estate, Epe, Lagos State, Nigeria",
  description: "The Praise Parish was established as a beacon of hope and a center for spiritual transformation in the Epe community. What began as a small fellowship has grown into a vibrant congregation passionate about worship, discipleship, and community impact.",
  image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&h=500&fit=crop",
  vision: "To be a hub of spiritual growth, community transformation, and global impact, raising disciples who will take the Gospel to every corner of Epe and beyond.",
  values: [
    "Biblical Teaching & Discipleship",
    "Passionate Worship & Prayer",
    "Community Service & Outreach",
    "Family & Youth Empowerment",
    "Excellence in Ministry",
  ],
  stats: {
    weeklyAttendance: "500+",
    ministries: "12+",
    outreaches: "5+ Yearly",
  },
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("rccg");
  const [selectedMinister, setSelectedMinister] = useState<typeof ministers[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openMinisterModal = (minister: typeof ministers[0]) => {
    setSelectedMinister(minister);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMinisterModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
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
              <Church className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Our Story</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}RCCG The Praise Parish
              </span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
            <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Discover our rich heritage, our vision for the future, and the dedicated ministers serving our community
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300
                    ${isActive 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105" 
                      : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                    }
                  `}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {/* Tab 1: RCCG History */}
              {activeTab === "rccg" && (
                <motion.div
                  key="rccg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8 sm:space-y-12"
                >
                  {/* Growth Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      { value: rccgData.growth.parishes, label: "Parishes Worldwide", icon: Church },
                      { value: rccgData.growth.countries, label: "Countries", icon: Globe },
                      { value: rccgData.growth.members, label: "Members", icon: Users },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 text-center"
                      >
                        <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Founder Section */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="relative h-80 md:h-full">
                        <img
                          src={rccgData.founder.image}
                          alt={rccgData.founder.name}
                          className="w-full lg:w-[50%] h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-black/50 md:to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm">{rccgData.founder.born}</p>
                          <p className="text-xs opacity-80">Founder</p>
                        </div>
                      </div>
                      <div className="p-6 sm:p-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full mb-4">
                          <Heart className="w-3 h-3 text-blue-600" />
                          <span className="text-xs font-semibold text-blue-600">The Beginning</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {rccgData.founder.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                          {rccgData.founder.description}
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded">
                          <p className="text-amber-800 text-xs sm:text-sm italic">
                            💡 Did you know? {rccgData.founder.funFact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current Leader Section */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="order-2 md:order-1 p-6 sm:p-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full mb-4">
                          <UserRound className="w-3 h-3 text-purple-600" />
                          <span className="text-xs font-semibold text-purple-600">Current Leadership</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                          {rccgData.currentLeader.name}
                        </h2>
                        <p className="text-blue-600 font-semibold mb-2">{rccgData.currentLeader.title}</p>
                        <p className="text-gray-500 text-sm mb-4">{rccgData.currentLeader.born}</p>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {rccgData.currentLeader.description}
                        </p>
                      </div>
                      <div className="relative h-80 md:h-full order-1 md:order-2">
                        <img
                          src={rccgData.currentLeader.image}
                          alt={rccgData.currentLeader.name}
                          className="w-full lg:w-[50%] h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Vision & Mission */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white">
                      <Eye className="w-8 h-8 mb-4" />
                      <h3 className="text-xl sm:text-2xl font-bold mb-4">{rccgData.vision.title}</h3>
                      <ul className="space-y-3">
                        {rccgData.vision.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm sm:text-base">
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-white">
                      <Target className="w-8 h-8 mb-4" />
                      <h3 className="text-xl sm:text-2xl font-bold mb-4">{rccgData.mission.title}</h3>
                      <ul className="space-y-3">
                        {rccgData.mission.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm sm:text-base">
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Praise Parish */}
              {activeTab === "parish" && (
                <motion.div
                  key="parish"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Hero Image */}
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={parishData.image}
                      alt={parishData.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{parishData.name}</h2>
                      <p className="text-blue-200 text-sm sm:text-base mt-1">Est. {parishData.established}</p>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-md">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">{parishData.stats.weeklyAttendance}</div>
                      <div className="text-xs text-gray-500">Weekly Attendance</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-md">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">{parishData.stats.ministries}</div>
                      <div className="text-xs text-gray-500">Active Ministries</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-md">
                      <div className="text-xl sm:text-2xl font-bold text-pink-600">{parishData.stats.outreaches}</div>
                      <div className="text-xs text-gray-500">Yearly Outreaches</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                      <Church className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Our Story</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {parishData.description}
                    </p>
                  </div>

                  {/* Vision & Values */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                      <Eye className="w-6 h-6 text-blue-600 mb-3" />
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Our Vision</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{parishData.vision}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                      <Heart className="w-6 h-6 text-purple-600 mb-3" />
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Our Values</h3>
                      <ul className="space-y-2">
                        {parishData.values.map((value, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                            <ChevronRight className="w-3 h-3 text-purple-600" />
                            {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <h3 className="text-xl font-bold text-gray-900">Find Us</h3>
                    </div>
                    <p className="text-gray-600">{parishData.location}</p>
                    <a 
                      href="https://maps.google.com/?q=Ora+Estate+Epe+Lagos+Nigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      Get Directions <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Ministers */}
              {activeTab === "ministers" && (
                <motion.div
                  key="ministers"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {ministers.map((minister, index) => (
                      <motion.div
                        key={minister.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => openMinisterModal(minister)}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={minister.image}
                            alt={minister.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-lg font-bold">{minister.name}</h3>
                            <p className="text-sm text-blue-200">{minister.role}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {minister.bio}
                          </p>
                          <button className="mt-3 text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Profile <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Minister Detail Modal */}
      {isModalOpen && selectedMinister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={closeMinisterModal}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64">
              <img
                src={selectedMinister.image}
                alt={selectedMinister.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={closeMinisterModal}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold">{selectedMinister.name}</h2>
                <p className="text-blue-200">{selectedMinister.role}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Biography</h3>
                <p className="text-gray-600 leading-relaxed">{selectedMinister.bio}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{selectedMinister.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">{selectedMinister.phone}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Joined Church</p>
                    <p className="font-semibold text-gray-900">{selectedMinister.joined}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Education</p>
                    <p className="font-semibold text-gray-900 text-sm">{selectedMinister.education}</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="text-gray-700 italic">"{selectedMinister.quote}"</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}