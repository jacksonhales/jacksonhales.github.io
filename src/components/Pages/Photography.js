import React from "react";
import Carousel from "../Carousel/Carousel";

export default function Photography() {
  return (
    <div className="min-h-screen">
      <div className="bg-neutral grid grid-cols-1 content-center rounded-box p-4">
        <h1 className="text-center text-4xl uppercase tracking-wider m-4 text-emerald-500">
          Photography
        </h1>
        <div className="mx-auto">
          <Carousel
            title="Landscape"
            items={[
              "https://picsum.photos/id/503/256/144",
              "https://picsum.photos/id/504/256/144",
              "https://picsum.photos/id/503/256/144",
              "https://picsum.photos/id/504/256/144",
              "https://picsum.photos/id/503/256/144",
              "https://picsum.photos/id/504/256/144",
            ]}
          />
        </div>
        <div class="divider"></div>
        <div className="mx-auto">
          <Carousel
            title="Macro"
            items={[
              "https://picsum.photos/id/503/256/144",
              "https://picsum.photos/id/504/256/144",
              "https://picsum.photos/id/503/256/144",
              "https://picsum.photos/id/504/256/144",
              "https://picsum.photos/id/503/256/144",
              "https://picsum.photos/id/504/256/144",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
