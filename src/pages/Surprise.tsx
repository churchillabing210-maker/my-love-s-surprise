import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import CSSFlowers from "@/components/CSSFlowers";
import MusicPlayer from "@/components/MusicPlayer";
import cia1 from "@/assets/cia-1.jpeg";
import cia2 from "@/assets/cia-2.jpeg";
import cia3 from "@/assets/cia-3.jpeg";
import cia4 from "@/assets/cia-4.jpeg";
import cia5 from "@/assets/cia-5.jpeg";
import cia6 from "@/assets/cia-6.png";

const photos = [cia1, cia2, cia3, cia4, cia5, cia6];

const Surprise = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden" style={{ background: "#000" }}>
      {/* Night sky background */}
      <div
        className="fixed inset-0"
        style={{
          filter: "blur(0.2vmin)",
          backgroundImage: `
            radial-gradient(ellipse at top, transparent 0%, #000),
            radial-gradient(ellipse at bottom, #000, rgba(145, 233, 255, 0.2)),
            repeating-linear-gradient(220deg, rgb(0,0,0) 0px, rgb(0,0,0) 19px, transparent 19px, transparent 22px),
            repeating-linear-gradient(189deg, rgb(0,0,0) 0px, rgb(0,0,0) 19px, transparent 19px, transparent 22px),
            repeating-linear-gradient(148deg, rgb(0,0,0) 0px, rgb(0,0,0) 19px, transparent 19px, transparent 22px),
            linear-gradient(90deg, rgb(195, 0, 255), rgb(240, 240, 240))
          `,
        }}
      />

      {/* Flowers at the bottom */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center" style={{ perspective: "1000px" }}>
        <CSSFlowers />
      </div>

      {/* Message overlay */}
      <div className="relative z-20 flex flex-col items-center justify-start pt-8 sm:pt-12 pb-40 h-full px-4 overflow-y-auto">
        {showMessage && (
          <div className="text-center max-w-lg" style={{ animation: "fadeInUp 1.5s ease-out" }}>
            <Heart className="w-8 h-8 mx-auto mb-4 text-primary animate-heartbeat" fill="currentColor" />
            
            <h1 className="font-display text-foreground text-4xl sm:text-6xl mb-6 opacity-90"
              style={{ textShadow: "2px 2px 8px rgba(200, 0, 100, 0.3)" }}>
              Happy Valentine's Day, Cii AKA Negang Bebe
            </h1>

            <div className="font-body text-foreground/80 text-sm sm:text-base leading-relaxed space-y-4 mb-8 px-2 text-left">
              <p>Hello po hehe. Happy Valentine's Day!!! I hope you like the website I made for you. I really worked on it. Sorry din kagabi kasi bigla akong nag-end ng call HAHAHA. I was too excited to finish it for you.</p>
              <p>Grabe, almost 1 year na pala tayo magkakilala. And imagine, we met because of ML. If I wasn't addicted to ML before, I wouldn't have met you. So… thank you ML? HAHAHA lala.</p>
              <p>Ang dami na rin nating napag-usapan at napagtawanan. Kahit simple lang na usapan, iba pa rin pag ikaw kausap ko. I'm really happy I met you.</p>
              <p>And you ar important pirson to mi sir. Hindi ko man masabi lahat ng gusto kong sabihin in person, at least dito, kaya kong ilagay lahat.</p>
              <p>I just wish na mas tumagal pa tayo.</p>
              <p className="text-center text-foreground text-lg font-semibold">Cii, I love you. More than I LOVE YOUUUU 💗</p>
              <p className="text-center">Happy Valentine's Day again 🤍</p>
              <p className="text-foreground/50 text-xs italic mt-6 text-center">— Churchill</p>
            </div>

            {/* Music Player */}
             <div style={{ animation: "fadeInUp 1s 0.3s ease-out both" }} className="mb-12">
               <MusicPlayer />
             </div>

            {/* Photo Gallery */}
             <div style={{ animation: "fadeInUp 1s 0.45s ease-out both" }}>
               <p className="text-foreground/60 text-xs mb-4 font-body tracking-widest uppercase">✨ My Beautiful Cii ✨</p>
               <div className="grid grid-cols-2 gap-3 mb-8">
                 {photos.map((photo, i) => (
                   <div
                     key={i}
                     className="rounded-xl overflow-hidden aspect-square shadow-lg"
                     style={{
                       animation: `fadeInUp 0.6s ${0.65 + i * 0.15}s ease-out both`,
                       border: "2px solid hsl(340 60% 30% / 0.4)",
                       boxShadow: "0 4px 20px hsl(340 80% 40% / 0.2)",
                     }}
                   >
                     <img
                       src={photo}
                       alt={`Cia photo ${i + 1}`}
                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                     />
                   </div>
                 ))}
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Surprise;
