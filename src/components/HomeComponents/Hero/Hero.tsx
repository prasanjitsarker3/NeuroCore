'use client';

import { useState } from 'react';
import glowImage from "@/assets/images/glow.avif"
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa6";
import TypewriterComponent from 'typewriter-effect';
import { FiCopy } from "react-icons/fi";
import Partners from './Partners/Partners';

const codeSnippets: Record<string, string> = {
    React: `import React from 'react';
class component extends React.Component {
  render() {
    return (
      <div>
        <h1>codepunk</h1>
        <p>This is a simple React component.</p>
      </div>
    );
  }
}
export default codepunk;`,

    Angular: `import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: \`
    <h1>codepunk</h1>
    <p>This is a simple Angular component.</p>
  \`
})
export class AppComponent {}`,

    CSS: `h1 {
  color: #00ff99;
  font-size: 2rem;
}
p {
  color: #ccc;
}`,

    Saas: `$primary-color: #00ff99;
h1 {
  color: $primary-color;
  font-size: 2rem;
}
p {
  color: lighten($primary-color, 40%);
}`
};

const Hero: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('React');

    return (
        <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#0f2c1fa9] text-white pt-20 pb-5">
            {/* Header */}
            <div className="max-w-[1250px] mx-auto px-4">
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='w-full md:w-2/3'>
                        <div>
                            <p className="text-[#adff85] hover:text-white transition-all duration-500 font-robotoMono flex items-center gap-3 cursor-pointer">
                                <span className='border-l-2 border-[#adff85] h-4 w-0.5'></span> <span>Watch our event</span> <FaArrowRight />
                            </p>
                        </div>
                        <h1 className="text-5xl font-bold py-5 leading-tight">
                            Build new products <br />
                            <span className="text-[#adff85] flex">
                                for &nbsp; <TypewriterComponent
                                    options={{
                                        strings: ['developers', 'startups', "customers"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h1>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Our framework component is built to handle scaling demands with agility. Lightning-fast performance is our promise.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col md:flex-row gap-4">
                            <Link
                                href="/signup"
                                className="flex justify-center items-center rounded-xl bg-[#adff85] px-6 py-3 text-sm font-medium text-black shadow-sm font-robotoMono hover:bg-[#9fec78]"
                            >GET STARTED <MdOutlineKeyboardArrowRight className='text-xl' /> </Link>
                            <Link
                                href="/contact"
                                className="flex justify-center items-center rounded-xl bg-transparent px-6 py-3 text-sm font-medium text-white hover:text-[#adff85] font-robotoMono">
                                LEARN MORE <MdOutlineKeyboardArrowRight className='text-xl' />
                            </Link>
                        </div>
                    </div>
                    {/* Code Tabs */}
                    <div className="border border-[#c2f3a92a] bg-[#c2f3a90a] rounded-lg shadow-lg w-full md:w-1/3">
                        <div className="p-4 flex gap-6 border-b border-[#c2f3a92a] pb-3 mb-4 text-sm">
                            {['React', 'Angular', 'CSS', 'Saas'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-1 transition-all cursor-pointer ${activeTab === tab
                                        ? 'text-white'
                                        : 'text-gray-400'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <pre className="p-4 text-green-300 text-sm overflow-x-auto whitespace-pre-wrap">
                            {codeSnippets[activeTab]}
                        </pre>

                        <div className='flex justify-between items-center p-4 border-t border-[#c2f3a92a]'>
                            <div className="text-sm flex gap-2 text-gray-400 hover:text-white transition-all duration-500 cursor-pointer">Documentation <MdOutlineKeyboardArrowRight className='text-xl' /></div>
                            <FiCopy className='text-gray-400 hover:text-white transition-all duration-500 cursor-pointer' />
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <Partners />
                </div>
            </div>
            <div className='absolute bottom-0 left-1/5'>
                <figure>
                    <Image
                        src={glowImage}
                        alt="Bottom Circle"
                        className="w-full h-full object-cover"
                        width={650} height={200}
                    />
                </figure>
            </div>
        </section>
    );
};

export default Hero;
