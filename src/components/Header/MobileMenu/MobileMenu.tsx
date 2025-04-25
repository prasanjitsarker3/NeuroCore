"use client"

import Link from "next/link";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

interface MenuType {
    links: {
        id: number,
        title: string,
        slag: string,
        subMenu?: {
            id: number,
            title: string,
            slag: string,
        }[]
    }[]
}

const MobileMenu: React.FC<MenuType> = ({ links }) => {
    const [isActive, setIsActive] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMenu = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        if (isActive) {
            // Closing animation
            setTimeout(() => {
                setIsActive(false);
                setIsAnimating(false);
            }, 500); // Match this with your CSS transition duration
        } else {
            setIsActive(true);
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }
    };

    const closeMenu = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsActive(false);
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="block md:hidden">
            <div
                onClick={toggleMenu}
                className="flex flex-col gap-2 justify-center items-center cursor-pointer"
            >
                <span className="text-white font-bold text-2xl transition-transform duration-700 hover:scale-110">
                    {isActive ? <MdClose /> : <HiBars3 />}
                </span>
            </div>

            <div
                className={`md:hidden flex flex-col justify-between gap-5 absolute w-full left-0 bg-[#060f11] transition-all duration-700 px-5 overflow-hidden ${isActive
                    ? "top-[66px] h-[calc(100vh-260px)] opacity-100 z-50"
                    : "top-[-100vh] h-0 opacity-0"
                    }`}
            >
                <div className="h-full py-6 px-5 flex flex-col gap-5">
                    {links.map(menu => (
                        <Link
                            key={menu.id}
                            className="text-white font-semibold uppercase hover:text-[#adff85] transition-colors duration-300"
                            href={menu.slag}
                            onClick={closeMenu}
                        >
                            {menu.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;