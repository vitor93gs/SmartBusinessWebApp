import Image from 'next/image';
import celular from '../../assets/celular.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function FollowUs(props) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="text-gray1 text-opacity-70 text-3xl text-center flex justify-center items-center pr-36 pl-36 h-screen">
			<div data-aos="fade-up" data-aos-duration="3000">
				<span>SIGA NOSSAS REDES SOCIAIS</span>
			</div>

			<Image src={celular} alt="celular" width={400} height={540} />
		</div>
	);
}
