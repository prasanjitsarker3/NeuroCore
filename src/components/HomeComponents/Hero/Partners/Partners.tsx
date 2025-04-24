"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import stopedits from "@/assets/images/clients/1stopedits.png";
import ate from "@/assets/images/clients/ate.png";
import bse from "@/assets/images/clients/bse.png";
import corpfash from "@/assets/images/clients/corpfash.png";
import fao from "@/assets/images/clients/fao.png";
import hm from "@/assets/images/clients/hm.png";
import organtic from "@/assets/images/clients/organtic.png";
import skillhub from "@/assets/images/clients/skillhub.png";
import wevloper from "@/assets/images/clients/wevloper.png";
import zenith from "@/assets/images/clients/zenith.png";

const Partners = () => {
    const items = [
        {
            id: 1,
            image: stopedits.src,
            title: "Nothing"
        },
        {
            id: 2,
            image: ate.src,
            title: "Nothing"
        },
        {
            id: 3,
            image: bse.src,
            title: "Nothing"
        },
        {
            id: 4,
            image: corpfash.src,
            title: "Nothing"
        },
        {
            id: 5,
            image: fao.src,
            title: "Nothing"
        },
        {
            id: 6,
            image: hm.src,
            title: "Nothing"
        },
        {
            id: 7,
            image: organtic.src,
            title: "Nothing"
        },
        {
            id: 8,
            image: skillhub.src,
            title: "Nothing"
        },
        {
            id: 9,
            image: wevloper.src,
            title: "Nothing"
        },
        {
            id: 10,
            image: zenith.src,
            title: "Nothing"
        },
    ];

    return (
        <div className="w-full overflow-hidden rounded-xs">
            <h2 className="text-white font-bold font-robotoMono text-center pb-5">TRUSTED BY THE BEST FRONTEND TEAMS</h2>
            <div className="w-full md:w-11/12 mx-auto">
                <Marquee speed={15}>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="mx-8 md:mx-12 flex-shrink-0"
                        >
                            <Image
                                width={120}
                                height={40}
                                src={item.image}
                                alt={item.title}
                                className="object-contain h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};
export default Partners;