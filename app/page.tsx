"use client";

import { useEffect, useState } from "react";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(() => console.log("SW registered"))
        .catch((err) => console.log("SW error", err));
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100dvh",
        backgroundColor: "#FAFAF8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          textAlign: "center",
          maxWidth: 320,
          width: "100%",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 22,
            background:
              "linear-gradient(145deg, #FF6B35 0%, #FF8C5A 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            boxShadow:
              "0 12px 40px rgba(255,107,53,0.35), 0 2px 8px rgba(255,107,53,0.2)",
          }}
        >
          <span style={{ fontSize: 40 }}>🍳</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "#1A1A1A",
            margin: "0 0 8px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          }}
        >
          Ultimate
          <br />
          Cook Book
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 15,
            color: "#6B6B6B",
            margin: "0 0 48px",
            lineHeight: 1.5,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
          }}
        >
          Your household's private recipe collection
        </p>

        {/* Install hint — only visible in Safari browser (not standalone) */}
        <div
          style={{
            background: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 16,
            padding: "16px 20px",
            marginBottom: 24,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#6B6B6B",
              margin: 0,
              lineHeight: 1.6,
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
            }}
          >
            Tap the <strong style={{ color: "#1A1A1A" }}>Share</strong> button
            in Safari, then{" "}
            <strong style={{ color: "#1A1A1A" }}>"Add to Home Screen"</strong>{" "}
            to install this app.
          </p>
        </div>

        {/* Version */}
        <p
          style={{
            fontSize: 12,
            color: "#A0A0A0",
            margin: 0,
          }}
        >
          Setting up… more coming soon.
        </p>
      </div>
    </main>
  );
}
