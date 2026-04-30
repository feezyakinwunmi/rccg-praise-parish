"use client";

const SocialIcon = ({ children, href, label, bgColor }: { children: React.ReactNode; href: string; label: string; bgColor?: string }) => (
  <a 
    href={href} 
    className={`p-2 rounded-full transition transform hover:scale-110 inline-flex items-center justify-center w-10 h-10 group ${
      bgColor || 'bg-white/10 hover:bg-white/20'
    }`}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

// SVG Icons Components
const HomeIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const AboutIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ServicesIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const CareersIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const TimeIcon = () => (
  <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const NewsletterIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-4H7v4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const PhantomireIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          
          {/* Logo Section */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-base sm:text-xl">
                    <img src="/tpplogo.jpg" alt="RCCG Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg">RCCG</h3>
                <p className="text-xs text-blue-200">The Praise Parish</p>
              </div>
            </div>
            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
              A place where everyone is welcome to experience God's love and grow in faith.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm sm:text-base">
              <li><a href="/" className="hover:text-white transition inline-flex items-center"><HomeIcon /> Home</a></li>
              <li><a href="/about" className="hover:text-white transition inline-flex items-center"><AboutIcon /> About Us</a></li>
              <li><a href="/services" className="hover:text-white transition inline-flex items-center"><ServicesIcon /> Services</a></li>
              <li><a href="/careers" className="hover:text-white transition inline-flex items-center"><CareersIcon /> Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition inline-flex items-center"><ContactIcon /> Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-3 text-blue-200 text-sm sm:text-base">
              <li className="flex items-center justify-center sm:justify-start">
                <LocationIcon />
                <span>Ora Estate, Epe, Lagos State, Nigeria.</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <PhoneIcon />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <EmailIcon />
                <span>info@rccgpraiseparish.org</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <TimeIcon />
                <span>Mon-Fri: 9am - 5pm</span>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Connect With Us</h4>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-6">
              {/* Facebook - Blue */}
              <SocialIcon href="#" label="Facebook" bgColor="bg-[#1877f2] hover:bg-[#1877f2]/80">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </SocialIcon>
              
            
              
              {/* Instagram - Purple/Pink Gradient */}
              <SocialIcon href="#" label="Instagram" bgColor="bg-gradient-to-tr from-[#feda77] via-[#dd2a7b] to-[#8134af] hover:opacity-90">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </SocialIcon>
              
              {/* YouTube - Red */}
              <SocialIcon href="#" label="YouTube" bgColor="bg-[#ff0000] hover:bg-[#ff0000]/80">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </SocialIcon>
              
              {/* TikTok - Black with pink/cyan accent */}
              <SocialIcon href="#" label="TikTok" bgColor="bg-[#000000] hover:bg-[#000000]/80 relative">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V9.47a8.13 8.13 0 004.85 1.56c.53 0 1.05-.05 1.56-.14v-3.4c-.48.08-.98.12-1.49.12a4.86 4.86 0 01-2.7-.82z"/>
                </svg>
              </SocialIcon>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-2 flex items-center justify-center sm:justify-start">
                <NewsletterIcon />
                Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-3 py-2 rounded-full text-gray-900 text-sm w-full sm:w-auto bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-blue-300 mt-2">Get updates and news</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Phantomire Technologies */}
        <div className="border-t border-blue-800 pt-6 sm:pt-8 text-center text-blue-300 text-xs sm:text-sm">
          <p>&copy; {currentYear} RCCG The Praise Parish. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center space-x-1">
            <span>Developed by</span>
            <PhantomireIcon />
            <span className="font-semibold text-white">Phantomire Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}