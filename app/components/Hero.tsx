import Image from "next/image"
import HeroBg from "../../public/assets/HeroBackground.svg"

export default function Hero() {
	return (
		<div className="overflow-auto w-full h-full">
			<Image src={HeroBg} alt="Hero Background" className="w-full h-[463px] md:h-full bg-gradient-to-b from-stone-950 to-black object-cover" />
		</div>
	)
}