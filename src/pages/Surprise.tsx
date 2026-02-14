import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import CSSFlowers from "@/components/CSSFlowers";
import MusicPlayer from "@/components/MusicPlayer";

const Surprise = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#000" }}>
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
      <div className="relative z-20 flex flex-col items-center justify-start pt-8 sm:pt-12 h-full px-4 overflow-y-auto">
        {showMessage && (
          <div className="text-center max-w-lg" style={{ animation: "fadeInUp 1.5s ease-out" }}>
            <Heart className="w-8 h-8 mx-auto mb-4 text-primary animate-heartbeat" fill="currentColor" />
            
            <h1 className="font-display text-foreground text-5xl sm:text-7xl mb-6 opacity-90"
              style={{ textShadow: "2px 2px 8px rgba(200, 0, 100, 0.3)" }}>
              Para sa'yo, Cia
            </h1>

            <div className="font-body text-foreground/80 text-sm sm:text-base leading-relaxed space-y-4 mb-8 px-2">
              <p>
                Happy Valentine's Day, bebe! 💗
              </p>
              <p>
                Alam mo namang mahalaga ka sa'kin. Hindi ko man masabi lahat ng gusto kong sabihin in person,
                at least dito, kaya ko ilagay lahat.
              </p>
              <p>
                You make every day better just by being you. Yung smile mo, yung laugh mo,
                yung way mo mag-care — lahat yun, sobrang special sa'kin.
              </p>
              <p>
                I love you, always. 🌹
              </p>
              <p className="text-foreground/50 text-xs italic mt-6">
                — rifan, para sa pinakamagandang babae sa mundo ko ♥
              </p>
            </div>

            {/* Music Player */}
            <div style={{ animation: "fadeInUp 1s 0.5s ease-out both" }}>
              <p className="text-foreground/50 text-xs mb-3 font-body">our song 🎵</p>
              <MusicPlayer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Surprise;
