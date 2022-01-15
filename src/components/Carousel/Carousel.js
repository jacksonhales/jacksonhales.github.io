import React from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel(props) {
  return (
    <>
      <h4 className="text-xl uppercase ml-4">{props.title}</h4>
      <div className="p-4 space-x-4 carousel carousel-end bg-neutral rounded-box">
        {props.items.map((item) => {
          return <CarouselItem key={item} src={item} />;
        })}
      </div>
    </>
  );
}
