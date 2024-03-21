import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
    return (
        <div className="carousel-card bg-transparent h-[50px] min-w-[79px] md:max-w-[90px]">
            <p className="text-xs md:text-base">{imgTitle}</p>
            <img src={imgUrl} alt={imgTitle}></img>
        </div>
    );
}