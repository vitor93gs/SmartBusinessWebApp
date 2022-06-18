import Image from 'next/dist/client/image';
import texto from '../../assets/Banner1_texto.png';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export function Ebook() {
	const [showLuz, setShowLuz] = useState(false);

	useEffect(() => {
		AOS.init();
		setTimeout(() => {
			setShowLuz(true);
		}, 2000);
	}, []);

	return (
		<div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen px-36 py-7">
			<div className="flex flex-col items-left w-1/2 text-left mb-10 justify-start ml-24">
				<h1 className="text-gray1 w-full text-5xl mb-12">
					<Typewriter
						options={{
							delay: 30,
							cursor: '',
							loop: false,
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(1000)
								.typeString('BAIXE NOSSO')
								.typeString(
									' <strong style="color:#D6A84C">EBOOK!</strong>'
								)
								.start();
						}}
					/>
				</h1>
				<div
					className="mt-12"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<Image src={texto} alt="texto do banner" />
				</div>

				<div
					className="mt-12"
					data-aos="slide-up"
					data-aos-duration="2000"
				>
					<Link href="">
						<div className="div-neon opacity-60 rounded-sm text-center m-0 text-sm z-50">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<button>SAIBA MAIS</button>
						</div>
					</Link>
				</div>
			</div>
			<div className="w-1/2">
				<div className="absolute flex justify-center bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-livro" />
				<Transition
					show={showLuz}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-fumaca1 " />
				</Transition>
			</div>
		</div>
	);
}
