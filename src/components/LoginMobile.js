import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function LoginMobile() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="bg-theme h-screen z-0 flex justify-center items-center ">
			<div className="w-full mx-6 space-y-5 h-5/6 items-center pt-1/5">
				<div className="border-2 border-gray1 h-1/5 w-full bg-smartbtech">
					<Link href={'https://app.smartbusinessgroup.io/#/'}>
						<button className="h-full w-full text-gray1">
							EXCHANGE
						</button>
					</Link>
				</div>
				<div className="border-2 border-gray1 h-1/5 w-full">
					<Link
						href={
							'https://sistema.smartbusinessgroup.io/users/login'
						}
					>
						<button className="h-full w-full text-gray1">
							SMARTTECH
						</button>
					</Link>
				</div>
				<div className="border-2 border-gray1 h-1/5  w-full">
					<Link
						href={
							'https://www.smartbusinessgroup.io/smart-academy-2/'
						}
					>
						<button className="h-full w-full text-gray1">
							SMARTACADEMY
						</button>
					</Link>
				</div>
				<div className="border-2 border-gray1 h-1/5  w-full">
					<Link href={'/'}>
						<button className="h-full w-full text-gray1">
							SMARTBANK cade o link?
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
