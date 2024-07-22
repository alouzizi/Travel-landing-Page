import Image from "next/image";
import HeroBg from "../../public/assets/HeroBackground.svg";

export default function Hero() {
	return (
		<div className="w-full h-full pt-[22px]">

			<div className="flex flex-col px-5 lg:absolute lg:right-0 lg:w-2/3 lg:pt-[156px]">

				<h1 className=" text-white font-bold text-[44px] text-center leading-[48px] lg:text-left lg:text-[69px] lg:leading-[76px] font-['Playfair Display']">
					Welcome to the World of Extraordinary Travel
				</h1>
				<p className=" text-white text-center text-xl lg:text-left leading-[33px]">If you're in search of exciting adventures, unforgettable experiences, and breathtaking places to explore, you've come to the right place!</p>
			</div>
			<div className="flex flex-col ">

			</div>
		</div>
	);
}
