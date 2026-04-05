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
    <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio }}>
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-sm" />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
      />
    </div>
  );
};

export default OptimizedImage;
