import Image from 'next/dist/client/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../assets/logo.png';
import DropDown from './Dropdown';
import Burguer from './Burguer';
import brasil from '../assets/brasil.png';
// import lupa1 from "../assets/lupa_1.png";
// import lupa2 from "../assets/lupa_2.png";

export function Navbar() {
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', handleNavbar);
	}

	const [navbar, setNavbar] = useState(false);

	function handleNavbar() {
		window.scrollY >= 5 ? setNavbar(true) : setNavbar(false);
		console.log(navbar);
	}

	return (
		<div
			className={
				!navbar
					? 'fixed inline-flex text-xs font-thin items-center pt-navbartop pb-navbarbottom z-10 w-full justify-around max-w-tela bg-opacity-0 h-20'
					: 'fixed inline-flex text-xs font-thin items-center pt-navbartop pb-navbarbottom z-10 w-full justify-around max-w-tela bg-theme transition-all duration-1000 ease-in-out h-20'
			}
		>
			<div className="absolute left-1 sm:static sm:flex sm:justify-center w-44 mt-0">
				<Image
					src={logo}
					alt="Logo smart Business"
					height="80"
					width="293"
				/>
			</div>
			<div className="hidden sm:static sm:flex sm:items-center sm:justify-center ">
				<ul className="flex space-x-12 mx-10 ">
					<li className="after:block after:absolute after:transition-all after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-5 after:hover:w-10 after:hover:bg-golden after:hover:bg-opacity-60 ">
						<Link href="/">
							<button className="no-underline  text-gray1 transition-all  delay-150 hover:text-golden h-14">
								HOME
							</button>
						</Link>
					</li>

					<li className="after:block after:absolute after:transition-all after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-5 after:hover:w-10 after:hover:bg-golden after:hover:bg-opacity-60 ">
						<Link href="/">
							<button className="no-underline text-gray1 transition  delay-150 hover:text-golden h-14">
								COMUNIDADE
							</button>
						</Link>
					</li>
					<li className="after:block after:absolute after:transition-all after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-5 after:hover:w-10 after:hover:bg-golden after:hover:bg-opacity-60 ">
						<DropDown
							header="SMART ACADEMY"
							info1="PROSPERA"
							info2="SUPERA"
							info3="EMPODERA"
							info4="CRYPTOMIND"
							info5=""
							info6=""
							button="/smart-academy"
						/>
					</li>
					<li className="after:block after:absolute after:transition-all after:w-3 after:bg-golden after:bg-opacity-60 after:h-0.5 after:duration-600 after:ease-in-out after:bottom-5 after:hover:w-10 after:hover:bg-golden after:hover:bg-opacity-60">
						<DropDown
							header="NOSSAS EMPRESAS"
							info1="PROJETO CRD"
							info2="EXCHANGE"
							info3="COMUNIDADE MULHERES INVESTIDORAS"
							info4="SMART FRANCHISING"
							info5="SMART ACADEMY"
							info6="SMART DUCK"
							button="/nossas-empresas"
						/>
					</li>
					<li className="no-underline text-golden transition  delay-150 hover:text-gray1 ">
						<Link href="/login">
							<button className="h-14">LOGIN</button>
						</Link>
					</li>
				</ul>
			</div>
			<div className="absolute right-1/3 sm:flex sm:justify-center sm:static sm:w-44 mb-3 sm:mt-0">
				{/* <Image
          src={isMouseOver ? lupa2 : lupa1}
          alt="Logo smart Business"
          height="35"
          width="35"
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOverHandler}
        /> */}
				<Image
					src={brasil}
					alt="icon bandeira do brasil"
					height="20"
					width="20"
				/>
			</div>
			<div className="flex-1 flex sm:hidden absolute w-12 h-12 right-10 mt-0">
				<Burguer />
			</div>
		</div>
	);
}
