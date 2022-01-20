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
        <div className="bg-base-300 border-2 border-emerald-500 mx-auto py-8 lg:px-15 rounded-box">
          <h1 className="text-center text-4xl uppercase tracking-wider pb-4 text-emerald-500">
            Photography
          </h1>
          <p className="text-center max-w-xl text-2xs md:text-base px-4 mx-auto">
            I'm an amateur nature photography enthusiast! I take nature photos
            with my Google Pixel 4 and take the macro photos using the Moment
            Macro 10x Lens.
          </p>
          <div className="flex flex-col px-8">
            <h2 className="text-2xl ml-2 mb-2">Landscape</h2>
            <Carousel responsive={responsive}>
              <CarouselItem src="https://i.imgur.com/UJTZPfRl.jpg" />
              <CarouselItem src="https://i.imgur.com/UqmJI0Ml.jpg" />
              <CarouselItem src="https://i.imgur.com/ln1teJYl.jpg" />
              <CarouselItem src="https://i.imgur.com/VqJYdoWl.jpg" />
              <CarouselItem src="https://i.imgur.com/NnKn9ufl.jpg" />
              <CarouselItem src="https://i.imgur.com/Co37S4Pl.jpg" />
              <CarouselItem src="https://i.imgur.com/TUf5LZwl.jpg" />
              <CarouselItem src="https://i.imgur.com/hnoypWBl.jpg" />
              <CarouselItem src="https://i.imgur.com/Pk5IyCul.jpg" />
            </Carousel>
          </div>
          <div className="divider pl-10 pr-10 lg:pr-20 pt-10"></div>
          <div className="flex flex-col px-8">
            <h2 className="text-2xl ml-2 mb-2">Macro</h2>
            <Carousel responsive={responsive}>
              <CarouselItem src="https://i.imgur.com/gyTUtoOl.jpg" />
              <CarouselItem src="https://i.imgur.com/nowN5yql.jpg" />
              <CarouselItem src="https://i.imgur.com/WEqCEtpl.jpg" />
              <CarouselItem src="https://i.imgur.com/WBHGmN7l.jpg" />
              <CarouselItem src="https://i.imgur.com/TxX7KxMl.jpg" />
              <CarouselItem src="https://i.imgur.com/OFHSQp3l.jpg" />
              <CarouselItem src="https://i.imgur.com/1gidJiHl.jpg" />
              <CarouselItem src="https://i.imgur.com/EH16oPZl.jpg" />
              <CarouselItem src="https://i.imgur.com/i45HXoAl.jpg" />
              <CarouselItem src="https://i.imgur.com/BBzyUxil.jpg" />
              <CarouselItem src="https://i.imgur.com/qxwIanjl.jpg" />
              <CarouselItem src="https://i.imgur.com/ALtTifwl.jpg" />
              <CarouselItem src="https://i.imgur.com/PAg8IdIl.jpg" />
              <CarouselItem src="https://i.imgur.com/Q4F0CjHl.jpg" />
              <CarouselItem src="https://i.imgur.com/cVCML0Il.jpg" />
              <CarouselItem src="https://i.imgur.com/aycztvRl.jpg" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
