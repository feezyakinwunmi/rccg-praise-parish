"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  MessageCircle, 
  Briefcase, 
  Users, 
  Heart, 
  Music, 
  Camera, 
  BookOpen,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  User,
  Calendar,
  MapPin,
  DollarSign,
  Code,
  Mic,
  Palette,
  Shield,
  Truck,
  Leaf
} from "lucide-react";

// Department data
const departments = [
  { 
    id: 1, 
    name: "Choir & Music", 
    icon: Music, 
    members: 45, 
    lead: "Brother Michael", 
    phone: "+234 801 234 5678",
    description: "Lead worship through music and song",
    color: "from-pink-500 to-red-500"
  },
  { 
    id: 2, 
    name: "Technical Team", 
    icon: Camera, 
    members: 28, 
    lead: "Brother James", 
    phone: "+234 802 345 6789",
    description: "Sound, lighting, and media production",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    id: 3, 
    name: "Ushering", 
    icon: Users, 
    members: 52, 
    lead: "Deacon Peter", 
    phone: "+234 803 456 7890",
    description: "Welcome and assist members during services",
    color: "from-green-500 to-emerald-500"
  },
  { 
    id: 4, 
    name: "Children's Ministry", 
    icon: Heart, 
    members: 38, 
    lead: "Sister Grace", 
    phone: "+234 804 567 8901",
    description: "Teach and nurture the next generation",
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: 5, 
    name: "Prayer Warriors", 
    icon: Shield, 
    members: 65, 
    lead: "Pastor Mrs. Adebimpe", 
    phone: "+234 805 678 9012",
    description: "Intercede for the church and community",
    color: "from-indigo-500 to-purple-500"
  },
  { 
    id: 6, 
    name: "Evangelism", 
    icon: Users, 
    members: 42, 
    lead: "Evangelist John", 
    phone: "+234 806 789 0123",
    description: "Share the gospel and reach the lost",
    color: "from-orange-500 to-red-500"
  },
  { 
    id: 7, 
    name: "Welfare", 
    icon: Heart, 
    members: 30, 
    lead: "Deaconess Mercy", 
    phone: "+234 807 890 1234",
    description: "Care for members in need",
    color: "from-teal-500 to-green-500"
  },
  { 
    id: 8, 
    name: "Protocol", 
    icon: Shield, 
    members: 25, 
    lead: "Brother Timothy", 
    phone: "+234 808 901 2345",
    description: "Manage church events and logistics",
    color: "from-slate-500 to-gray-500"
  },
];

// Career/Educational opportunities
const careerOpportunities = [
  {
    id: 1,
    title: "Web Development & Tech",
    description: "Learn full-stack web development, UI/UX design, and modern frameworks",
    icon: Code,
    whatsappLink: "https://wa.me/2348012345678?text=I'm%20interested%20in%20Tech%20Career",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Business & Entrepreneurship",
    description: "Start and grow your business, learn marketing, sales, and leadership",
    icon: Briefcase,
    whatsappLink: "https://wa.me/2348012345678?text=I'm%20interested%20in%20Business%20Career",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Agriculture & Agribusiness",
    description: "Modern farming, poultry, fish farming, and agro-processing",
    icon: Leaf,
    whatsappLink: "https://wa.me/2348012345678?text=I'm%20interested%20in%20Agriculture",
    color: "from-lime-500 to-green-500"
  },
  {
    id: 4,
    title: "Creative Arts & Media",
    description: "Graphic design, video editing, photography, and content creation",
    icon: Palette,
    whatsappLink: "https://wa.me/2348012345678?text=I'm%20interested%20in%20Creative%20Arts",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 5,
    title: "Music & Production",
    description: "Music production, sound engineering, and instrument training",
    icon: Mic,
    whatsappLink: "https://wa.me/2348012345678?text=I'm%20interested%20in%20Music%20Career",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 6,
    title: "Logistics & Transport",
    description: "Supply chain management, delivery services, and transport business",
    icon: Truck,
    whatsappLink: "https://wa.me/2348012345678?text=I'm%20interested%20in%20Logistics",
    color: "from-amber-500 to-orange-500"
  },
];

// Sprout icon component
const Sprout = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4h4M19 3v4h-4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a5 5 0 005-5 5 5 0 00-5 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a5 5 0 00-5 5 5 5 0 005-5z" />
  </svg>
);

