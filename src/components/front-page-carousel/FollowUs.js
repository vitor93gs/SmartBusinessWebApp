import Image from 'next/dist/client/image';
import botao from '../../assets/botaoWhats.svg';
import texto from '../../assets/Banner1_texto.png';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function FollowUs(props) {
	const [showLuz, setShowLuz] = useState(false);

	useEffect(() => {
		AOS.init();
		setTimeout(() => {
			setShowLuz(true);
		}, 2000);
	}, []);

	return (
		<div className="max-w-tela text-gray1 text-opacity-70 text-3xl text-center flex justify-around items-center pl-1/5 h-screen">
			<div className="flex flex-col items-left w-1/2 text-left mb-10 justify-start">
				<h1 className="text-white2 w-full text-4xl">
					<span className="bg-golden pr-3 pl-3 font-medium rounded-tr-3xl rounded-bl-3xl">
						<strong>REDES SOCIAIS</strong>
					</span>
				</h1>
				<div
					className="mt-6 z-10"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<div className="text-4xl font-thin tracking-wider text-white2 text-left ">
						<h1 className="pl-3 mb-2">
							ESTAMOS SEMPRE LANÇANDO
							<br />
							NOVOS PRODUTOS E DIVULGANDO
							<br />
							INFORMAÇÕES EM NOSSAS REDES
							<br />
							SOCIAIS
						</h1>
					</div>
				</div>
				<div
					className=" z-10"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<div className="mb-2 text-3xl font-thin tracking-wider text-gray2 text-left before:left-3 before:absolute before:w-72 before:bg-golden before:bg-opacity-100 before:h-0.5 before:bottom-0">
						<h1 className="pl-3">
							NOS SIGA PARA FICAR POR DENTRO DOS
							<br />
							ACONTECIMENTOS MUNDIAIS DO RAMO
							<br />
							FINANCEIRO
						</h1>
					</div>
				</div>

				<div
					className="pl-3 mt-6 h-10 w-10"
					data-aos="fade-right"
					data-aos-duration="2000"
				>
					<ul className="ulSocial opacity-80">
						<li className="liSocial">
							<a
								href="https://web.whatsapp.com/send?phone=5547996236478&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Smart%20Business"
								target="_blank"
								rel="noreferrer"
								className="aSocial"
							>
								<i className="fab" aria-hidden="true">
									<FontAwesomeIcon icon={faWhatsapp} />
								</i>
							</a>
						</li>
						<li className="liSocial">
							<a
								href="https://www.instagram.com/smartbusiness.oficial/"
								target="_blank"
								rel="noreferrer"
								className="aSocial"
							>
								<i className="fab" aria-hidden="true">
									<FontAwesomeIcon icon={faInstagram} />
								</i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className=" ml-24 w-1/2">
				<div className="absolute flex justify-center bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela bg-celular" />

				<Transition
					show={showLuz}
					enter="transition-all ease-in duration-2000"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-all ease-out duration-1000"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="absolute visible bottom-0 left-0 bg-no-repeat h-screen w-screen bg-contain bg-center pointer-events-none max-w-tela lg:bg-fumaca5 " />
				</Transition>
			</div>
		</div>
	);
}
