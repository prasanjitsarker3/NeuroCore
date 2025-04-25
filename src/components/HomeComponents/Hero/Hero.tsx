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
        <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#0f2c1fa9] text-white pt-20 pb-5 border-b border-[#c2f3a92a]">
            {/* Header */}
            <div className="max-w-[1250px] mx-auto px-4">
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='w-full md:w-2/3'>
                        <div>
                            <p className="text-[#adff85] hover:text-white transition-all duration-500 font-robotoMono flex items-center gap-3 cursor-pointer">
                                <span className='border-l-2 border-[#adff85] h-4 w-0.5'></span> <span>Watch our event</span> <FaArrowRight />
                            </p>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold py-5 leading-tight">
                            Build new products <br />
                            <p className="text-[#adff85] flex">
                                <span className='text-white'>for</span> &nbsp; <TypewriterComponent
                                    options={{
                                        strings: ['developers', 'startups', "customers"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                        </h1>
                        <p className="text-gray-300 text-lg font-roboto mb-6 max-w-md">
                            Our framework component is built to handle scaling demands with agility. Lightning-fast performance is our promise.
                        </p>

                        {/* Buttons */}
                        <div className="py-10 flex gap-4">
                            <Link
                                href="/signup"
                                className="flex justify-center items-center rounded-xl bg-[#adff85] px-6 py-3 text-sm font-medium text-black shadow-sm font-robotoMono hover:bg-[#9fec78]"
                            >GET STARTED <MdOutlineKeyboardArrowRight className='text-xl' /> </Link>
                            <Link
                                href="/contact"
                                className="flex justify-center items-center rounded-xl bg-transparent px-6 py-3 text-sm font-medium text-white hover:text-[#adff85] font-robotoMono z-10">
                                LEARN MORE <MdOutlineKeyboardArrowRight className='text-xl' />
                            </Link>
                        </div>
                    </div>
                    {/* Code Tabs */}
                    <div className="border overflow-hidden border-[#c2f3a92a] bg-[#c2f3a90a] rounded-lg shadow-lg w-full md:w-1/3 z-10">
                        <div className="flex justify-between items-center border-b border-[#c2f3a92a] text-sm">
                            {['React', 'Angular', 'CSS', 'Saas'].map(tab => (
                                <div onClick={() => setActiveTab(tab)} className={`w-full border-r border-[#c2f3a92a] last:border-0`} key={tab}>
                                    <button
                                        className={`w-full p-4 transition-all cursor-pointer ${activeTab === tab ? 'text-white bg-[#c2f3a92d]' : 'text-gray-400'}`}>
                                        {tab}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <pre className="p-4 text-green-300 text-sm overflow-x-auto whitespace-pre-wrap">
                            <code>
                                {codeSnippets[activeTab]}
                            </code>
                        </pre>

                        <div className='flex justify-between items-center p-4 border-t border-[#c2f3a92a]'>
                            <div className="text-sm flex justify-center gap-2 text-gray-400 hover:text-white transition-all duration-500 z-10 cursor-pointer">Documentation <MdOutlineKeyboardArrowRight className='text-xl' /></div>
                            <FiCopy className='text-gray-400 hover:text-white transition-all duration-500 cursor-pointer' />
                        </div>
                    </div>
                </div>

                <div className="mt-32 z-10">
                    <Partners />
                </div>
            </div>
            <div className='absolute bottom-0 left-1/5 z-0'>
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
