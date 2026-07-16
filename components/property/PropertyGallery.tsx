"use client";

import Image from "next/image";
import { useState } from "react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({
  images,
  title,
}: PropertyGalleryProps) {
  const galleryImages =
    images && images.length > 0
      ? images
      : ["/images/no-image.jpg"];

  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0]
  );

  return (
    <div>
      {/* MAIN IMAGE */}

      <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-[35px] border border-lime-400/20 bg-black">
        <Image
          src={selectedImage}
          alt={title}
          fill
          sizes="100vw"
          className="object-contain transition-all duration-300"
          priority
        />
      </div>

      {/* THUMBNAILS */}

      <div className="mt-5 grid grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative h-28 overflow-hidden rounded-2xl border transition-all ${
              selectedImage === image
                ? "border-lime-400 ring-2 ring-lime-400"
                : "border-lime-400/20 hover:border-lime-400/60"
            }`}
          >
            <Image
              src={image}
              alt={`${title}-${index + 1}`}
              fill
              sizes="200px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}