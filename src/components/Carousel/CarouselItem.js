import React from "react";

export default function CarouselItem(props) {
  return (
    <div className="carousel-item">
      <img src={props.src} className="rounded-box" alt="Carousel item" />
    </div>
  );
}
