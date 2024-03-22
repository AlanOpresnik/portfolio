import React from "react";
import "./carousel.css";
import CarouselItem from "./CarouselItem";

export const cardDetails = {
    0: {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        title: "React"
    },

    1: {
        imgUrl: "https://static-00.iconduck.com/assets.00/flutter-icon-1651x2048-ojswpayr.png",
        title: "Flutter"
    },

    2: {
        imgUrl: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
        title: "Next.js"
    },

    3: {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png",
        title: "Vitejs"
    },

    4: {
        imgUrl: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        title: "Node js"
    },

    5: {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        title: "JavaScript"
    },

    6: {
        imgUrl: "https://download.logo.wine/logo/MongoDB/MongoDB-Logo.wine.png",
        title: "Mongo DB",
    },
    7: {
        imgUrl: "https://static-00.iconduck.com/assets.00/dart-icon-2042x2048-775u9j9x.png",
        title: "Dart",
    },
    8: {
        imgUrl: "https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png",
        title: "CSS",
    },
    9: {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/1200px-Icons8_flat_linux.svg.png",
        title: "Linux",
    },
    10: {
        imgUrl: "https://i0.wp.com/www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png?fit=600%2C400&ssl=1",
        title: "MySql",
    },

    11: {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1024px-Slack_icon_2019.svg.png",
        title: "Slack",
    },
    12: {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/800px-Notion-logo.svg.png",
        title: "Notion",
    },

}

export default function Carousel() {
    return (
        <div className="carousel-container w-full h-[60px]  md:h-[100px] p-1 flex justify-center top-[245px] items-center  bg-transparent absolute">
            <div className="carousel-track w-[150%]">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
            </div>
        </div>
    );
}