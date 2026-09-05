import { X } from "lucide-react";

interface YouTubeVideoPlayerProps {
  onClose: () => void;
  videoId: string;
}

export function YouTubeVideoPlayer({
  onClose,
  videoId,
}: YouTubeVideoPlayerProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="pointer-events-auto absolute top-4 right-4 z-50 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Close video"
      >
        <X size={24} />
      </button>
    </div>
  );
}
