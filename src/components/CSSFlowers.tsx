const CSSFlowers = () => {
  return (
    <div className="relative" style={{ transform: "scale(0.9)" }}>
      {/* Flower 1 */}
      <div className="absolute" style={{ bottom: "10vmin", transformOrigin: "bottom center", zIndex: 10, animation: "moving-flower-1 4s linear infinite" }}>
        <div className="relative" style={{ animation: "blooming-flower 2s 1.1s backwards" }}>
          <div style={leafStyle(1)} /><div style={leafStyle(2)} /><div style={leafStyle(3)} /><div style={leafStyle(4)} />
          <div style={whiteCircleStyle} />
          {[...Array(8)].map((_, i) => <div key={i} style={lightStyle(i + 1)} />)}
        </div>
        <div style={lineStyle("70vmin", "0.3s")}>
          <div style={lineLeafStyle("right", "1.6s", "20%")} />
          <div style={lineLeafStyle("right", "1.4s", "45%")} />
          <div style={lineLeafStyle("left", "1.2s", "12%")} />
          <div style={lineLeafStyle("left", "1s", "40%")} />
          <div style={lineLeafStyle("right", "1.8s", "0%", 0.6)} />
          <div style={lineLeafStyle("left", "2s", "-2%", 0.6)} />
        </div>
      </div>

      {/* Flower 2 */}
      <div className="absolute" style={{ bottom: "10vmin", left: "50%", transformOrigin: "bottom center", zIndex: 10, animation: "moving-flower-2 4s linear infinite" }}>
        <div className="relative" style={{ animation: "blooming-flower 2s 1.4s backwards" }}>
          <div style={leafStyle(1)} /><div style={leafStyle(2)} /><div style={leafStyle(3)} /><div style={leafStyle(4)} />
          <div style={whiteCircleStyle} />
          {[...Array(8)].map((_, i) => <div key={i} style={lightStyle(i + 1)} />)}
        </div>
        <div style={lineStyle("60vmin", "0.6s")}>
          <div style={lineLeafStyle("right", "1.9s", "20%")} />
          <div style={lineLeafStyle("right", "1.7s", "45%")} />
          <div style={lineLeafStyle("left", "1.5s", "12%")} />
          <div style={lineLeafStyle("left", "1.3s", "40%")} />
        </div>
      </div>

      {/* Flower 3 */}
      <div className="absolute" style={{ bottom: "10vmin", left: "50%", transformOrigin: "bottom center", zIndex: 10, animation: "moving-flower-3 4s linear infinite" }}>
        <div className="relative" style={{ animation: "blooming-flower 2s 1.7s backwards" }}>
          <div style={leafStyle(1)} /><div style={leafStyle(2)} /><div style={leafStyle(3)} /><div style={leafStyle(4)} />
          <div style={whiteCircleStyle} />
          {[...Array(8)].map((_, i) => <div key={i} style={lightStyle(i + 1)} />)}
        </div>
        <div style={lineStyle("55vmin", "0.9s")}>
          <div style={lineLeafStyle("right", "2.5s", "20%")} />
          <div style={lineLeafStyle("right", "2.3s", "45%")} />
          <div style={lineLeafStyle("left", "2.1s", "12%")} />
          <div style={lineLeafStyle("left", "1.9s", "40%")} />
        </div>
      </div>

      {/* Long grass elements */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i} className="absolute" style={longGrassContainerStyle(i)}>
          {[0, 1, 2, 3].map((j) => (
            <div key={j} style={{ animation: `grow-ans 2s ${(3 + i * 0.4 + j * 0.2).toFixed(1)}s backwards` }}>
              <div style={longLeafStyle(j)} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Helper styles
const leafStyle = (n: number): React.CSSProperties => {
  const transforms: Record<number, string> = {
    1: "translate(-10%, 1%) rotateY(40deg) rotateX(-50deg)",
    2: "translate(-50%, -4%) rotateX(40deg)",
    3: "translate(-90%, 0%) rotateY(45deg) rotateX(50deg)",
    4: "translate(0%, 18%) rotateX(70deg) rotate(-43deg)",
  };
  return {
    position: "absolute", bottom: 0, left: "50%",
    width: n === 4 ? "8vmin" : "8vmin",
    height: n === 4 ? "8vmin" : "11vmin",
    borderRadius: n === 4 ? "4vmin 10vmin 4vmin 4vmin" : "51% 49% 47% 53%/44% 45% 55% 69%",
    backgroundImage: n === 4 ? "linear-gradient(to top, #aa0000, #ff0000)" : "linear-gradient(to top, #ff0000, #6e0000)",
    transformOrigin: n === 4 ? "bottom left" : "bottom center",
    transform: transforms[n],
    opacity: n === 4 ? 0.8 : 0.9,
    boxShadow: "inset 0 0 2vmin rgba(0, 0, 0, 0.5)",
    zIndex: n === 4 ? 1 : undefined,
  };
};

const whiteCircleStyle: React.CSSProperties = {
  position: "absolute", left: "-3.5vmin", top: "-3vmin",
  width: "9vmin", height: "4vmin", borderRadius: "50%",
  backgroundColor: "#aa0000",
};

const lightStyle = (n: number): React.CSSProperties => {
  const lefts = [-2, 3, -6, 6, -1, -4, 3, -6];
  const delays = [1, 0.5, 0.3, 0.9, 1.5, 3, 2, 3.5];
  return {
    position: "absolute", bottom: "0vmin", width: "1vmin", height: "1vmin",
    backgroundColor: n % 2 === 0 ? "rgb(255, 0, 64)" : "#ff0241",
    borderRadius: "50%", filter: "blur(0.2vmin)",
    animation: `light-ans 4s linear infinite ${delays[n - 1]}s backwards`,
    left: `${lefts[n - 1]}vmin`,
  };
};

const lineStyle = (height: string, delay: string): React.CSSProperties => ({
  height, width: "1.5vmin",
  backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.2), transparent, rgba(255,255,255,0.2)), linear-gradient(to top, transparent 10%, #2c7a14, #5ed639)",
  boxShadow: "inset 0 0 2px rgba(0,0,0,0.5)",
  animation: `grow-flower-tree 4s ${delay} backwards`,
});

const lineLeafStyle = (dir: "left" | "right", delay: string, top: string, scale?: number): React.CSSProperties => {
  const w = "7vmin";
  const isLeft = dir === "left";
  return {
    position: "absolute", top, left: isLeft ? "-460%" : "90%",
    width: w, height: "9vmin",
    borderTopRightRadius: isLeft ? 0 : "9vmin",
    borderBottomLeftRadius: isLeft ? 0 : "9vmin",
    borderTopLeftRadius: isLeft ? "9vmin" : 0,
    borderBottomRightRadius: isLeft ? "9vmin" : 0,
    backgroundImage: "linear-gradient(to top, rgba(37, 122, 20, 0.4), #58d639)",
    animation: `blooming-leaf-${dir} 0.8s ${delay} backwards`,
    transform: `rotate(${isLeft ? "-" : ""}70deg) rotateY(30deg)${scale ? ` scale(${scale})` : ""}`,
    transformOrigin: scale ? (isLeft ? "right" : "left") : undefined,
  };
};

const longGrassContainerStyle = (i: number): React.CSSProperties => {
  const configs: Record<number, React.CSSProperties> = {
    0: { bottom: "25vmin", left: "-42vmin", transformOrigin: "bottom left" },
    1: { bottom: "0vmin", left: "-42vmin", transform: "scale(0.8) rotate(-5deg)", transformOrigin: "bottom left" },
    2: { bottom: "-3vmin", left: "-35vmin", transform: "scale(0.6) rotateX(60deg)", transformOrigin: "center" },
    3: { bottom: "0vmin", left: "-17vmin", transform: "scale(0.6) rotateX(60deg)", transformOrigin: "center" },
    4: { bottom: "-3vmin", left: "25vmin", transform: "scale(0.6) rotateX(60deg)", transformOrigin: "center" },
    5: { bottom: "0vmin", left: "42vmin", transform: "scale(0.8) rotate(2deg)", transformOrigin: "bottom left" },
    6: { bottom: "-20vmin", left: "0vmin", zIndex: 100, filter: "blur(0.3vmin)", transform: "scale(0.8) rotate(2deg)" },
    7: { bottom: "20vmin", left: "35vmin", zIndex: -1, filter: "blur(0.3vmin)", transform: "scale(0.6) rotate(2deg)", opacity: 0.7 },
  };
  return configs[i] || {};
};

const longLeafStyle = (j: number): React.CSSProperties => {
  const configs: Record<number, React.CSSProperties> = {
    0: { left: "2vmin", animation: "leaf-ans-1 4s linear infinite" },
    1: { animation: "leaf-ans-1 4s linear infinite" },
    2: { left: "-0.5vmin", bottom: "5vmin", transformOrigin: "bottom left", transform: "rotateY(-180deg)", animation: "leaf-ans-2 3s linear infinite" },
    3: { left: "-1vmin", bottom: "3.2vmin", transformOrigin: "bottom left", transform: "rotate(-10deg) rotateY(-180deg)", animation: "leaf-ans-3 3s linear infinite" },
  };
  return {
    position: "absolute", bottom: 0,
    width: j === 1 || j === 3 ? "5vmin" : j === 2 ? "10vmin" : "15vmin",
    height: j === 1 ? "60vmin" : j === 3 ? "30vmin" : "40vmin",
    borderTopLeftRadius: "100%",
    borderLeft: "2vmin solid #1aaa15",
    maskImage: "linear-gradient(to top, transparent 20%, black)",
    WebkitMaskImage: "linear-gradient(to top, transparent 20%, black)",
    transformOrigin: "bottom center",
    ...configs[j],
  };
};

export default CSSFlowers;
