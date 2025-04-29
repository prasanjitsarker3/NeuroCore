import Image from 'next/image';
import React from 'react';
import { TestimonialsCardType } from './TestimonialsCardType';

const TestimonialsCard: React.FC<TestimonialsCardType> = ({ testimonialsCardData }) => {
    return (
        <div className='border border-[#212e31] bg-[#141d1f] p-7 rounded-2xl w-96'>
            <p className='text-gray-300 font-roboto'>{testimonialsCardData.message}</p>
            <div className='flex gap-3 items-center pt-5'>
                <figure className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                    <Image src={testimonialsCardData.image} alt="Nothing" width={100} height={100} />
                </figure>
                <div>
                    <h4 className='font-robotoMono text-sm font-bold'>{testimonialsCardData.name}</h4>
                    <p className='text-gray-200 text-sm font-medium'>{testimonialsCardData.deg}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;