import React from 'react';
import { pricingOptions } from '../constants/index'

import { CheckCircle2 } from 'lucide-react';
const Pricing = () => {
    console.log(pricingOptions);
    return (
        <section className='mt-20  px-4'>

            <h2 className='my-8 text-3xl md:text-4xl lg:text-6xl text-center '>Pricing</h2>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto '>
                {
                    pricingOptions.map((data, index) => (
                        <div key={index} className='h-full bg-neutral-900/40 p-6 border border-neutral-700 rounded-xl  hover:border-orange-500 transition-all duration-300'>
                            <h3 className='text-3xl lg:text-4xl'>{data.title}
                                {
                                    data.title === "Pro" && (
                                        <span className='text-sm  bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{" "} (Most Popular)</span>
                                    )
                                }
                            </h3>

                            <h1 className='text-3xl lg:text-4xl font-bold'>{data.price}
                                <span className='text-xs font-thin'>{" "}/Month</span>
                            </h1>
                            <ul className='mb-4'>
                                {
                                    data.features.map((feture, index) => (
                                        <div key={index} className='mt-8 flex items-center '>
                                            <CheckCircle2 />
                                            <li className='text-neutral-500 ml-2' key={index}>{feture}</li>

                                        </div>
                                    ))
                                }
                            </ul>
                            <div className='border rounded-md text-center py-2 border-orange-900 hover:bg-orange-900 hov '>
                                <a href=""> Subscribe</a>
                            </div>
                        </div>


                    ))
                }

            </div>


        </section >
    );
};

export default Pricing;