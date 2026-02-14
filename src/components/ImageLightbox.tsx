import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";

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
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });

  const images = gallery && gallery.length > 0 ? gallery : [src];
  const startIndex = gallery ? gallery.indexOf(src) : 0;

  const handleOpen = () => {
    setCurrentIndex(startIndex >= 0 ? startIndex : 0);
    resetZoom();
    setOpen(true);
  };

  const resetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((z) => Math.min(z + 0.5, 4));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((z) => {
      const newZoom = Math.max(z - 0.5, 1);
      if (newZoom === 1) setPan({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    resetZoom();
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    resetZoom();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    resetZoom();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...pan };
  }, [zoom, pan]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    setPan({
      x: panStart.current.x + (e.clientX - dragStart.current.x),
      y: panStart.current.y + (e.clientY - dragStart.current.y),
    });
  }, [isDragging, zoom]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.25 : 0.25;
    setZoom((z) => {
      const newZoom = Math.max(1, Math.min(z + delta, 4));
      if (newZoom === 1) setPan({ x: 0, y: 0 });
      return newZoom;
    });
  }, []);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoom > 1) {
      resetZoom();
    } else {
      setZoom(2.5);
    }
  }, [zoom]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        onClick={handleOpen}
      />
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) resetZoom(); }}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-black/95 border-none flex flex-col items-center justify-center [&>button]:hidden">
          <VisuallyHidden><DialogTitle>{galleryAlt || alt}</DialogTitle></VisuallyHidden>
          
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 z-30 p-2.5 rounded-full bg-white/30 hover:bg-white/50 transition-colors text-white backdrop-blur-sm"
            title="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Zoom controls */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
            <button onClick={handleZoomOut} className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white" title="Zoom out">
              <ZoomOut className="h-5 w-5" />
            </button>
            <span className="text-white text-sm font-medium min-w-[3rem] text-center">{Math.round(zoom * 100)}%</span>
            <button onClick={handleZoomIn} className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white" title="Zoom in">
              <ZoomIn className="h-5 w-5" />
            </button>
            {zoom > 1 && (
              <button onClick={handleReset} className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white" title="Reset">
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
          </div>

          <div
            className="relative flex items-center justify-center w-full h-full overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            {images.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
            )}
            <img
              src={images[currentIndex]}
              alt={`${galleryAlt || alt} - ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg transition-transform duration-200"
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
              }}
              onMouseDown={handleMouseDown}
              onDoubleClick={handleDoubleClick}
              draggable={false}
            />
            {images.length > 1 && (
              <button
                onClick={next}
                className="absolute right-2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm border border-white/20"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            )}
          </div>
          {images.length > 1 && (
            <div className="text-center text-white text-sm mt-1 bg-black/50 backdrop-blur-sm px-4 py-1 rounded-full font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageLightbox;
