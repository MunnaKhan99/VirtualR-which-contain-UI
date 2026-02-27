import React from 'react';
import { testimonials } from '../constants/index';

const Testimonials = () => {
    console.log(testimonials);
    return (
        <section className='mt-20'>
            <h1 className='text-4xl md:text-5xl text-center tracking-tight'>What people are saying</h1>
            <div className=' mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start'>
                {
                    testimonials.map((data, index) => (
                        <div className='border border-neutral-800 rounded-lg bg-neutral-900 p-6 transition-colors duration-300 hover:border-neutral-600 ' key={index}>
                            <p className='font-thin text-neutral-200 '>{data.text}</p>

                            <div className='mt-5 flex items-center gap-4'>
                                <img src={data.image} className='ring-1 ring-neutral-700 object-cover rounded-full w-10 h-10' alt="" />
                                <div>
                                    <h3 className='text-md'>{data.user}</h3>
                                    <p className='text-sm leading-relaxed text-neutral-300'>{data.company}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Testimonials;