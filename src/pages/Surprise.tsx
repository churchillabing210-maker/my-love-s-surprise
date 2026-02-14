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

const floatingPhotos = [
  { src: cia1, top: "5%", left: "2%", rotate: "-12deg", delay: "0.3s", size: "clamp(90px, 14vw, 150px)" },
  { src: cia2, top: "8%", right: "3%", rotate: "8deg", delay: "0.6s", size: "clamp(80px, 12vw, 130px)" },
  { src: cia3, top: "35%", left: "-1%", rotate: "6deg", delay: "0.9s", size: "clamp(85px, 13vw, 140px)" },
  { src: cia4, top: "38%", right: "1%", rotate: "-10deg", delay: "1.2s", size: "clamp(80px, 12vw, 130px)" },
  { src: cia5, top: "62%", left: "1%", rotate: "-5deg", delay: "1.5s", size: "clamp(85px, 13vw, 135px)" },
  { src: cia6, top: "60%", right: "2%", rotate: "12deg", delay: "1.8s", size: "clamp(90px, 14vw, 145px)" },
];

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

      {/* Floating photos scattered around the page */}
      {showMessage && floatingPhotos.map((photo, i) => (
        <div
          key={i}
          className="fixed z-10 pointer-events-none"
          style={{
            top: photo.top,
            left: photo.left,
            right: photo.right,
            animation: `floatPhoto 6s ${parseFloat(photo.delay) + 1}s ease-in-out infinite, fadeInUp 1s ${photo.delay} ease-out both`,
          }}
        >
          <div
            className="rounded-lg overflow-hidden shadow-2xl"
            style={{
              width: photo.size,
              height: photo.size,
              transform: `rotate(${photo.rotate})`,
              border: "3px solid hsl(0 0% 100% / 0.15)",
              boxShadow: "0 8px 30px hsl(340 80% 40% / 0.25), 0 0 60px hsl(270 60% 30% / 0.15)",
            }}
          >
            <img
              src={photo.src}
              alt={`Cia ${i + 1}`}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.85) contrast(1.05)" }}
            />
          </div>
        </div>
      ))}

      {/* Flowers at the bottom */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center" style={{ perspective: "1000px" }}>
        <CSSFlowers />
      </div>

      {/* Message overlay */}
      <div className="relative z-20 flex flex-col items-center justify-start pt-8 sm:pt-12 pb-40 h-full px-4 overflow-y-auto">
        {showMessage && (
          <div className="text-center max-w-md" style={{ animation: "fadeInUp 1.5s ease-out" }}>
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
            <div style={{ animation: "fadeInUp 1s 0.3s ease-out both" }}>
              <MusicPlayer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Surprise;
