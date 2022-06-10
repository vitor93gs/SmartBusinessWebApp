import { useState } from 'react';
import { FrontPage } from './front-page-tabs/FrontPage';
import { Franqueado, Who } from './front-page-tabs/Franqueado';
import { FreeCourse } from './front-page-tabs/FreeCourse';
import { SmartAcademy } from './front-page-tabs/SmartAcademy';
import { SmatBusiness } from './front-page-tabs/SmartBusiness';
import { News } from './front-page-tabs/News';
import { FollowUs } from './front-page-tabs/FollowUs';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Tabs() {
	return (
		<Carousel>
			<div>
				<FrontPage />
			</div>
			<div>
				<Franqueado />
			</div>
			<div>
				<FreeCourse />
			</div>
		</Carousel>
	);
}
