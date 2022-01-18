import React from "react";
// import Carousel from "../Carousel/Carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "../Carousel/CarouselItem";

export default function Photography() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 856 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 856, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="h=full w-full">
      <div className="bg-neutral rounded-box lg:p-8 lg:w-full">
        <div className="bg-base-300 border-2 border-emerald-500 mx-auto pt-4 lg:px-15 lg:pb-8 rounded-box">
          <h1 className="text-center text-4xl uppercase tracking-wider py-4 text-emerald-500">
            Photography
          </h1>
          <p className="text-center max-w-xl text-2xs md:text-base px-4 mx-auto">
            I'm an amateur nature photography enthusiast! I take nature photos
            with my Google Pixel 4 and take the macro photos using the Moment
            Macro 10x Lens.
          </p>
          <div className="flex flex-col">
            <h2 className="text-2xl ml-2 mb-2">Landscape</h2>
            <Carousel responsive={responsive}>
              <CarouselItem src="https://i.imgur.com/UJTZPfR.jpg" />
              <CarouselItem src="https://i.imgur.com/UqmJI0M.jpg" />
              <CarouselItem src="https://i.imgur.com/ln1teJY.jpg" />
              <CarouselItem src="https://i.imgur.com/VqJYdoW.jpg" />
              <CarouselItem src="https://i.imgur.com/NnKn9uf.jpg" />
              <CarouselItem src="https://i.imgur.com/Co37S4P.jpg" />
              <CarouselItem src="https://i.imgur.com/TUf5LZw.jpg" />
              <CarouselItem src="https://i.imgur.com/hnoypWB.jpg" />
              <CarouselItem src="https://i.imgur.com/Pk5IyCu.jpg" />
            </Carousel>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col">
            <h2 className="text-2xl ml-2 mb-2">Macro</h2>
            <Carousel responsive={responsive}>
              <CarouselItem src="https://i.imgur.com/gyTUtoO.jpg" />
              <CarouselItem src="https://i.imgur.com/nowN5yq.jpg" />
              <CarouselItem src="https://i.imgur.com/WEqCEtp.jpg" />
              <CarouselItem src="https://i.imgur.com/WBHGmN7.jpg" />
              <CarouselItem src="https://i.imgur.com/TxX7KxM.jpg" />
              <CarouselItem src="https://i.imgur.com/OFHSQp3.jpg" />
              <CarouselItem src="https://i.imgur.com/1gidJiH.jpg" />
              <CarouselItem src="https://i.imgur.com/EH16oPZ.jpg" />
              <CarouselItem src="https://i.imgur.com/i45HXoA.jpg" />
              <CarouselItem src="https://i.imgur.com/BBzyUxi.jpg" />
              <CarouselItem src="https://i.imgur.com/qxwIanj.jpg" />
              <CarouselItem src="https://i.imgur.com/ALtTifw.jpg" />
              <CarouselItem src="https://i.imgur.com/PAg8IdI.jpg" />
              <CarouselItem src="https://i.imgur.com/Q4F0CjH.jpg" />
              <CarouselItem src="https://i.imgur.com/cVCML0I.jpg" />
              <CarouselItem src="https://i.imgur.com/aycztvR.jpg" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
