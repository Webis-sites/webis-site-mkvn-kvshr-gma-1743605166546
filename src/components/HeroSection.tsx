'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  // State to track if the component has mounted (for animations)
  const [isMounted, setIsMounted] = useState(false);
  
  // Effect to trigger animations after component mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className={`relative min-h-[90vh] w-full overflow-hidden ${className}`}
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#588C7E]/30 to-[#D4A5A5]/30 z-0"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gym-tech-background.jpg" // Replace with your actual image path
          alt="מכון כושר מודרני עם אלמנטים טכנולוגיים"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center">
        <div 
          className={`
            max-w-2xl p-8 md:p-10 
            bg-white/10 backdrop-blur-md
            border border-white/20
            rounded-2xl shadow-lg
            transition-all duration-1000 ease-out
            ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#588C7E]/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4A5A5]/20 rounded-full blur-2xl"></div>
          
          {/* Main content */}
          <div className="relative">
            <h1 
              id="hero-heading"
              className={`
                text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4
                transition-all duration-700 delay-300 ease-out
                ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
              `}
            >
              מכון כושר מוביל בישראל
            </h1>
            
            <h2 
              className={`
                text-xl md:text-2xl text-white/90 mb-8
                transition-all duration-700 delay-500 ease-out
                ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
              `}
            >
              חווית לקוח מושלמת בכל ביקור
            </h2>
            
            <p 
              className={`
                text-white/80 mb-10 max-w-lg
                transition-all duration-700 delay-700 ease-out
                ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
              `}
            >
              אנחנו מכון כושר מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <button 
              className={`
                px-8 py-4 bg-[#588C7E] hover:bg-[#588C7E]/90
                text-white font-bold rounded-full
                shadow-lg hover:shadow-xl
                transition-all duration-300
                border border-white/10
                flex items-center gap-2
                group
                ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              aria-label="קבע תור עכשיו למכון הכושר"
            >
              <span>קבע תור עכשיו</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform rotate-180 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={`
        absolute top-1/4 left-10 w-32 h-32 
        bg-[#D4A5A5]/30 rounded-full 
        backdrop-blur-md
        border border-white/10
        transition-all duration-1000 delay-500
        ${isMounted ? 'opacity-60 scale-100' : 'opacity-0 scale-50'}
      `}></div>
      
      <div className={`
        absolute bottom-1/4 right-10 w-24 h-24 
        bg-[#588C7E]/30 rounded-full 
        backdrop-blur-md
        border border-white/10
        transition-all duration-1000 delay-700
        ${isMounted ? 'opacity-60 scale-100' : 'opacity-0 scale-50'}
      `}></div>
      
      {/* Logo or brand name */}
      <div className={`
        absolute top-6 right-6 md:top-10 md:right-10
        transition-all duration-700 ease-out
        ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}>
        <div className="text-white text-2xl font-bold bg-[#588C7E]/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
          מכון כושר גמא
        </div>
      </div>
    </section>
  );
};

export default HeroSection;