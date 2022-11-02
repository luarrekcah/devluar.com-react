import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partners = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const data = [
    {
        src: 'https://cdn.glitch.global/55ea3463-31d7-4807-9eee-98d4f54e9d89/genios-art.png?v=1650419087328',
        alt: 'Gênios logo'
    },
    {
        src: 'https://cdn.glitch.global/55ea3463-31d7-4807-9eee-98d4f54e9d89/dwalt.png?v=1650419087329',
        alt: 'D Walt logo'
    },
    {
        src: 'https://cdn.glitch.global/55ea3463-31d7-4807-9eee-98d4f54e9d89/raifas-logo.png?v=1652304353530',
        alt: 'Ráifas logo'
    },
    {
        src: 'https://cdn.glitch.global/55ea3463-31d7-4807-9eee-98d4f54e9d89/inovart.png?v=1650419087329',
        alt: 'Inovart logo'
    }
  ];

  return (
    <div>
      <Carousel 
      swipeable={false}
      draggable={false}
      responsive={responsive} 
      autoPlay={true} infinite  
      showDots={false} 
      autoPlaySpeed={1500}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {data.map((i, index) => {
          return (
            <div key={index}>
                <img style={{width: 150}} src={i.src} alt={i.alt}/>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Partners;
