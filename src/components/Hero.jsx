import React from 'react';
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
    return (
        <div className='flex flex-col items-center lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                VirtualR build tools
                <span className='bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                    {" "}
                    for developer
                </span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Empower your creativity and bring you Vr app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
            </p>
            <div className='flex justify-center mt-10'>
                <a className='bg-linear-to-r from-orange-500 to-orange-800 px-4 mx-3 rounded-md py-3' href="">Start for free</a>
            </div>

            <div className='flex max-w-4xl mx-auto mt-10 justify-center gap-4'>
                <video
                    autoPlay
                    muted
                    loop
                    className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 '
                >
                    <source src={video1} />
                    Your browser does not support the video tag.

                </video>
                <video
                    autoPlay
                    muted
                    loop
                    className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400'
                >
                    <source src={video2} />
                    Your browser does not support the video tag.

                </video>
            </div>
        </div>
    );
};

export default Hero;