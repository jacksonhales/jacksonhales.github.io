import React from "react";

export default function CarouselItem(props) {
  return (
    <img src={props.src} className="rounded-box max-h-80" alt="Carousel item" />
  );
}
