"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import convertImagesToPhotos from "@/lib/convertImagesToPhotos";
export default function HotelImages({ images }: { images: string[] }) {
  const [index, setIndex] = useState(-1);
  return (
    <div className="mb-8 grid grid-cols-4 gap-1 py-4">
      <div className="col-span-2 row-span-2">
        <Image
          src={images[0]}
          width={1000}
          height={1000}
          alt="Main interior view"
          className="h-full md:h-[390px] w-full rounded-l-xl object-cover"
        />
      </div>
      {images.slice(1, 5).map((image, i) => (
        <div key={i} className={`relative ${i === 3 ? "group" : ""}`}>
          <Image
            src={image}
            width={1000}
            height={1000}
            alt={`Property view ${i + 2}`}
            className={`h-full md:h-[193px] rounded-md w-full object-cover ${
              i === 1 ? "rounded-tr-xl" : ""
            } ${i === 3 ? "rounded-br-xl" : ""}`}
          />
          {i === 3 && (
            <Button
              onClick={() => setIndex(1)}
              className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm"
              variant="flat"
            >
              {images.length}+ photos
            </Button>
          )}
        </div>
      ))}

      <Lightbox
        slides={convertImagesToPhotos(images, 1080, 720)}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
/* 

<div className="grid grid-cols-2 col-span-4 md:col-span-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative h-[190px]">
                    <Image
                      src="/placeholder.svg"
                      alt={`Room view ${index}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    {index === 4 && (
                      <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          Show all 20 photos
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

*/