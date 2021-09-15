import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative w-8/12 h-[600px] mx-auto mt-20 ">
      <div className="absolute w-full h-80 bg-gradient-to-t shadow-lg  from-gray-100 to-transparent top-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            className="h-80 object-cover"
            width={800}
            height={600}
            loading="lazy"
            src="https://sportal.betxchange.com/wp-content/uploads/2016/01/sports-betting.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-80 object-cover"
            width={800}
            height={600}
            loading="lazy"
            src="https://images.daznservices.com/di/library/Goal_Singapore/27/ca/messi-16-pureagility_di4z9ye80geq14akf5v7g3oog.jpg?t=-1226312218"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-80 object-cover"
            loading="lazy"
            src="https://shortyawards.imgix.net/entries/ooE_jD_messi_fastorfail_screenshot_film_20.jpg?auto=compress&crop=faces%2Ccenter&fit=crop&h=630&q=90&w=1200&s=2abfc5b5a24ac9ba5ca1353ed5aa1f1c"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
