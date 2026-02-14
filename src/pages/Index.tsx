import { Link } from "react-router-dom";
import GradientBackground from "@/components/GradientBackground";
import flowersImg from "@/assets/flowers.png";

const Index = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <GradientBackground />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Greeting */}
        <h1
          className="font-display text-foreground text-6xl sm:text-8xl md:text-9xl opacity-90 select-none animate-fade-in-up"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}
        >
        Hi Loves!!
        </h1>

        {/* Subtitle with flower link */}
        <div
          className="mt-12 font-display text-foreground text-3xl sm:text-5xl md:text-6xl opacity-80 select-none flex items-center gap-2 flex-wrap justify-center"
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
            animation: "fadeInUp 1s 0.5s ease-out both",
          }}
        >
          <span>You deserve a</span>
          <Link
            to="/surprise"
            className="inline-block animate-float transition-transform hover:scale-125"
            title="Click me! 🌸"
          >
            <img
              src={flowersImg}
              alt="Click for surprise"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-pulse-glow inline-block"
            />
          </Link>
        </div>

        {/* Bottom note */}
        <p
          className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-foreground/40 text-[10px] sm:text-xs text-center max-w-[60vw] select-none"
          style={{ animation: "fadeInUp 1s 1s ease-out both" }}
        >
          "Click the flower, Mahal. I have something for ya 💗"
          <br />— CHURCHILL &lt;3
        </p>
      </div>
    </div>
  );
};

export default Index;
