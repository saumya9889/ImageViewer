import React, { useState } from "react";
import "./assests/style.scss";
import Forest from "../src/assests/image/forest.jpg";
import Mountain from "../src/assests/image/majestic-mountain.jpg";
import Forests from "../src/assests/image/beautiful-forest-forrest.jpg";
import Rain from "../src/assests/image/rain.jpg";
import Hut from "../src/assests/image/hut.jpg";
import Nature from "../src/assests/image/HD-wallpaper-nature.jpg";
import Night from "../src/assests/image/night.jpeg";
import WonderNight from "../src/assests/image/wonder-night.jpg";
import Boy from "../src/assests/image/alone-boy.jpg";
import Nature3D from "../src/assests/image/nature3D.webp";
import Natures from "../src/assests/image/nature_landscape.jpg";
import Wallpaper from "../src/assests/image/wallpaper.jpg";

const ImageViewer = ({ currentImage }) => {
  return (
    <div className="image-viewer">
      <img src={currentImage.image ||currentImage[0].image } alt="Selected" />
    </div>
  );
};

const ThumbnailList = ({ images, handleImage }) => {
  return (
    <div className="thumbnail-list">
      {images.map((item, index) => (
        <div key={index} className="thumbnail" onClick={()=>handleImage(item)}>
          <img src={item.image} alt={`thumbnail-${index}`} />
        </div>
      ))}
    </div>
  );
};

const ImageViewers = () => {
  const imageList = [
    { image: Forest, colors: "linear-gradient(-20deg, rgba(12, 227, 192, 0.25) 0%, rgb(19 65 19) 100%)" },
    { image: Night, colors: "linear-gradient(-20deg, rgb(53 93 123) 0%, #032f48e8 150%)" },
    { image: Boy, colors: "linear-gradient(-20deg, rgb(6 18 25) 0%, rgb(4 33 48 / 69%) 150%)" },
    { image: Rain, colors: "linear-gradient(-20deg, rgb(6, 18, 25) 0%, rgb(133 94 51) 100%)" },
    { image: Forests, colors: "linear-gradient(-20deg, rgb(108 103 73) 0%, rgb(25 28 5) 100%)" },
    { image: WonderNight, colors: "linear-gradient(-20deg, #285761 0%, #cb657b 100%)" },
    { image: Hut, colors: "linear-gradient(-20deg, rgb(0 18 32) 0%, rgb(59 92 97) 100%)" },
    { image: Mountain, colors: "linear-gradient(-20deg, rgb(13 26 34) 0%, rgb(79 122 108) 100%)" },
    { image: Nature, colors: "linear-gradient(-20deg, rgb(118 63 63 / 62%) 0%, rgb(16 119 180) 100%)"},
    { image: Nature3D, colors: "linear-gradient(-20deg, rgb(50 13 18) 0%, rgb(59 73 13) 100%)" },
    { image: Natures, colors: "linear-gradient(-20deg, rgb(118 63 63 / 62%) 0%, rgb(16 119 180) 100%)" },
    { image: Wallpaper, colors: "linear-gradient(-20deg, rgb(0 18 32) 0%, rgb(59 92 97) 100%)" },
    { image: Forest, colors: "linear-gradient(-20deg, rgba(12, 227, 192, 0.25) 0%, rgb(19 65 19) 100%)" },
    { image: Hut, colors: "linear-gradient(-20deg, rgb(0 18 32) 0%, rgb(59 92 97) 100%)" },
    { image: Rain, colors: "linear-gradient(-20deg, rgb(6, 18, 25) 0%, rgb(133 94 51) 100%)" },
    { image: WonderNight, colors: "linear-gradient(-20deg, #285761 0%, #cb657b 100%)" },
  ];

  const [currentImage, setCurrentImage] = useState(imageList);
     const handleImage = (e)=> {
      // console.log(e,"e+++")
      setCurrentImage(e);
     }
  return (
    <div className="app" style={{ background: currentImage.colors || currentImage[0].colors }}>
      <ImageViewer currentImage={currentImage} /> {/* Corrected component call */}
      <ThumbnailList handleImage={handleImage}  images={imageList}  />
    </div>
  );
};

export default ImageViewers; // Corrected export
