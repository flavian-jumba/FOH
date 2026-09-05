import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

type ImageData = {
  id: string;
  src: string;
  alt: string;
};

type GalleryContextType = {
  selectedImage: ImageData | null;
  setSelectedImage: (image: ImageData | null) => void;
};

const GalleryContext = React.createContext<GalleryContextType | null>(null);

const spring = {
  type: "spring" as const,
  stiffness: 350,
  damping: 35,
  mass: 1,
};

export function Gallery({ children }: { children: React.ReactNode }) {
  const [selectedImage, setSelectedImage] = React.useState<ImageData | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (selectedImage) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <GalleryContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
      <GalleryModal />
    </GalleryContext.Provider>
  );
}

export function GalleryGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("columns-1 gap-4 sm:columns-2 lg:columns-3", className)}>{children}</div>
  );
}

export function GalleryImage({ src, alt, id, className }: ImageData & { className?: string }) {
  const context = React.useContext(GalleryContext);
  if (!context) throw new Error("GalleryImage must be used within a Gallery.");

  return (
    <motion.button
      type="button"
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "relative mb-4 block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-sm text-left focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream",
        className,
      )}
      onClick={() => context.setSelectedImage({ id, src, alt })}
      aria-label={`View ${alt}`}
    >
      <motion.img
        layoutId={`gallery-image-${id}`}
        src={src}
        alt={alt}
        className="h-auto w-full object-cover"
        variants={{ hover: { scale: 0.98 }, tap: { scale: 0.95 } }}
        transition={spring}
      />
      <motion.span
        aria-hidden="true"
        variants={{ hover: { opacity: 1 }, tap: { opacity: 1 } }}
        initial={{ opacity: 0 }}
        className="pointer-events-none absolute inset-0 bg-[color:var(--burgundy)]/20"
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}

function GalleryModal() {
  const context = React.useContext(GalleryContext);
  if (!context) return null;

  const { selectedImage, setSelectedImage } = context;

  return (
    <AnimatePresence>
      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <motion.button
            type="button"
            aria-label="Close gallery image"
            className="absolute inset-0 cursor-zoom-out bg-black/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          />

          <motion.div
            className="relative z-10 flex h-full w-full items-center justify-center"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.8}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.y) > 100 || Math.abs(info.velocity.y) > 300) {
                setSelectedImage(null);
              }
            }}
          >
            <motion.img
              layoutId={`gallery-image-${selectedImage.id}`}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[95vw] rounded-sm object-contain shadow-2xl"
              draggable={false}
              transition={spring}
            />
          </motion.div>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="absolute top-5 right-5 z-20 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="size-5" aria-hidden="true" />
          </motion.button>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
