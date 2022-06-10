import Image from 'next/image';
import celular from '../../assets/celular.png';

export function FollowUs(props) {
	return (
		<div className="text-gray1 text-opacity-70 text-3xl text-center flex justify-center items-center pr-36 pl-36 h-screen">
			<span>SIGA NOSSAS REDES SOCIAIS</span>

			<Image src={celular} alt="celular" width={400} height={540} />
		</div>
	);
}
