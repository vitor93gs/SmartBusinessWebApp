import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/solid';

export default function Burguer() {
	function handleLink(page) {
		switch (page) {
			case 'HOME':
				return '/';
			case 'COMUNIDADE':
				return '/';
			case 'SMART ACADEMY':
				return '/smart-academy';
			case 'NOSSAS EMPRESAS':
				return '/nossas-empresas';
		}
	}
	const tabs = ['HOME', 'COMUNIDADE', 'SMART ACADEMY', 'NOSSAS EMPRESAS'];
	return (
		<div className="flex space-x-5 fixed right-0 mr-5">
			<div className="no-underline text-golden transition  delay-150 hover:text-gray1 ">
				<Link href="/login">
					<button className="h-14 mb-1">LOGIN</button>
				</Link>
			</div>
			<div className="dropdown2 text-gray1 border- ">
				<button className="dropbtn h-14 transition  delay-150 hover:text-golden font-thin">
					<MenuIcon className="h-5 w-5" />
				</button>
				<div className="dropdown-content2 shadow-lg bg-theme2 ring-black ring-opacity-5 focus:outline-none flex flex-col items-center w-36 fixed right-0">
					<ul>
						{tabs.map((current, index) => {
							var page = handleLink(current);
							return (
								<li
									key={index}
									className="no-underline transition delay-150 hover:text-golden font-thin h-14 items-center flex"
								>
									<Link href={page} className="h-full w-full">
										<button className="text-left h-full w-full">
											{current}
										</button>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
