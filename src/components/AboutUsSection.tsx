import { FC } from 'react';
import Image from 'next/image';

/**
 * AboutUsSection Component
 * 
 * A responsive RTL about section for 'מכון כושר גמא' that highlights their expertise
 * in the fitness technology industry using glassmorphism design style.
 */
const AboutUsSection: FC = () => {
  return (
    <section 
      className="relative overflow-hidden py-16 px-4 md:py-24 bg-gradient-to-br from-[#588C7E]/20 to-[#D4A5A5]/20" 
      dir="rtl"
      aria-labelledby="about-us-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#588C7E]/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#D4A5A5]/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="backdrop-blur-md bg-white/20 p-8 md:p-10 rounded-2xl border border-white/30 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#588C7E]/10 to-[#D4A5A5]/10 pointer-events-none"></div>
              
              <h2 
                id="about-us-heading" 
                className="text-3xl md:text-4xl font-bold mb-6 text-[#2A3B37] relative"
              >
                אודות מכון כושר גמא
              </h2>
              
              <p className="text-lg mb-6 leading-relaxed text-[#2A3B37]/90 relative">
                אנחנו מכון כושר מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              
              <div className="space-y-4 relative">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#588C7E]/30 backdrop-blur-sm border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#588C7E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="mr-4">
                    <h3 className="font-semibold text-[#2A3B37]">טכנולוגיה מתקדמת</h3>
                    <p className="text-[#2A3B37]/80">ציוד חדשני ומערכות מתקדמות לאימון אופטימלי</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D4A5A5]/30 backdrop-blur-sm border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D4A5A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="mr-4">
                    <h3 className="font-semibold text-[#2A3B37]">צוות מקצועי</h3>
                    <p className="text-[#2A3B37]/80">מאמנים מוסמכים עם ניסיון רב בתחום הכושר</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#588C7E]/30 backdrop-blur-sm border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#588C7E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="mr-4">
                    <h3 className="font-semibold text-[#2A3B37]">תוכניות אישיות</h3>
                    <p className="text-[#2A3B37]/80">תוכניות אימון מותאמות אישית לכל מתאמן</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="mt-8 px-8 py-3 bg-gradient-to-r from-[#588C7E] to-[#588C7E]/80 text-white rounded-full hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-white/10 relative overflow-hidden group"
                aria-label="צור קשר לפרטים נוספים"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D4A5A5] to-[#D4A5A5]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">צור קשר</span>
              </button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] backdrop-blur-md bg-white/10 rounded-2xl border border-white/30 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-[#588C7E]/10 to-[#D4A5A5]/10 pointer-events-none z-10"></div>
              
              {/* Main image */}
              <div className="relative h-full">
                <Image
                  src="/gym-tech.jpg" 
                  alt="מכון כושר גמא - טכנולוגיה מתקדמת לאימון"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-lg bg-white/20 p-4 rounded-xl border border-white/30 shadow-lg z-20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-[#588C7E]">15+</p>
                    <p className="text-sm text-[#2A3B37]/80">שנות ניסיון</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#588C7E]">1000+</p>
                    <p className="text-sm text-[#2A3B37]/80">מתאמנים</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#588C7E]">20+</p>
                    <p className="text-sm text-[#2A3B37]/80">מאמנים</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;