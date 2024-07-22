import Image from "next/image"
import Logo from "../../public/assets/Logo.svg"
import Menu from "../../public/assets/Menu.svg"


const navLinks = [
	{ name: 'Home' },
	{ name: 'Tour' },
	{ name: 'Blog' },
	{ name: 'Pages' },
	{ name: 'Contact' }
]


export default function NavBar() {
	return (
		<nav className="flex items-center justify-between w-full pt-[34px] pl-6 pr-3 lg:px-28">
			<div className="flex items-center">
				<Image src={Logo} alt="Logo" />
				<p className="pl-1 leading-tight text-xl lg:text-[37px] lg:leading-[37px] ">
					<span className="font-bold text-teal-500">Eden</span>
					<span className="text-white">Travel</span>
				</p>
			</div>

			<div className="flex items-center">
				<div className="hidden gap-x-[60px] lg:flex text-white font font-medium text-lg">
					{navLinks.map((item, index) => (
						<p key={index} className="">{item.name}</p>
					)

					)}
				</div>
				<Image src={Menu} alt="Menu" className="lg:hidden" />
			</div>


		</nav>
	)
}