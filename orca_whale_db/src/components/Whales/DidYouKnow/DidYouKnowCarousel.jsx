/* eslint-disable react/prop-types */
import "./DidYouKnowCarousel.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import { useState } from "react";
import DidYouKnow from "./DidYouKnow"

function DidYouKnowCarousel ({ data }) {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1: slide - 1);
    }

    return (
        <div className="dyk-carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
            {data.map((item, idx) => {
                return <DidYouKnow fact={item.fact} img={item.img} key={idx} className={slide === idx ? "dyk-slide" : "slide-hidden"} />
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
            <span className="indicators">
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    );
}

export default DidYouKnowCarousel