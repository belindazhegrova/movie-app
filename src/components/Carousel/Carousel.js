import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Carousel1 = () => {
  const data = [
    {
      img: "https://images2.alphacoders.com/280/thumb-1920-280472.jpg",
      title: "Amazing Spider Man",
    },
    {
      img: "https://wallpaperaccess.com/full/1097130.jpg",
      title: "Narcos",
    },
  ];
  return (
    <Carousel>
      {data.map((i) => {
        return (
          <div style={{ height: 400 }}>
            <img src={i?.img} style={{ objectFit: "cover" }} />
            <p className="legend" style={{ fontSize: 20, fontWeight: "bold" }}>
              {i?.title}
            </p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Carousel1;
