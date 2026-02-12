import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageLightbox = ({ src, alt, className }: ImageLightboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-black/95 border-none">
          <VisuallyHidden><DialogTitle>{alt}</DialogTitle></VisuallyHidden>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain max-h-[90vh] rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageLightbox;
