import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  gallery?: string[];
  galleryAlt?: string;
}

const ImageLightbox = ({ src, alt, className, gallery, galleryAlt }: ImageLightboxProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = gallery && gallery.length > 0 ? gallery : [src];
  const startIndex = gallery ? gallery.indexOf(src) : 0;

  const handleOpen = () => {
    setCurrentIndex(startIndex >= 0 ? startIndex : 0);
    setOpen(true);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        onClick={handleOpen}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-black/95 border-none">
          <VisuallyHidden><DialogTitle>{galleryAlt || alt}</DialogTitle></VisuallyHidden>
          <div className="relative flex items-center justify-center">
            {images.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            <img
              src={images[currentIndex]}
              alt={`${galleryAlt || alt} - ${currentIndex + 1}`}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
            />
            {images.length > 1 && (
              <button
                onClick={next}
                className="absolute right-2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
          {images.length > 1 && (
            <div className="text-center text-white/60 text-sm mt-1">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageLightbox;
