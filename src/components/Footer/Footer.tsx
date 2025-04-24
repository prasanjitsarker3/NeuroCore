'use client';

import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import Link from 'next/link';
import logo from "@/assets/images/logo.svg";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#060f11] text-white">
            <div className='font-robotoMono px-6 max-w-[1250px] mx-auto pt-10'>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* Logo and Socials */}
                    <div>
                        <Link href="/">
                            <figure>
                                <Image className='cursor-pointer' src={logo} alt="Logo" width={100} height={20} />
                            </figure>
                        </Link>
                        <div className="flex gap-3 text-sm pt-6">
                            <a className='transition-colors duration-500 text-gray-400 hover:text-[#adff85]' href="#" aria-label="X">
                                <SiX />
                            </a>
                            <a className='transition-colors duration-500 text-gray-400 hover:text-[#adff85]' href="#" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a className='transition-colors duration-500 text-gray-400 hover:text-[#adff85]' href="#" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a className='transition-colors duration-500 text-gray-400 hover:text-[#adff85]' href="#" aria-label="Discord">
                                <FaDiscord />
                            </a>
                        </div>
                    </div>

                    {/* Columns */}
                    <div>
                        <h2 className="text-sm font-bold text-mainColor mb-6">PRODUCT</h2>
                        <ul className="space-y-1 flex flex-col gap-2.5 text-sm">
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Pricing</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Integrations</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Changelog</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Book a demo</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold text-mainColor mb-6">COMPANY</h2>
                        <ul className="space-y-1 flex flex-col gap-2.5 text-sm">
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">About</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Blog</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">FAQ</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold text-mainColor mb-6">RESOURCES</h2>
                        <ul className="space-y-1 flex flex-col gap-2.5 text-sm">
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Terms of service</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Privacy policy</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">404</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Webhooks</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold text-mainColor mb-6">DEVELOPERS</h2>
                        <ul className="space-y-1 flex flex-col gap-2.5 text-sm">
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">API</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Status</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Documentation</Link></li>
                            <li><Link className='transition-colors duration-500 text-gray-400 hover:text-gray-50' href="#">Github</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 flex flex-col-reverse md:flex-row gap-4 justify-between items-center border-t border-gray-500 py-6">
                    <p className="text-gray-200 tracking-tight text-sm">© 2025 Codepunk. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#adff85] inline-block"></span>
                        <span className="text-gray-200 tracking-tight text-sm">System Status</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;