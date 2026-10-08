import Image from "next/image";
import { siteConfig } from "@/config/site";
import { BackgroundVideo } from "@/components/hero/background-video";

type CinematicBackdropProps = {
  showVideo?: boolean;
};

export function CinematicBackdrop({
  showVideo = false,
}: CinematicBackdropProps) {
  return (
    <>
      <Image
        src={siteConfig.showreel.posterSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="cinematic-backdrop__poster"
      />
      {showVideo && siteConfig.showreel.videoSrc ? (
        <BackgroundVideo
          src={siteConfig.showreel.videoSrc}
          poster={siteConfig.showreel.posterSrc}
        />
      ) : null}
      <div className="cinematic-backdrop__overlay" aria-hidden="true" />
    </>
  );
}
