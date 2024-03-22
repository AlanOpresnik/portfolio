import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
    return (
        <div className="carousel-card bg-transparent h-[50px] min-w-[50px] md:min-w-[90px] md:max-w-[90px]">
            <p className="text-xs md:text-base">{imgTitle}</p>
            <img className="object-contain" src={imgUrl} alt={imgTitle}></img>
        </div>
    );
}