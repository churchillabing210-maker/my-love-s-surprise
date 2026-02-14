import { useRef, useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import albumCover from "@/assets/paniwalaan-cover.jpg";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTime(formatTime(audio.currentTime));
      }
    };

    const onLoaded = () => {
      setDuration(formatTime(audio.duration));
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * audio.duration;
  };

  // Auto-play on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <audio ref={audioRef} src="/music/paniwalaan.mp3" preload="metadata" />
      
      <div className="rounded-2xl p-4 backdrop-blur-xl" style={{
        background: "linear-gradient(135deg, hsl(270 40% 15% / 0.8), hsl(340 50% 20% / 0.6))",
        border: "1px solid hsl(270 30% 30% / 0.5)",
        boxShadow: "0 8px 32px hsl(0 0% 0% / 0.4)",
      }}>
        {/* Album art + info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={albumCover}
            alt="Paniwalaan - LEYO"
            className="w-14 h-14 rounded-lg object-cover shadow-lg"
          />
          <div className="flex-1 min-w-0">
            <p className="text-foreground font-body text-sm font-semibold truncate">Paniwalaan</p>
            <p className="text-muted-foreground text-xs truncate">LEYO</p>
          </div>
          <span className="text-primary animate-heartbeat text-xl">♥</span>
        </div>

        {/* Progress bar */}
        <div className="mb-2">
          <div
            className="w-full h-1 rounded-full cursor-pointer"
            style={{ background: "hsl(270 20% 25%)" }}
            onClick={handleSeek}
          >
            <div
              className="h-full rounded-full relative transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, hsl(340 80% 55%), hsl(330 90% 65%))",
              }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{
                background: "hsl(0 0% 100%)",
                boxShadow: "0 0 6px hsl(340 80% 55%)",
              }} />
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-muted-foreground text-[10px]">{currentTime}</span>
            <span className="text-muted-foreground text-[10px]">{duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipBack size={18} />
          </button>
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{
              background: "linear-gradient(135deg, hsl(340 80% 55%), hsl(330 90% 45%))",
              boxShadow: "0 4px 15px hsl(340 80% 55% / 0.4)",
            }}
          >
            {isPlaying ? (
              <Pause size={18} className="text-foreground" />
            ) : (
              <Play size={18} className="text-foreground ml-0.5" />
            )}
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
