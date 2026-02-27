import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { checklistItems } from '../constants/index'
import code from '../assets/code.jpg'
const WorkFlow = () => {
    return (
        <div className=' mt-12 h-auto'>
            <div className='text-center text-3xl sm:text-5xl lg:text-6xl mt-6'>
                Accelerate you
                <span className='bg-linear-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'> {" "}Coding Workflow</span>
            </div>

            <div className='flex flex-wrap justify-center mt-10 '>
                <div className='w-full lg:w-1/2 p-2'>
                    <img src={code} alt=""
                        className="w-full h-auto max-h-105 lg:max-h-125 object-contain mx-auto"
                    />
                </div>
                <div className='pt-12 w-full lg:w-1/2 '>
                    {
                        checklistItems.map((data, index) => (
                            <div className='flex justify-center mb-12' key={index}>
                                <div className='mx-2  h-10 w-10 p-1 bg-ne justify-center items-start flex rounded-full'>
                                    <CheckCircle2 color='green' className='h-4 w-4' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-semibold text-neutral-300'>{data.title}</h3>
                                    <p className='text-xs text-neutral-500'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default WorkFlow;