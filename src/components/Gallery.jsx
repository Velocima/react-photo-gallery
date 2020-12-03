import React, { useEffect, useState } from 'react';
import wallpaper1 from '../images/wallpaper1.jpg';
import wallpaper2 from '../images/wallpaper2.jpg';
import wallpaper3 from '../images/wallpaper3.jpg';
import wallpaper4 from '../images/wallpaper4.jpg';
import wallpaper5 from '../images/wallpaper5.jpg';
import wallpaper6 from '../images/wallpaper6.jpg';
import wallpaper7 from '../images/wallpaper7.jpg';
import wallpaper8 from '../images/wallpaper8.jpg';
import wallpaper9 from '../images/wallpaper9.jpg';
import wallpaper10 from '../images/wallpaper10.jpg';
import wallpaper11 from '../images/wallpaper11.jpg';
import wallpaper12 from '../images/wallpaper12.jpg';

export default function Gallery() {
	const images = [
		wallpaper1,
		wallpaper2,
		wallpaper3,
		wallpaper4,
		wallpaper5,
		wallpaper6,
		wallpaper7,
		wallpaper8,
		wallpaper9,
		wallpaper10,
		wallpaper11,
		wallpaper12,
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isCarouselPlaying, setisCarouselPlaying] = useState(true);

	useEffect(() => {
		const intervalID = setTimeout(() => {
			if (!isCarouselPlaying) return;
			if (currentImageIndex !== images.length - 1) {
				setCurrentImageIndex((prevState) => prevState + 1);
			} else {
				setCurrentImageIndex(0);
			}
		}, 3000);
		return () => {
			clearInterval(intervalID);
		};
	}, [currentImageIndex, isCarouselPlaying, images.length]);
	return (
		<>
			<h1
				style={{
					height: '10vh',
				}}
			>
				{isCarouselPlaying ? 'Playing' : 'Paused'}
			</h1>
			<img
				id={currentImageIndex}
				src={images[currentImageIndex]}
				alt=''
				style={{
					height: '90vh',
					width: '100%',
					objectFit: 'cover',
				}}
				onClick={() => {
					setisCarouselPlaying((prevState) => !prevState);
				}}
			/>
		</>
	);
}
