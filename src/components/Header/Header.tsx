import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
    const links = [
        {
            id: 1,
            title: "About",
            slag: "/about"
        },
        {
            id: 2,
            title: "Integrations",
            slag: "/integrations"
        },
        {
            id: 3,
            title: "Blog",
            slag: "/blog"
        },
        {
            id: 4,
            title: "Contact",
            slag: "/contact"
        },
    ]

    return (
        <div className="bg-transparent z-40">
            <nav className="container mx-auto max-w-[1250px] py-5 px-5 flex items-center justify-between gap-16 border-b border-[#c2f3a92a]">
                <div className="flex items-center gap-8">
                    <Link className="w-28 md:w-32" href="/">
                        <figure >
                            <Image src={logo} height={20} width={130} alt="Logo" />
                        </figure>
                    </Link>
                    <div className="hidden md:flex justify-center items-center gap-2">
                        {
                            links.map(menu => <div key={menu.id}>
                                {
                                    <Link className="px-5 py-1.5 rounded-2xl transition-all duration-500 text-sm font-semibold text-white hover:text-[#adff85] whitespace-nowrap uppercase" href={menu.slag}>{menu.title}</Link>
                                }
                            </div>
                            )
                        }
                    </div>
                </div>
                <MobileMenu links={links} />
            </nav>
        </div>
    );
};

export default Header;