export default function JoinPage() {
  const [activeForm, setActiveForm] = useState<"membership" | "workers">("membership");
  
  // Form states
  const [formData, setFormData] = useState({
    // Membership form
    fullName: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    salvationExperience: "",
    // Workers form
    department: "",
    skills: "",
    availability: "",
    whyJoin: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<typeof departments[0] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate email sending - In production, use a backend API
    try {
      // For demo purposes, we'll simulate sending
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const subject = activeForm === "membership" ? "New Membership Application" : "New Worker Application";
      const body = Object.entries(formData)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
      
      // This opens default email client (you'll need a backend for actual sending)
      window.location.href = `mailto:info@rccgpraiseparish.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setSubmitStatus({ type: "success", message: "Application prepared! Your email client will open to send." });
      setFormData({
        fullName: "", email: "", phone: "", address: "", occupation: "", dob: "", gender: "", maritalStatus: "", salvationExperience: "",
        department: "", skills: "", availability: "", whyJoin: "",
      });
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDepartmentLead = (department: typeof departments[0]) => {
    window.location.href = `https://wa.me/${department.phone.replace(/\D/g, '')}?text=Hello%20${department.lead}%2C%20I'm%20interested%20in%20joining%20the%20${department.name}%20department.`;
  };

  const joinWhatsAppGroup = (link: string) => {
    window.open(link, "_blank");
  };

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
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Join Our Family</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Become a Part of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}RCCG The Praise Parish
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Join our growing family of believers. Whether you're new to the faith or looking to serve, there's a place for you.
          </p>
        </motion.div>

        {/* Join Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`bg-white rounded-2xl p-6 text-center cursor-pointer transition-all shadow-lg hover:shadow-xl ${
              activeForm === "membership" ? "ring-2 ring-blue-500 scale-105" : ""
            }`}
            onClick={() => setActiveForm("membership")}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Membership</h3>
            <p className="text-gray-600 text-sm">Become a registered member of our church family</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`bg-white rounded-2xl p-6 text-center cursor-pointer transition-all shadow-lg hover:shadow-xl ${
              activeForm === "workers" ? "ring-2 ring-purple-500 scale-105" : ""
            }`}
            onClick={() => setActiveForm("workers")}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Workers</h3>
            <p className="text-gray-600 text-sm">Volunteer and serve in various church departments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Connect</h3>
            <p className="text-gray-600 text-sm">Join our WhatsApp community for updates</p>
            <button 
              onClick={() => joinWhatsAppGroup("https://chat.whatsapp.com/your-group-link")}
              className="mt-3 bg-green-500 text-white px-4 py-1 rounded-full text-sm hover:bg-green-600 transition"
            >
              Join Group →
            </button>
          </motion.div>
        </div>

        {/* Forms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white">
              {activeForm === "membership" ? "Membership Application" : "Workers Application"}
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {activeForm === "membership" ? (
              // Membership Form
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Occupation</label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your occupation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Marital Status</label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Salvation Experience</label>
                  <textarea
                    name="salvationExperience"
                    rows={3}
                    value={formData.salvationExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your testimony..."
                  />
                </div>
              </>
            ) : (
              // Workers Form
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Department *</label>
                    <select
                      name="department"
                      required
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select department</option>
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.name}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Skills & Experience</label>
                  <textarea
                    name="skills"
                    rows={3}
                    value={formData.skills}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="List your relevant skills, experience, and qualifications..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Availability</label>
                  <input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="When are you available to serve? (e.g., Sundays, Wednesdays, Weekends)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Why do you want to serve?</label>
                  <textarea
                    name="whyJoin"
                    rows={3}
                    value={formData.whyJoin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us why you're interested in serving in this department..."
                  />
                </div>
              </>
            )}

            {submitStatus && (
              <div className={`p-3 rounded-lg flex items-center gap-2 ${
                submitStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}>
                {submitStatus.type === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span className="text-sm">{submitStatus.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Processing..." : "Submit Application"}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        {/* Departments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Join a Department</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-2" />
            <p className="text-gray-600 mt-3">Find your place to serve and connect with department leads</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">{dept.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{dept.members} members</p>
                  <p className="text-xs text-gray-600 mt-2">{dept.description}</p>
                  <button
                    onClick={() => contactDepartmentLead(dept)}
                    className="mt-3 text-sm text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Message {dept.lead} <MessageCircle className="w-3 h-3" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Career Opportunities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Career Opportunities</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-2" />
            <p className="text-gray-600 mt-3">Join our WhatsApp groups to learn more about these career paths</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerOpportunities.map((career, index) => {
              const Icon = career.icon;
              return (
                <motion.div
                  key={career.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => joinWhatsAppGroup(career.whatsappLink)}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 bg-gradient-to-r ${career.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">{career.title}</h3>
                  </div>
                  <p className="text-xs text-gray-600">{career.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      Join WhatsApp Group
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Department Modal */}
      {selectedDepartment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedDepartment(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedDepartment.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{selectedDepartment.description}</p>
            <div className="space-y-2 mb-4">
              <p className="text-sm"><strong>Team Lead:</strong> {selectedDepartment.lead}</p>
              <p className="text-sm"><strong>Members:</strong> {selectedDepartment.members}</p>
            </div>
            <button
              onClick={() => contactDepartmentLead(selectedDepartment)}
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Message {selectedDepartment.lead} on WhatsApp
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}