import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Ebook } from './front-page-carousel/Ebook';
import { FollowUs } from './front-page-carousel/FollowUs';
import { Franqueado } from './front-page-carousel/Franqueado';
import { FreeCourse } from './front-page-carousel/FreeCourse';
import { News } from './front-page-carousel/News';
import { SmartBusiness } from './front-page-carousel/SmartBusiness';
import { SmartAcademy } from './front-page-carousel/SmartAcademy';
import { MobilePage } from './front-page-carousel/MobilePage';

import personagem from '../assets/personagem.png';
import livro from '../assets/book_-_livro.png';
import celular from '../assets/celular.png';
import franquia from '../assets/franquia.png';
import news from '../assets/news.png';
import academy from '../assets/SmartAcademy.png';
import business from '../assets/business.png';

export default function Tabs2() {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	function getWindowSize() {
		const { innerWidth: width, innerHeight: height } = window;
		return { width, height };
	}

	const [selected, setSelected] = useState(0);

	return (
		<Carousel
			emulateTouch={true}
			useKeyboardArrows={true}
			showArrows={true}
			showThumbs={false}
			transitionTime={2000}
			swipeScrollTolerance={150}
			autoPlay={false}
			interval={6500}
			stopOnHover={false}
			showStatus={false}
			renderArrowNext={(clickHandler) => {
				const defStyle = {
					position: 'absolute',
					zIndex: '15',
					bottom: '3%',
					color: '#91a3ad',
					fontSize: '0.8rem',
				};
				const style = { ...defStyle, bottom: '8%' };
				return (
					<button
						style={windowSize.width > 768 ? defStyle : style}
						onClick={clickHandler}
						className="sm:right-1/4 right-10"
					>
						PRÓXIMO
					</button>
				);
			}}
			renderArrowPrev={(clickHandler) => {
				const defStyle = {
					zIndex: '15',
					position: 'absolute',
					bottom: '3%',
					color: '#91a3ad',
					fontSize: '0.8rem',
				};
				const style = { ...defStyle, bottom: '8%' };
				return (
					<button
						style={windowSize.width > 768 ? defStyle : style}
						onClick={clickHandler}
						className="sm:left-1/4 left-10"
					>
						ANTERIOR
					</button>
				);
			}}
			renderIndicator={(onClickHandler, isSelected, index) => {
				const defStyle = {
					marginLeft: '15px',
					height: '20px',
					width: '20px',
					backgroundPosition: 'center',
					backgroundSize: 'contain',
					marginBottom: '1em',
				};
				const style = isSelected
					? { ...defStyle, backgroundImage: "url('/DualRing.svg')" }
					: { ...defStyle, backgroundImage: "url('/bolinha.png')" };
				return (
					<button
						style={style}
						onClick={onClickHandler}
						onKeyDown={onClickHandler}
						key={index}
						className="invisible sm:visible"
					></button>
				);
			}}
			infiniteLoop={true}
			onChange={(current) => {
				setSelected(69);
				setTimeout(() => {
					setSelected(current);
				}, 1300);
			}}
			className="max-w-tela inline-flex min-w-0"
		>
			<div className="bg-bg1 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
				<Transition
					show={selected === 0}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="sm:bg-elem1 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
						{windowSize.width > 768 ? (
							<Ebook />
						) : (
							<MobilePage
								image={livro}
								text="BAIXE NOSSOS EBOOKS!"
							/>
						)}
					</div>
				</Transition>
			</div>

			<div className="bg-bg2 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
				<Transition
					show={selected === 1}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="sm:bg-elem2 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
						{windowSize.width > 768 ? (
							<Franqueado />
						) : (
							<MobilePage
								image={franquia}
								text="SEJA NOSSO FRANQUEADO"
							/>
						)}
					</div>
				</Transition>
			</div>

			<div className="bg-bg3 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
				<Transition
					show={selected === 2}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="bg-elem3 bg-cover bg-no-repeat sm:bg-center max-w-tela h-screen w-screen">
						{windowSize.width > 768 ? (
							<FreeCourse />
						) : (
							<MobilePage
								image={personagem}
								text="CURSOS GRATUITOS"
							/>
						)}
					</div>
				</Transition>
			</div>

			<div className="bg-bg4 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
				<Transition
					show={selected === 3}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="sm:bg-elem4 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
						{windowSize.width > 768 ? (
							<News />
						) : (
							<MobilePage image={news} text="NOVIDADES AQUI" />
						)}
					</div>
				</Transition>
			</div>

			<div className="bg-bg5 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
				<Transition
					show={selected === 4}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="sm:bg-elem5 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
						{windowSize.width > 768 ? (
							<SmartBusiness />
						) : (
							<MobilePage
								image={business}
								text="SMART BUSINESS"
							/>
						)}
					</div>
				</Transition>
			</div>

			<div className="bg-bg6 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
				<Transition
					show={selected === 5}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="sm:bg-elem6 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
						{windowSize.width > 768 ? (
							<SmartAcademy />
						) : (
							<MobilePage image={academy} text="SMART ACADEMY" />
						)}
					</div>
				</Transition>
			</div>

			<div className="bg-bg7 max-w-tela h-screen w-screen bg-no-repeat bg-cover bg-center">
				<Transition
					show={selected === 6}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="sm:bg-elem7 bg-cover bg-no-repeat max-w-tela h-screen w-screen">
						{windowSize.width > 768 ? (
							<FollowUs />
						) : (
							<MobilePage
								image={celular}
								text="Siga nossas redes sociais"
							/>
						)}
					</div>
				</Transition>
			</div>
		</Carousel>
	);
}
