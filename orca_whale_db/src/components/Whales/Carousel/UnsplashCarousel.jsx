/* eslint-disable react/prop-types */
import "./Carousel.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import { useState } from "react";

function UnsplashCarousel ({ data }) {
    const [slide, setSlide] = useState(0);
    const [direction, setDirection] = useState(true); 

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
        setDirection(true);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1: slide - 1);
        setDirection(false);
    }

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left z-[2]" onClick={prevSlide} />
            {data.map((item, idx) => {
                    return <img src={item} alt="img not found" key={idx} className={slide === idx ? ( direction===true ? "slide-right": "slide-left") : "slide-hidden"}/>
            })}
            <BsArrowRightCircleFill className="arrow arrow-right z-[2]" onClick={nextSlide} />
            <span className="indicators">
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    );
}

export default UnsplashCarousel