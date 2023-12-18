import "../styles/ArtStyles/Art.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "./artwork/renew.jpg";
import image2 from "./artwork/eye.jpg";
import image3 from "./artwork/thoughts.jpg";
import image4 from "./artwork/portrait.png";

const slides = [
    image1, image2, image3, image4
];

const Art = () => {
  return (
    <>  
        <h3>Drag across to see some more art --> </h3>
        <div className="art-container">
            <Swiper spaceBetween={10} slidesPerView={3} loop>
                {slides.map((slide) => (
                    <SwiperSlide>
                    <img src={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
  );
};

export default Art;