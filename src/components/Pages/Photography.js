import { useState, React } from "react";
// import Carousel from "../Carousel/Carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "../Carousel/CarouselItem";
import LightBox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function Photography() {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentImageURL, setCurrentImageURL] = useState("");

  function setUpLightBox(URL) {
    setCurrentImageURL(URL);
    setLightBoxOpen(true);
  }

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
          {lightBoxOpen === true ? (
            <span>
              {/* TO-DO
                - Wrap each image in button, on button click run setUpLightBox function which takes string for image URL
                - setUpLightBox sets lightBoxOpen to true and sets currentImage to passed in image URL
             */}
              <LightBox
                image={currentImageURL}
                allowRotate={false}
                onClose={() => {
                  setLightBoxOpen(false);
                }}
              />
            </span>
          ) : (
            <span></span>
          )}
          <div className="flex flex-col px-8">
            <h2 className="text-2xl ml-8 my-2">Landscape</h2>
            <Carousel responsive={responsive}>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/UJTZPfR.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/UJTZPfRl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/UqmJI0M.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/UqmJI0Ml.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/ln1teJY.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/ln1teJYl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/VqJYdoW.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/VqJYdoWl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/NnKn9uf.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/NnKn9ufl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/Co37S4P.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/Co37S4Pl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/TUf5LZw.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/TUf5LZwl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/hnoypWB.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/hnoypWBl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/Pk5IyCu.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/Pk5IyCul.jpg" />
              </button>
            </Carousel>
          </div>
          <div className="divider pl-16 pr-16 lg:pr-16 pt-8"></div>
          <div className="flex flex-col px-8">
            <h2 className="text-2xl ml-8 mb-2">Macro</h2>
            <Carousel responsive={responsive}>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/gyTUtoO.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/gyTUtoOl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/nowN5yq.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/nowN5yql.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/WEqCEtp.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/WEqCEtpl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/WBHGmN7.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/WBHGmN7l.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/TxX7KxM.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/TxX7KxMl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/OFHSQp3.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/OFHSQp3l.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/1gidJiH.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/1gidJiHl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/EH16oPZ.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/EH16oPZl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/i45HXoA.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/i45HXoAl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/BBzyUxi.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/BBzyUxil.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/qxwIanj.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/qxwIanjl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/ALtTifw.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/ALtTifwl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/PAg8IdI.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/PAg8IdIl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/Q4F0CjH.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/Q4F0CjHl.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/cVCML0I.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/cVCML0Il.jpg" />
              </button>
              <button
                onClick={() => setUpLightBox("https://i.imgur.com/aycztvR.jpg")}
              >
                <CarouselItem src="https://i.imgur.com/aycztvRl.jpg" />
              </button>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
