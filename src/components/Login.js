import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function Login() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="bg-fundo h-screen items-center z-0 flex justify-center">
			<div className="h-login w-60 mx-2 bg-contain bg-no-repeat bg-center  duration-300 ease-in bg-academyLoginCinza hover:bg-academyLogin">
				<Link href={'https://app.smartbusinessgroup.io/#/'}>
					<button className="h-full w-full text-gray1"></button>
				</Link>
			</div>
			<div className="h-login w-60 mx-2 bg-contain bg-no-repeat bg-center  duration-300 ease-in bg-academyLoginCinza hover:bg-academyLogin">
				<Link
					href={'https://sistema.smartbusinessgroup.io/users/login'}
				>
					<button className="h-full w-full text-gray1"></button>
				</Link>
			</div>
			<div className="h-login w-60 mx-2 bg-contain bg-no-repeat bg-center  duration-300 ease-in bg-academyLoginCinza hover:bg-academyLogin">
				<Link
					href={'https://www.smartbusinessgroup.io/smart-academy-2/'}
				>
					<button className="h-full w-full text-gray1"></button>
				</Link>
			</div>
			<div className="h-login w-60 mx-2 bg-contain bg-no-repeat bg-center  duration-300 ease-in bg-academyLoginCinza hover:bg-academyLogin">
				<Link href={'/'}>
					<button className="h-full w-full text-gray1"></button>
				</Link>
			</div>
		</div>
	);
}
