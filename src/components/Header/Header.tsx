import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu/MobileMenu";
import logo from "@/assets/images/logo.webp";

const Header = () => {
  const links = [
    {
      id: 2,
      title: "Integrations",
      slag: "/integrations",
    },
    {
      id: 1,
      title: "About",
      slag: "/about",
    },
    {
      id: 4,
      title: "Contact",
      slag: "/contact",
    },
  ];

  return (
    <div className=" z-40 bg-[#060f11]">
      <nav className="container   max-w-6xl mx-auto py-5 px-2 flex items-center justify-between gap-16 border-b border-[#c2f3a92a]">
        <div className="w-full flex justify-between items-center gap-8">
          <Link className="w-28 md:w-32" href="/">
            <figure>
              <Image src={logo} height={20} width={130} alt="Logo" />
            </figure>
          </Link>
          <div className="hidden md:flex justify-center items-center gap-2">
            {links.map((menu) => (
              <div key={menu.id}>
                {
                  <Link
                    className="px-5 py-1.5 rounded-2xl transition-all duration-500 text-sm font-semibold text-white hover:text-[#adff85] whitespace-nowrap uppercase"
                    href={menu.slag}
                  >
                    {menu.title}
                  </Link>
                }
              </div>
            ))}
          </div>
          <button className=" bg-white/5 border border-white/5 text-white px-4 py-0.5 rounded-full text-base">
            Appointment
          </button>
        </div>
        <MobileMenu links={links} />
      </nav>
    </div>
  );
};

export default Header;
