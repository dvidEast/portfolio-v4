import "../styles/ArtStyles/Art.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "./artwork/renew.jpg";
import image2 from "./artwork/eye.jpg";
import image3 from "./artwork/box.jpg";
import image4 from "./artwork/beard.jpg";
import image5 from "./artwork/thoughts.jpg";
import image6 from "./artwork/portrait.png";
// import image7 from "./artwork/neural_network.jpg";

const slides = [
    image4, image1, image3, image2, image5, image6
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
