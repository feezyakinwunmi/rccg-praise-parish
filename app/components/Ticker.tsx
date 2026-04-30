"use client";

import { useEffect, useRef } from "react";

const announcements = [
  "Join us for our Sunday Services!",
  "Divine Mercy Hour Wednesday at 7am",
  "Bible Study every Thursday at 6pm",
  "Youth Service every 2nd-4th Sunday at 4pm",

];

// SVG Icon Components
const ChurchIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MusicIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

const BibleIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const PrayerIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.636 6.364a9 9 0 0112.728 0M12 8v4m0 4h.01M5.636 18.364a9 9 0 0112.728 0M12 22h.01" />
  </svg>
);

const YouthIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const WeddingIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const NewMemberIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);

const iconMap: { [key: string]: React.ReactNode } = {
  "Join us for our Sunday Services!": <ChurchIcon />,
  "Divine Mercy Hour Wednesday at 7am": <PrayerIcon />,
  "Bible Study every Thursday at 6pm": <BibleIcon />,
  "Youth Service every 2nd-4th Sunday at 4pm": <YouthIcon />,

};

export default function Ticker() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 1; // Pixels per frame

    const animate = () => {
      if (!scrollContainer) return;
      
      scrollPosition += speed;
      
      // Reset when we've scrolled through one full set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden py-2 sm:py-3">
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="whitespace-nowrap flex will-change-transform"
          style={{ width: "fit-content" }}
        >
          {/* Double the announcements for seamless looping */}
          {[...announcements, ...announcements].map((announcement, index) => (
            <div
              key={index}
              className="inline-flex items-center text-white font-medium text-xs sm:text-sm px-4 sm:px-6"
            >
              {iconMap[announcement] || <ChurchIcon />}
              <span>{announcement}</span>
              <span className="ml-4 sm:ml-6 text-white/50">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}