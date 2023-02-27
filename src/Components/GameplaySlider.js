/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";

import { _SliderStyles } from "../Style";

const slidesContainerStyles = {
	display: "flex",
	height: "100%",
	transition: "transform ease-out 0.7s",
};

const slidesContainerOverFlowStyles = {
	overflow: "hidden",
	height: "100%",
};

export default function GameplaySlider({ slides, parentWidth }) {
	const timerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Inline
	const getSlidesWithBackground = (slideIndex) => ({
		height: "100%",
		borderRadius: "10px",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundImage: `url(${slides[slideIndex].image})`,
		width: `${parentWidth}px`,
	});

	const getSlidesContainerStylesWithWidth = () => ({
		...slidesContainerStyles,
		width: parentWidth * slides.length,
		transform: `translateX(${-(currentIndex * parentWidth)}px)`,
	});

	// Logic
	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

		setCurrentIndex(newIndex);
	};

	const goToNext = useCallback(() => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;

		setCurrentIndex(newIndex);
	}, [currentIndex, slides]);

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	// Auto Slide
	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			goToNext();
		}, 5000);

		return () => clearTimeout(timerRef.current);
	}, [goToNext]);

	return (
		<_SliderStyles>
			{/* Arrows */}
			<div className="leftArrowStyles" onClick={goToPrevious}>
				◀
			</div>
			<div className="rightArrowStyles" onClick={goToNext}>
				▶
			</div>

			{/* Title */}
			<h3>{slides[currentIndex].title}</h3>

			{/* Images */}
			<div style={slidesContainerOverFlowStyles}>
				<div style={getSlidesContainerStylesWithWidth()}>
					{slides.map((_, slideIndex) => (
						<div
							key={slideIndex}
							style={getSlidesWithBackground(slideIndex)}
						></div>
					))}
				</div>
			</div>
			{/* <div style={slideStyles}></div> */}

			{/* Description */}
			<p className="description">{slides[currentIndex].description}</p>

			{/* Selectors and logic */}
			{/* Fazer current dot */}
			<div className="dotsContainerStyles">
				{slides.map((slide, slideIndex) => (
					<div
						className="dotStyles"
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
					>
						.
					</div>
				))}
			</div>
		</_SliderStyles>
	);
}
