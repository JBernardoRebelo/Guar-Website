/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useState } from "react";

import { _SliderStyles } from "../Style";


export default function GameplaySlider({slides}){
    
    const[currentIndex, setCurrentIndex] = useState(0);
    
    // Inline
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].image})`
    }
    
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }

    const dotStyles = {
        nargin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
        fontWeight: 'bolder'
    }

    // Logic
    const goToPrevious = () => {

        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    }

    const goToNext = () => {

        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    } 

    return(
        <_SliderStyles>
            {/* Arrows */}
            <div className="leftArrowStyles" onClick={goToPrevious}>◀</div>
            <div className="rightArrowStyles" onClick={goToNext}>▶</div>
            
            {/* Title */}
            <h3>{slides[currentIndex].title}</h3>

            {/* Images */}
            <div style={slideStyles}></div>

            {/* Description */}
            <p>{slides[currentIndex].description}</p>

            {/* Selectors and logic */}
            <div className="dotsContainerStyles">
                {slides.map((slide, slideIndex) => (
                    <div 
                        className="dotStyles"
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}>
                             . 
                    </div>
                )
                )}
            </div>
        </_SliderStyles>
    )
}