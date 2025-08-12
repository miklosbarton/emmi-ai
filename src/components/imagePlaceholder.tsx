import clsx from "clsx";
import { Image } from "lucide-react";


type ImagePlaceholderProps = {
  src?: string; // optional image source
  alt?: string;
  className?: string; // custom styling
  width?: number | string;
  height?: number | string;
};

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt = "Placeholder image",
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center bg-muted",
        className
      )}    
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
        />
      ) : (
        <Image className="size-6 shrink-0 text-muted-foreground/50"/>
      )}
    </div>
  );
};

export default ImagePlaceholder;