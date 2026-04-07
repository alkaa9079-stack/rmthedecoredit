import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  eager?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "4/3",
  eager = false,
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-sm bg-gray-50" style={{ aspectRatio }}>
      {/* Reduced reliance on skeleton to show image faster */}
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-sm z-0" />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        // CHANGED: Removed the 'opacity-0' so the image starts appearing immediately while loading
        className={`w-full h-full object-cover transition-opacity duration-500 z-10 ${className}`}
      />
    </div>
  );
};

export default OptimizedImage;
