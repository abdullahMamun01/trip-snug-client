import type { Photo } from "react-photo-album";


function convertImagesToPhotos(imageStrings: string[], defaultWidth: number, defaultHeight: number): Photo[] {
  return imageStrings.map((asset , i) => ({
    src: asset,
    alt: `image-${i}`, // Customize alt text as needed
    width: defaultWidth,
    height: defaultHeight,
   
  }));
}

export default convertImagesToPhotos
