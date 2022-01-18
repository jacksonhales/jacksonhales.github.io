import React from "react";
import Carousel from "../Carousel/Carousel";

export default function Photography() {
  return (
    <div className="min-h-screen">
      <div className="bg-neutral grid grid-cols-1 content-center rounded-box p-4">
        <h1 className="text-center text-4xl uppercase tracking-wider m-4 text-emerald-500">
          Photography
        </h1>
        <p className="text-center">
          I'm an amateur nature photography enthusiast! I take nature photos
          with my Google Pixel 4 and take the macro photos using the Moment
          Macro 10x Lens.
        </p>
        <div className="mx-auto">
          <Carousel
            title="Landscape"
            items={[
              "https://i.imgur.com/bNGHiRt.jpg",
              "https://i.imgur.com/UJTZPfR.jpg",
              "https://i.imgur.com/UqmJI0M.jpg",
              "https://i.imgur.com/ln1teJY.jpg",
              "https://i.imgur.com/VqJYdoW.jpg",
              "https://i.imgur.com/NnKn9uf.jpg",
              "https://i.imgur.com/Co37S4P.jpg",
              "https://i.imgur.com/TUf5LZw.jpg",
              "https://i.imgur.com/hnoypWB.jpg",
              "https://i.imgur.com/Pk5IyCu.jpg",
            ]}
          />
        </div>
        <div class="divider"></div>
        <div className="mx-auto">
          <Carousel
            title="Macro"
            items={[
              "https://i.imgur.com/gyTUtoO.jpg",
              "https://i.imgur.com/nowN5yq.jpg",
              "https://i.imgur.com/WEqCEtp.jpg",
              "https://i.imgur.com/WBHGmN7.jpg",
              "https://i.imgur.com/TxX7KxM.jpg",
              "https://i.imgur.com/OFHSQp3.jpg",
              "https://i.imgur.com/1gidJiH.jpg",
              "https://i.imgur.com/EH16oPZ.jpg",
              "https://i.imgur.com/i45HXoA.jpg",
              "https://i.imgur.com/BBzyUxi.jpg",
              "https://i.imgur.com/qxwIanj.jpg",
              "https://i.imgur.com/ALtTifw.jpg",
              "https://i.imgur.com/PAg8IdI.jpg",
              "https://i.imgur.com/Q4F0CjH.jpg",
              "https://i.imgur.com/cVCML0I.jpg",
              "https://i.imgur.com/aycztvR.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
