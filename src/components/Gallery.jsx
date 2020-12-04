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
	const [isImageChanging, setIsImageChanging] = useState({
		isChanging: false,
		direction: 'right',
	});

	const getNextImageIndex = () => {
		let index = currentImageIndex + 1;
		if (index >= images.length) {
			return 0;
		}
		return index;
	};
	const getPreviousImageIndex = () => {
		let index = currentImageIndex - 1;
		if (index < 0) {
			return images.length - 1;
		}
		return index;
	};

	const handleNextImageClick = () => {
		if (isImageChanging.isChanging) return;
		setIsImageChanging({ isChanging: true, direction: 'right' });
		setTimeout(() => {
			setCurrentImageIndex((prevState) =>
				prevState === images.length - 1 ? 0 : prevState + 1
			);
			setIsImageChanging((prevState) => {
				return { ...prevState, isChanging: false };
			});
		}, 500);
	};

	const handlePreviousImageClick = () => {
		if (isImageChanging.isChanging) return;
		setIsImageChanging({ isChanging: true, direction: 'left' });
		const transitionToNextImage = () => {
			setCurrentImageIndex((prevState) =>
				prevState === 0 ? images.length - 1 : prevState - 1
			);
			setIsImageChanging((prevState) => {
				return { ...prevState, isChanging: false };
			});
		};
		setTimeout(transitionToNextImage, 500);
	};

	const buttonStyle = {
		fontSize: '30px',
		padding: '10px',
		borderRadius: '5px',
	};

	const imageStyle = {
		height: '50vh',
		width: '50vh',
		objectFit: 'cover',
		transition: isImageChanging.isChanging ? '0.5s' : 'none',
		transform: !isImageChanging.isChanging
			? 'translateX(-100%)'
			: isImageChanging.direction === 'right'
			? 'translateX(-200%)'
			: 'translateX(0)',
	};
	return (
		<section
			style={{
				display: 'grid',
				placeItems: 'center',
			}}
		>
			<h1
				onClick={() => {
					setisCarouselPlaying((prevState) => !prevState);
				}}
			>
				{isCarouselPlaying ? 'Playing' : 'Paused'}
			</h1>
			<div
				className='overflow-container'
				style={{ overflow: 'hidden', display: 'flex', height: '50vh', width: '50vh' }}
			>
				<img
					id={getPreviousImageIndex()}
					src={images[getPreviousImageIndex()]}
					alt=''
					style={imageStyle}
				/>
				<img
					id={currentImageIndex}
					src={images[currentImageIndex]}
					alt=''
					style={imageStyle}
				/>
				<img
					id={getNextImageIndex()}
					src={images[getNextImageIndex()]}
					alt=''
					style={imageStyle}
				/>
			</div>
			<div className='buttons'>
				<button style={buttonStyle} onClick={handlePreviousImageClick}>
					left
				</button>
				<button style={buttonStyle} onClick={handleNextImageClick}>
					right
				</button>
			</div>
		</section>
	);
}
