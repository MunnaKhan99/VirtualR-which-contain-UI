import React from 'react';
import { resourcesLinks } from '../constants/index'
import { platformLinks } from '../constants/index'
import { communityLinks } from '../constants/index'

const Footer = () => {
    return (
        <section className='mt-20 border-t py-10 border-neutral-700'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <div>
                    <h3 className=' text-md font-semibold mb-4'>Resource</h3>
                    <ul className='space-y-2'>
                        {
                            resourcesLinks.map((data, index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={data.href}>{data.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className=' text-md font-semibold mb-4'>Platform</h3>
                    <ul className='space-y-2'>
                        {
                            platformLinks.map((data, index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={data.href}>{data.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className=' text-md font-semibold mb-4'>Community</h3>
                    <ul className='space-y-2'>
                        {
                            communityLinks.map((data, index) => (
                                <li key={index}>
                                    <a className='text-neutral-300 hover:text-white' href={data.href}>{data.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Footer;