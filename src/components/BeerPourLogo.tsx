import React, { useEffect, useState } from "react";

const BEER_FILL_DURATION = 8000; // ms (slowed down)
const FOAM_HEIGHT = 22; // px
const WAVE_AMPLITUDE = 16; // px
const WAVE_FREQUENCY = 2.2; // number of waves across the width
const WAVE_SPEED = 1.3; // speed of wave animation
const BUBBLE_COUNT = 0;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const BeerPourLogo: React.FC<{
  maskUrl?: string;
  width?: string | number;
  height?: string | number;
  trigger?: "mount" | "hover" | "scroll";
}> = ({
  maskUrl = "/text.png",
  width = "min(50vw, 600px)",
  height = "min(12.5vw, 150px)",
  trigger = "mount",
}) => {
  const [progress, setProgress] = useState(0);
  const [wavePhase, setWavePhase] = useState(0);

  // Animate fill progress ONCE on mount
  useEffect(() => {
    let start: number | null = null;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / BEER_FILL_DURATION, 1);
      setProgress(easeOutCubic(t));
      if (t < 1) {
        raf = requestAnimationFrame(animate);
      }
    };
    if (trigger === "mount") {
      raf = requestAnimationFrame(animate);
    }
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [trigger]);

  // Animate wave phase FOREVER
  useEffect(() => {
    let raf: number;
    const animateWave = (timestamp: number) => {
      setWavePhase((timestamp / 1000) * WAVE_SPEED);
      raf = requestAnimationFrame(animateWave);
    };
    raf = requestAnimationFrame(animateWave);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Responsive width/height in px for SVG
  const widthPx = 1200; // higher res for smoothness
  const heightPx = 300;
  const fillHeight = heightPx * progress;

  // Generate SVG path for wavy top
  function getWavePath(widthPx: number, heightPx: number, fillHeight: number, phase: number, amplitude = WAVE_AMPLITUDE) {
    const points = 80; // more points for smoothness
    let path = `M 0 ${heightPx} V ${heightPx - fillHeight}`;
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * widthPx;
      const theta = (i / points) * Math.PI * 2 * WAVE_FREQUENCY + phase;
      const y =
        heightPx - fillHeight -
        Math.sin(theta) * amplitude * Math.max(0.2, fillHeight / heightPx);
      path += ` L ${x} ${y}`;
    }
    path += ` V ${heightPx} Z`;
    return path;
  }
  const wavePath = getWavePath(widthPx, heightPx, fillHeight, wavePhase, WAVE_AMPLITUDE);
  const foamPath = getWavePath(widthPx, heightPx, fillHeight, wavePhase + 0.5, WAVE_AMPLITUDE * 0.7);

  // Bubble generation (inside fill only)
  const bubbles = Array.from({ length: BUBBLE_COUNT }).map((_, i) => {
    const left = Math.random() * 92 + 2; // %
    const size = Math.random() * 12 + 8; // px
    const delay = Math.random() * 2.5; // s
    const duration = Math.random() * 3 + 5; // s (much slower bubbles)
    const bottom = Math.random() * (fillHeight - FOAM_HEIGHT - 10) + 5; // px, only inside fill
    return (
      <span
        key={i}
        className="beer-bubble"
        style={{
          left: `${left}%`,
          width: size,
          height: size,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          opacity: progress > 0.1 ? 1 : 0,
          bottom: bottom,
          willChange: "transform, opacity",
        }}
      />
    );
  });

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        display: "block",
        willChange: "opacity, transform",
      }}
    >
      {/* Beer fill, masked by PNG, with wavy top, foam, and bubbles */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          WebkitMaskImage: `url(${maskUrl})`,
          maskImage: `url(${maskUrl})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          pointerEvents: "none",
        }}
      >
        {/* Beer fill SVG */}
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${widthPx} ${heightPx}`}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
            willChange: "transform, opacity",
          }}
        >
          <defs>
            <linearGradient id="beer-gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#FF6F1F" />
              <stop offset="100%" stopColor="#FF8C42" />
            </linearGradient>
          </defs>
          <path d={wavePath} fill="url(#beer-gradient)" />
        </svg>
        {/* Bubbles */}
        <div className="beer-bubbles" style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none" }}>{bubbles}</div>
        {/* Foam following the wave */}
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${widthPx} ${heightPx}`}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            pointerEvents: "none",
            willChange: "transform, opacity",
          }}
        >
          <defs>
            <linearGradient id="foam-gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#fffbe9" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#fffbe9" stopOpacity="0.7" />
            </linearGradient>
            <filter id="foam-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#fffbe9" floodOpacity="0.7" />
            </filter>
          </defs>
          <path
            d={foamPath}
            fill="none"
            stroke="url(#foam-gradient)"
            strokeWidth={18}
            style={{
              filter: "url(#foam-shadow)",
              opacity: progress > 0.1 ? 1 : 0,
              transition: "stroke-width 0.3s, filter 0.3s, opacity 0.3s",
            }}
          />
        </svg>
        <style>{`
          .beer-bubbles {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0; bottom: 0;
            pointer-events: none;
          }
          .beer-bubble {
            position: absolute;
            background: radial-gradient(circle at 60% 40%, #fffbe9 60%, #ffe066 100%);
            border-radius: 50%;
            opacity: 0.7;
            animation: bubbleUp 6.5s linear infinite;
            will-change: transform, opacity;
          }
          @keyframes bubbleUp {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            70% { opacity: 1; }
            100% { transform: translateY(-90%) scale(0.7); opacity: 0; }
          }
        `}</style>
      </div>
      {/* White PNG always visible as top layer */}
      {/**
      <img
        src={maskUrl}
        alt="Kenny's Logo"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 2,
          pointerEvents: "none",
          userSelect: "none",
        }}
        draggable={false}
      />
      */}
    </div>
  );
};

export default BeerPourLogo;