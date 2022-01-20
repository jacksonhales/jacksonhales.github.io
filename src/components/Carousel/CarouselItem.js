import React from "react";

export default function CarouselItem(props) {
  return (
    <div>
      <img src={props.src} alt="Thumbnail" />
    </div>
  );
}
