import React from "react";

export default function CarouselItem(props) {
  return (
    <div className="mx-8">
      <img className="rounded-box" src={props.src} alt="Thumbnail" />
    </div>
  );
}
