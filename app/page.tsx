import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import HeroBg from "../public/assets/HeroBackground.svg";

export default function Home() {
	return (
		<div>
			<div className="relative">
				<Image
					src={HeroBg}
					alt="Hero Background"
					className="w-full h-[473px] md:h-full bg-gradient-to-b from-stone-950 to-black object-cover"
				/>
				<div className="absolute inset-x-0 top-0 ">
					<NavBar />
					<Hero />
				</div>
			</div>
		</div>
	);
}
