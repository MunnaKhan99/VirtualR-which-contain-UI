// import React, { useState } from 'react';
// import logo from '../assets/logo.png'
// import { navItems } from '../constants/index'
// import { Menu, X } from "lucide-react"

// const Practice = () => {
//     const [drawerOpen, setDrawerOpoen] = useState(false);
//     const toggle = () => {
//         setDrawerOpoen(!drawerOpen);
//     }
//     return (
//         <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
//             <div className='container px-4 mx-auto  text-sm'>
//                 <div className='flex justify-between items-center'>

//                     <div className='flex items-center shrink-0'>
//                         <img src={logo} alt="" className='h-10 w-10' />
//                         <span>VirtualR</span>
//                     </div>
//                     <div className='lg:flex space-x-4 hidden'>
//                         {
//                             navItems.map((data, index) => (
//                                 <a key={index} href={data.href}>{data.label}</a>
//                             ))

//                         }
//                     </div>
//                     <div className='hidden lg:flex space-x-12 items-center'>
//                         <a href="" className='px-3 py-2 border rounded-md'>Sign In</a>
//                         <a href="" className='px-3 py-2 border rounded-md bg-linear-to-r from-orange-500 to-orange-800'>Create An Account</a>
//                     </div>

//                     {/* drawer */}
//                     <div className='md:flex justify-end lg:hidden'>
//                         <button onClick={toggle}>
//                             {
//                                 drawerOpen ? <X /> : <Menu />
//                             }
//                         </button>

//                     </div>
//                 </div>
//                 {
//                     drawerOpen && (
//                         <div className='fixed right-0 z-20 bg-neutral-900 w-full flex flex-col justify-center items-center lg:hidden'>
//                             <ul>
//                                 {
//                                     navItems.map((data, index) => (
//                                         <li key={index}>
//                                             <a href={data.href}>{data.label}</a>
//                                         </li>
//                                     ))

//                                 }
//                             </ul>
//                             <div className='flex space-x-6'>
//                                 <a href="" className='py-2 px-3 border rounded-md'>Sign In</a>
//                                 <a href="" className='py-2 px-3 border rounded-md bg-linear-to-r from-orange-500 from-orange-800'>Create your Account</a>
//                             </div>
//                         </div>
//                     )
//                 }



//             </div>

//         </nav>
//     );
// };

// export default Practice;