import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { loadFont as loadDisplay } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadSerif } from "@remotion/google-fonts/InstrumentSerif";

const { fontFamily: DISPLAY } = loadDisplay("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin"],
});
const { fontFamily: SERIF } = loadSerif("italic", {
  weights: ["400"],
  subsets: ["latin"],
});

// Cobalt-on-Bone brand palette
const BONE = "#f3eee3";
const INK = "#111014";
const COBALT = "#2540ff";
const EASE = Easing.bezier(0.16, 1, 0.3, 1);

// Mask-reveal: content rises into view from a clipped container
const Rise: React.FC<{
  children: React.ReactNode;
  delay?: number;
  dur?: number;
}> = ({ children, delay = 0, dur = 20 }) => {
  const frame = useCurrentFrame();
  const f = frame - delay;
  const y = interpolate(f, [0, dur], [118, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const opacity = interpolate(f, [0, dur * 0.6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div style={{ overflow: "hidden", paddingBottom: "0.1em" }}>
      <div style={{ translate: `0 ${y}%`, opacity }}>{children}</div>
    </div>
  );
};

const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  dur?: number;
}> = ({ children, delay = 0, dur = 16 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - delay, [0, dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return <div style={{ opacity }}>{children}</div>;
};

const eyebrow: React.CSSProperties = {
  fontFamily: DISPLAY,
  textTransform: "uppercase",
  letterSpacing: "0.3em",
  fontSize: 26,
  fontWeight: 500,
  color: "rgba(17,16,20,0.45)",
};

// ---- Scene 1: Intro ----
const Intro: React.FC = () => (
  <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
    <div
      style={{
        position: "absolute",
        top: 90,
        left: 90,
        right: 90,
        display: "flex",
        justifyContent: "space-between",
        ...eyebrow,
      }}
    >
      <FadeIn delay={6}>
        <span>©2026</span>
      </FadeIn>
      <FadeIn delay={10}>
        <span>New Delhi, IN</span>
      </FadeIn>
    </div>

    <FadeIn delay={6}>
      <div style={{ ...eyebrow, marginBottom: 26 }}>Portfolio · AI Engineer</div>
    </FadeIn>
    <Rise delay={10} dur={24}>
      <div
        style={{
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: 300,
          letterSpacing: "-0.055em",
          lineHeight: 0.9,
          color: INK,
          textTransform: "uppercase",
        }}
      >
        Ayam
      </div>
    </Rise>
    <Rise delay={22} dur={22}>
      <div
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: 116,
          lineHeight: 1.1,
          color: COBALT,
          marginTop: 6,
        }}
      >
        AI engineer
      </div>
    </Rise>
  </AbsoluteFill>
);

// ---- Scene 2: Capabilities (one word at a time) ----
const CAPS = ["Fine-tuning", "Quantization", "RAG & agents", "Inference", "MLOps"];
const Capabilities: React.FC = () => {
  const frame = useCurrentFrame();
  const slot = 16;
  const idx = Math.min(Math.floor(frame / slot), CAPS.length - 1);
  const local = frame - idx * slot;
  const y = interpolate(local, [0, 8], [70, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const opacity = interpolate(local, [0, 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <FadeIn>
        <div style={{ ...eyebrow, marginBottom: 30 }}>What I do</div>
      </FadeIn>
      <div style={{ overflow: "hidden", paddingBottom: "0.12em" }}>
        <div
          style={{
            translate: `0 ${y}px`,
            opacity,
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: 200,
            letterSpacing: "-0.05em",
            color: INK,
            textTransform: "uppercase",
          }}
        >
          {CAPS[idx]}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene 3: Impact metrics ----
const METRICS = [
  { v: "−60%", l: "LLM inference cost" },
  { v: "−40%", l: "latency" },
  { v: "+90%", l: "shortlisting efficiency" },
  { v: "2,500+", l: "users reached" },
];
const Metrics: React.FC = () => (
  <AbsoluteFill style={{ justifyContent: "center", padding: "0 120px" }}>
    <FadeIn>
      <div style={{ ...eyebrow, marginBottom: 50 }}>Shipped · measurable impact</div>
    </FadeIn>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        rowGap: 60,
        columnGap: 80,
      }}
    >
      {METRICS.map((m, i) => (
        <Rise key={m.l} delay={6 + i * 8} dur={20}>
          <div>
            <div
              style={{
                fontFamily: DISPLAY,
                fontWeight: 700,
                fontSize: 150,
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                color: COBALT,
              }}
            >
              {m.v}
            </div>
            <div
              style={{
                fontFamily: DISPLAY,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontSize: 30,
                color: "rgba(17,16,20,0.6)",
                marginTop: 14,
              }}
            >
              {m.l}
            </div>
          </div>
        </Rise>
      ))}
    </div>
  </AbsoluteFill>
);

// ---- Scene 4: Selected work ----
const WORK = [
  "LeetLingo · 2,500+ users",
  "Multi-Agent RAG support",
  "Recruitment Voice AI",
];
const Work: React.FC = () => (
  <AbsoluteFill style={{ justifyContent: "center", padding: "0 120px" }}>
    <FadeIn>
      <div style={{ ...eyebrow, marginBottom: 40 }}>Selected work</div>
    </FadeIn>
    {WORK.map((w, i) => (
      <Rise key={w} delay={6 + i * 10} dur={20}>
        <div
          style={{
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: 96,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: INK,
          }}
        >
          {w}
        </div>
      </Rise>
    ))}
  </AbsoluteFill>
);

// ---- Scene 5: CTA ----
const CTA: React.FC = () => (
  <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
    <Rise delay={4} dur={22}>
      <div
        style={{
          fontFamily: DISPLAY,
          fontWeight: 700,
          fontSize: 150,
          letterSpacing: "-0.05em",
          lineHeight: 0.95,
          color: INK,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Open to
        <br />
        <span style={{ fontFamily: SERIF, fontStyle: "italic", textTransform: "none", color: COBALT }}>
          AI/ML roles
        </span>
      </div>
    </Rise>
    <FadeIn delay={26} dur={18}>
      <div
        style={{
          marginTop: 56,
          backgroundColor: COBALT,
          color: "#fff",
          fontFamily: DISPLAY,
          fontWeight: 500,
          fontSize: 38,
          letterSpacing: "0.04em",
          padding: "26px 54px",
          borderRadius: 999,
        }}
      >
        ayam.codes
      </div>
    </FadeIn>
  </AbsoluteFill>
);

// ---- Main reel ----
export const Reel: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const prog = interpolate(frame, [0, durationInFrames - 1], [0, 100], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ backgroundColor: BONE }}>
      <Sequence durationInFrames={100}>
        <Intro />
      </Sequence>
      <Sequence from={100} durationInFrames={85}>
        <Capabilities />
      </Sequence>
      <Sequence from={185} durationInFrames={95}>
        <Metrics />
      </Sequence>
      <Sequence from={280} durationInFrames={60}>
        <Work />
      </Sequence>
      <Sequence from={340} durationInFrames={50}>
        <CTA />
      </Sequence>

      {/* Persistent footer label + progress bar */}
      <AbsoluteFill style={{ pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 90,
            fontFamily: DISPLAY,
            fontSize: 24,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(17,16,20,0.4)",
          }}
        >
          Ayamullah Khan
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 6,
            width: `${prog}%`,
            backgroundColor: COBALT,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
