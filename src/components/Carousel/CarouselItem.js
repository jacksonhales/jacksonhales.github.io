import React from "react";

export default function CarouselItem(props) {
  return (
    <div className="carousel-item">
      <img
        src={props.src}
        className="rounded-box w-96 h-60 object-cover"
        alt="Carousel item"
      />
    </div>
  );
}
