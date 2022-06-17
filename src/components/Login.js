import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function Login() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="bg-theme h-screen items-center z-0 flex justify-center">
			<div className="border-2 border-gray1 h-4/5 w-1/6 mx-2">
				<Link href={'https://app.smartbusinessgroup.io/#/'}>
					<button className="h-full w-full text-gray1">
						EXCHANGE
					</button>
				</Link>
			</div>
			<div className="border-2 border-gray1 h-4/5 w-1/6 mx-2">
				<Link
					href={'https://sistema.smartbusinessgroup.io/users/login'}
				>
					<button className="h-full w-full text-gray1">
						SMARTTECH
					</button>
				</Link>
			</div>
			<div className="border-2 border-gray1 h-4/5 w-1/6 mx-2">
				<Link
					href={'https://www.smartbusinessgroup.io/smart-academy-2/'}
				>
					<button className="h-full w-full text-gray1">
						SMARTACADEMY
					</button>
				</Link>
			</div>
			<div className="border-2 border-gray1 h-4/5 w-1/6 mx-2">
				<Link href={'/'}>
					<button className="h-full w-full text-gray1">
						SMARTBANK cade o link?
					</button>
				</Link>
			</div>
		</div>
	);
}
