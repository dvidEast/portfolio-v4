import '../styles/ArtStyles/Art.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

import image1 from "./artwork/renew.jpg";
import image2 from "./artwork/eye.jpg";
import image3 from "./artwork/thoughts.jpg";
import image4 from "./artwork/portrait.png";

const slides = [
    {
        // title: "renew",
        subtitle: "",
        image: image1,
    },
    {
        // title: "da eye"
        subtitle: "",
        image: image2,
    },
    {
        // title: "thoughts"
        subtitle: "",
        image: image3,
    },
    {
        // title: "Let's Go"
        subtitle: "me?",
        // control: <button>Sign Up</button>,
        image: image4,
    }
];
  

const Art = () => (
    <div className="card">
        <ReactCarousel
            className="react-carousel"
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            swipeable={true}
            emulateTouch={true}
        >
        {slides.map((slide) => (
            <div key={slide.title} className="react-carousel-slide">
                <div className="image-wrapper">
                    <img src={slide.image} />
                </div>
                <h2>{slide.title}</h2>
                <h3>{slide.subtitle}</h3>
                {slide.control}
            </div>
        ))}
      </ReactCarousel>
    </div>
)

export default Art;