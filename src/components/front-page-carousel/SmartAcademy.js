import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

export function SmartAcademy() {
	const [showLuz, setShowLuz] = useState(false);

	useEffect(() => {
		AOS.init();
		setTimeout(() => {
			setShowLuz(true);
		}, 2000);
	}, []);

	return (
		<div className="max-w-tela bg-transparent flex justify-between items-center w-screen h-screen px-36 py-7">
			<div>
				<div className="absolute bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-academy" />
				<Transition
					show={showLuz}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela lg:bg-fumaca4 " />
				</Transition>
			</div>
			{/* <div className="flex flex-col items-center w-1/2 mr-auto">
        <h1
          data-aos="zoom-out-down"
          data-aos-duration="2500"
          className="text-gray1 sm:text-2xl text-base text-opacity-70 text-center mb-12 h-36 w-full ml-10"
        >
          SMART ACADEMY!
        </h1>
        <div className="ml-10" data-aos="fade-left" data-aos-duration="3000">
          <Link href="">
            <button className="btn-6 btn-62">SAIBA MAIS</button>
          </Link>
        </div>
      </div> */}
			<div className="relative xl:mr-1/6">
				<h1 className="text-golden text-right text-4xl h-12 pr-3">
					<Typewriter
						options={{
							delay: 30,
							cursor: '',
							loop: false,
						}}
						onInit={(typewriter) => {
							typewriter
								.pauseFor(1000)
								.typeString('<strong>SMART BUSINESS!</strong>')
								.start();
						}}
					/>
				</h1>
				<div className="mb-2 text-4xl font-thin tracking-wider text-white2 text-right after:right-0 after:absolute after:w-0.5 after:bg-golden after:bg-opacity-100 after:h-32 after:mt-12 after:bottom-0 before:-bottom-0.5 before:absolute before:w-56 before:bg-golden before:bg-opacity-100 before:h-0.5 before:mt-12 before:right-0 ">
					<h1 className="pr-3 mb-2">
						CONOSCO VOCÊ ENCONTRARÁ
						<br />
						UMA VARIEDADE DE CURSOS
						<br />E TUTORIAIS ON-LINE DE QUALIDADE
						<br />
						QUE LEVARÃO SEUS NEGÓCIOS
						<br />A NOVOS PATAMARES
					</h1>
				</div>
				<div
					className="mt-2 absolute right-0 text-2xl"
					data-aos="fade-left"
					data-aos-duration="3000"
				>
					<Link href="">
						<button className="btn-6 btn-62">SAIBA MAIS</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
