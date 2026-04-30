"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
 
  MessageCircle,
  Navigation,
  Church,
  Users,
  Calendar
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const subject = `Contact Form: ${formData.subject}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
      `;
      
      window.location.href = `mailto:info@rccgpraiseparish.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setSubmitStatus({ type: "success", message: "Thank you! Your email client will open to send your message." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["RCCG The Praise Parish", "Ora Estate, Epe", "Lagos State, Nigeria"],
      color: "from-red-500 to-pink-500",
      action: "https://maps.google.com/?q=Ora+Estate+Epe+Lagos+Nigeria",
      actionText: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 801 234 5678", "+234 802 345 6789", "+234 803 456 7890"],
      color: "from-green-500 to-emerald-500",
      action: "tel:+2348012345678",
      actionText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@rccgpraiseparish.org", "prayer@rccgpraiseparish.org", "giving@rccgpraiseparish.org"],
      color: "from-blue-500 to-cyan-500",
      action: "mailto:info@rccgpraiseparish.org",
      actionText: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: 8:00 AM - 1:00 PM"],
      color: "from-purple-500 to-indigo-500",
      action: "#",
      actionText: "View Services"
    },
  ];

  const socialLinks = [
 { icon: MessageCircle, name: "WhatsApp", link: "https://wa.me/2348012345678", color: "bg-[#25D366]" },
  ];

  const quickLinks = [
    { icon: Church, name: "Sunday Services", link: "/services", description: "Join us for worship" },
    { icon: Users, name: "Become a Member", link: "/join", description: "Join our family" },
    { icon: Calendar, name: "Upcoming Events", link: "/events", description: "Stay connected" },
  ];

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
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Us
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <a 
                  href={info.action}
                  target={info.title === "Visit Us" ? "_blank" : undefined}
                  rel={info.title === "Visit Us" ? "noopener noreferrer" : undefined}
                  className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  {info.actionText} <ChevronRight className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white" />
                <h2 className="text-xl font-bold text-white">Find Us Here</h2>
              </div>
            </div>
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123456789012!2d3.983333!3d6.583333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMDAuMCJOIDTCsDU5JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location"
              />
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <a 
                href="https://maps.google.com/?q=Ora+Estate+Epe+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form & Quick Links */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Send Us a Message</h2>
                <p className="text-blue-100 text-sm">We'll get back to you as soon as possible</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="Membership">Membership</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Donation/Giving">Donation/Giving</option>
                      <option value="Testimony">Testimony</option>
                      <option value="Complaint/Suggestion">Complaint/Suggestion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Write your message here..."
                  />
                </div>

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
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Quick Links & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.link}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{link.name}</p>
                        <p className="text-xs text-gray-500">{link.description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white rounded-xl p-3 flex items-center gap-2 hover:opacity-90 transition transform hover:scale-105`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Prayer Request Button */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center text-white">
              <h3 className="text-lg font-bold mb-2">Need Prayer?</h3>
              <p className="text-sm text-blue-100 mb-4">Our prayer team is ready to stand with you</p>
              <button className="bg-white text-purple-600 px-5 py-2 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
                Submit Prayer Request
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// Add missing ChevronRight component
const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);