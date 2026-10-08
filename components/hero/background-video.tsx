"use client";

import { useEffect, useRef, useState } from "react";

type BackgroundVideoProps = {
  src: string;
  poster: string;
};

export function BackgroundVideo({ src, poster }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      setMotionAllowed(!preference.matches);
    };

    syncMotionPreference();
    preference.addEventListener("change", syncMotionPreference);

    return () => {
      preference.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!motionAllowed) {
      video.pause();
      return;
    }

    const playRequest = video.play();
    if (playRequest) {
      void playRequest.catch(() => {
        // The local poster remains visible if autoplay is blocked.
      });
    }

    return () => video.pause();
  }, [motionAllowed]);

  return (
    <video
      ref={videoRef}
      className="cinematic-backdrop__video"
      autoPlay={motionAllowed}
      muted
      loop
      playsInline
      preload={motionAllowed ? "metadata" : "none"}
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      data-playing={isPlaying}
      onPlaying={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      onError={() => setIsPlaying(false)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
