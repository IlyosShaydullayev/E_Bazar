import React,{ useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const images = [
  "./images/hero/carousel-1.png",
  "./images/hero/carousel-2.png",
  "./images/hero/carousel-3.png",
];

function Hero() {
  const plugin = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      <Carousel
        className="w-full z-20"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img src={image} className="w-full" alt="carousel" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}

export default Hero;
