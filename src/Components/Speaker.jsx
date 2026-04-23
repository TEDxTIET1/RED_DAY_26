import React from "react";

const Speaker = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#fedad7] min-h-screen flex flex-col font-sans">
      <style>{`
        .bg-texture-dark {
            background-color: #0A0A0A;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start py-16 px-6 md:px-12 bg-texture-dark">
        <div className="max-w-7xl w-full flex flex-col gap-16">
          {/* Section Header */}
          <div className="w-full relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#eb0028] opacity-20 transform -skew-x-12"></div>
            <p className="text-[#eb0028] font-bold tracking-[0.25em] text-sm uppercase mb-3">TEDxTIET presents</p>
            <h1 className="text-5xl md:text-[80px] font-black leading-none tracking-tight text-white uppercase relative z-10">
              OUR SPEAKERS
            </h1>
            <div className="w-32 h-1 bg-[#eb0028] mt-4"></div>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Shriya Lohia */}
            <div className="group relative bg-black shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border-t border-[#eb0028] transition-transform duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10 text-[200px] leading-none text-white font-black overflow-hidden flex items-end justify-end pointer-events-none select-none">SL</div>
              <div className="relative h-[520px] w-full overflow-hidden bg-[#3a2423]">
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img
                  alt="Shriya Lohia"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
                  src="/Speakers/shriya.jpg"
                />
                <div className="absolute top-4 right-4 z-20 text-4xl md:text-[48px] font-extrabold leading-tight text-white opacity-30">01</div>
              </div>
              <div className="p-8 relative z-20 flex-grow flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-[#eb0028] text-white px-3 py-1 mb-4 text-sm font-bold tracking-widest uppercase">
                    RACING DRIVER
                  </div>
                  <h2 className="text-2xl md:text-[32px] font-bold leading-snug text-white mb-2 uppercase">Shriya Lohia</h2>
                  <p className="text-base text-zinc-400">Racing since the age of 9, she has risen through the ranks with over 30 podium finishes, carving her space in a male-dominated sport. Focused, fearless, and driven—her journey is just getting started.</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Nikhil Paul George */}
            <div className="group relative bg-black shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border-t border-[#eb0028] transition-transform duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10 text-[200px] leading-none text-white font-black overflow-hidden flex items-end justify-end pointer-events-none select-none">NG</div>
              <div className="relative h-[520px] w-full overflow-hidden bg-[#3a2423]">
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img
                  alt="Nikhil Paul George"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
                  src="/Speakers/nikhil.jpg"
                />
                <div className="absolute top-4 right-4 z-20 text-4xl md:text-[48px] font-extrabold leading-tight text-white opacity-30">02</div>
              </div>
              <div className="p-8 relative z-20 flex-grow flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-[#eb0028] text-white px-3 py-1 mb-4 text-sm font-bold tracking-widest uppercase">
                    SINGER-SONGWRITER
                  </div>
                  <h2 className="text-2xl md:text-[32px] font-bold leading-snug text-white mb-2 uppercase">Nikhil Paul George</h2>
                  <p className="text-base text-zinc-400">The voice behind soulful tracks like Aashiyan and Main Kya Karoon, blending emotion with global sound. A creator whose music connects hearts across borders.</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Shreh Madan */}
            <div className="group relative bg-black shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border-t border-[#eb0028] transition-transform duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10 text-[200px] leading-none text-white font-black overflow-hidden flex items-end justify-end pointer-events-none select-none">SM</div>
              <div className="relative h-[520px] w-full overflow-hidden bg-[#3a2423]">
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img
                  alt="Shreh Madan"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
                  src="/Speakers/Shreh.jpg"
                />
                <div className="absolute top-4 right-4 z-20 text-4xl md:text-[48px] font-extrabold leading-tight text-white opacity-30">03</div>
              </div>
              <div className="p-8 relative z-20 flex-grow flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-[#eb0028] text-white px-3 py-1 mb-4 text-sm font-bold tracking-widest uppercase">
                    CO-FOUNDER &amp; CMO, BURGRILL
                  </div>
                  <h2 className="text-2xl md:text-[32px] font-bold leading-snug text-white mb-2 uppercase">Shreh Madan</h2>
                  <p className="text-base text-zinc-400">Co-founder & CMO of Burgrill, one of India's fastest-growing QSR brands, known for redefining the burger experience. From building food ventures to scaling a national brand, his journey is driven by vision, creativity, and bold execution.</p>
                </div>
              </div>
            </div>

            {/* Card 4 - Pawan Solanki */}
            <div className="group relative bg-black shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border-t border-[#eb0028] transition-transform duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10 text-[200px] leading-none text-white font-black overflow-hidden flex items-end justify-end pointer-events-none select-none">PS</div>
              <div className="relative h-[520px] w-full overflow-hidden bg-[#3a2423]">
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img
                  alt="Pawan Solanki"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
                  src="/Speakers/Pawan.jpg"
                />
                <div className="absolute top-4 right-4 z-20 text-4xl md:text-[48px] font-extrabold leading-tight text-white opacity-30">04</div>
              </div>
              <div className="p-8 relative z-20 flex-grow flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-[#eb0028] text-white px-3 py-1 mb-4 text-sm font-bold tracking-widest uppercase">
                    EDUCATION LEADER &amp; CAREER COUNSELLOR
                  </div>
                  <h2 className="text-2xl md:text-[32px] font-bold leading-snug text-white mb-2 uppercase">Pawan Solanki</h2>
                  <p className="text-base text-zinc-400">An award-winning education leader, CEO of AusMUN India, and a career counsellor with 20+ years of experience. Having guided 18,000+ students and explored 36+ countries, his journey reflects impact, vision, and global perspective.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Speaker;
