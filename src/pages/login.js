import { useState, useEffect } from 'react';
import Login from '../components/Login';
import { Navbar } from '../components/Navbar';
import LoginMobile from '../components/LoginMobile';

export default function LoginPage() {
	// const [windowSize, setWindowSize] = useState(getWindowSize());

	// useEffect(() => {
	// 	function handleWindowResize() {
	// 		setWindowSize(getWindowSize());
	// 	}

	// 	window.addEventListener('resize', handleWindowResize);

	// 	return () => {
	// 		window.removeEventListener('resize', handleWindowResize);
	// 	};
	// }, []);

	// function getWindowSize() {
	// 	const { innerWidth: width, innerHeight: height } = window;
	// 	return { width, height };
	// }

	// return windowSize.width > 768 ? <Login /> : <LoginMobile />;
	return (
		<div>
			<Navbar />
			<Login />
		</div>
	);
}
