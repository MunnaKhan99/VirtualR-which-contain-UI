import React from 'react';
import { Menu, X } from 'lucide-react'
import { useState } from 'react';
import logo from '../assets/logo.png'
import { navItems } from '../constants/index'
const Navbar = () => {
    const [mobileDrawer, setMobileDrawer] = useState(false)
    const toogleNavbar = () => {
        setMobileDrawer(!mobileDrawer)
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto  relative text-sm">
                {/* for desktop and responsive */}
                <div className='flex justify-between items-center'>

                    {/* left logo */}
                    <div className='flex items-center shrink-0'>
                        <img src={logo} className='w-10 h-10' alt="logo" />
                        <span>VirtualR</span>
                    </div>

                    {/* middle links */}
                    <ul className='hidden lg:flex  ml-14 space-x-12'>
                        {
                            navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))
                        }
                    </ul>

                    {/* right side button */}
                    <div className='hidden lg:flex justify-center items-center space-x-12' >
                        <a href="#" className='py-2 px-3 border rounded-md' >Sign In</a>
                        <a href="#" className='py-2 px-3 bg-linear-to-r  from-orange-500 to-orange-800 rounded-md'>
                            Create an account
                        </a>
                    </div>

                    {/* for responsiveness */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toogleNavbar}>
                            {
                                mobileDrawer ? <X /> : <Menu />
                            }
                        </button>
                    </div>
                </div>
                {
                    mobileDrawer && (
                        <div className='fixed right-0 z-20 bg-neutral-900 w-full flex flex-col justify-center items-center lg:hidden'>
                            <ul>
                                {
                                    navItems.map((item, index) => (
                                        <li key={index} className='py-4'>
                                            <a href={item.href}>{item.label}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='flex space-x-6' >
                                <a href="#" className='py-2 px-3 border rounded-md' >Sign In</a>
                                <a href="#" className='py-2 px-3 bg-linear-to-r  from-orange-500 to-orange-800 rounded-md'>
                                    Create an account
                                </a>
                            </div>
                        </div>
                    )
                }



            </div>
        </nav>
    );
};

export default Navbar;