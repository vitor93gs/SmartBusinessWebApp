import { useState } from 'react';
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

export default function Tabs2() {
	const [selected, setSelected] = useState(0);

	return (
		<Carousel
			emulateTouch={true}
			useKeyboardArrows={true}
			showArrows={false}
			showThumbs={false}
			infiniteLoop={true}
			onChange={(current) => setSelected(current)}
		>
			<div>
				<div className="bg-bg1 h-screen w-screen bg-no-repeat bg-cover">
					<Transition
						show={selected === 0}
						enter="transition-all ease-in duration-1000"
						enterFrom="opacity-0"
						enterTo="opacity-100"
					>
						<div className=" bg-fumaca h-screen w-screen">
							<div className="bg-elem1 bg-contain bg-no-repeat h-screen w-screen">
								<Ebook />
							</div>
						</div>
					</Transition>
				</div>
			</div>
			<div>
				<div className="bg-bg2 h-screen w-screen bg-no-repeat bg-cover">
					<Transition
						show={selected === 1}
						enter="transition-all ease-in duration-1000"
						enterFrom="opacity-0"
						enterTo="opacity-100"
					>
						<div className=" absolute bg-fumaca2 h-screen w-screen"></div>
						<Franqueado selected={selected} />
					</Transition>
				</div>
			</div>
			<div>
				<div className="bg-bg3 h-screen w-screen bg-no-repeat bg-cover">
					<Transition
						show={selected === 2}
						enter="transition-all ease-in duration-1000"
						enterFrom="opacity-0"
						enterTo="opacity-100"
					>
						<div className=" absolute bg-fumaca2 h-screen w-screen"></div>
						<FreeCourse selected={selected} />
					</Transition>
				</div>
			</div>
			<div>
				<div className="bg-bg4 h-screen w-screen bg-no-repeat bg-cover">
					<Transition
						show={selected === 3}
						enter="transition-all ease-in duration-1000"
						enterFrom="opacity-0"
						enterTo="opacity-100"
					>
						<div className=" absolute bg-fumaca2 h-screen w-screen"></div>
						<SmartAcademy selected={selected} />
					</Transition>
				</div>
			</div>
			<div>
				<div className="bg-bg5 h-screen w-screen bg-no-repeat bg-cover">
					<Transition
						show={selected === 4}
						enter="transition-all ease-in duration-1000"
						enterFrom="opacity-0"
						enterTo="opacity-100"
					>
						<div className=" absolute bg-fumaca2 h-screen w-screen"></div>
						<SmartBusiness selected={selected} />
					</Transition>
				</div>
			</div>
			<div>
				<div className="bg-bg6 h-screen w-screen bg-no-repeat bg-cover">
					<Transition
						show={selected === 5}
						enter="transition-all ease-in duration-1000"
						enterFrom="opacity-0"
						enterTo="opacity-100"
					>
						<div className=" absolute bg-fumaca2 h-screen w-screen"></div>
						<FollowUs selected={selected} />
					</Transition>
				</div>
			</div>
		</Carousel>
	);
}
