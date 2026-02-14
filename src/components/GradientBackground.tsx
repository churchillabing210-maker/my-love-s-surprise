import { useEffect, useRef } from "react";

const GradientBackground = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interBubbleRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{
      background: "linear-gradient(40deg, hsl(270 100% 32%), hsl(230 100% 16%))",
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" className="fixed top-0 left-0 w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="w-full h-full" style={{ filter: "url(#goo) blur(40px)" }}>
        {[
          { color: "18, 113, 255", animation: "moveVertical 30s ease infinite", size: "80%" },
          { color: "221, 74, 255", animation: "moveInCircle 20s reverse infinite", size: "80%", origin: "calc(50% - 400px)" },
          { color: "100, 220, 255", animation: "moveInCircle 40s linear infinite", size: "80%", top: "calc(50% - 40% + 200px)", left: "calc(50% - 40% - 500px)", origin: "calc(50% + 400px)" },
          { color: "200, 50, 50", animation: "moveHorizontal 40s ease infinite", size: "80%", opacity: 0.7, origin: "calc(50% - 200px)" },
          { color: "180, 180, 50", animation: "moveInCircle 20s ease infinite", size: "160%", origin: "calc(50% - 800px) calc(50% + 200px)" },
        ].map((g, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              background: `radial-gradient(circle at center, rgba(${g.color}, 0.8) 0, rgba(${g.color}, 0) 50%)`,
              mixBlendMode: "hard-light",
              width: g.size,
              height: g.size,
              top: g.top || `calc(50% - ${parseInt(g.size) / 2}%)`,
              left: g.left || `calc(50% - ${parseInt(g.size) / 2}%)`,
              transformOrigin: g.origin || "center center",
              animation: g.animation,
              opacity: g.opacity || 1,
            }}
          />
        ))}
        <div
          ref={interBubbleRef}
          className="absolute w-full h-full opacity-70"
          style={{
            background: "radial-gradient(circle at center, rgba(140, 100, 255, 0.8) 0, rgba(140, 100, 255, 0) 50%)",
            mixBlendMode: "hard-light",
            top: "-50%",
            left: "-50%",
          }}
        />
      </div>
    </div>
  );
};

export default GradientBackground;
