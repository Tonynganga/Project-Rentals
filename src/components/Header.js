import React, { useState } from 'react';

import { nav } from '../data'
import { Link } from 'react-router-dom';
import LogoImage from '../assets/img/MainLogo.png';


const Header = () =>{

    const [navList, setNavList] = useState(false);

    return (
            <header className='bg-white h-[12vh] shadow-md sticky top-0 z-50'>
                <div className='flex justify-between items-center mr-[45px]'>
                    <div className='h-24 pt-0'>
                        <img src={ LogoImage } alt='' className='rounded-full object-scale-down max-w-max h-full'/>
                    </div>
                    <div className='py-5px'>
                        <ul className={ navList ? "small" : "flex"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link className='ml-7 transition duration-500 font-medium text-gray-700 hover:text-green-500' to={list.path}>{list.text}</Link>
                                </li>
                            ))} 
                        </ul>
                    </div>
                    <div className='button flex'>
                        <h4 className='font-medium mr-5'>
                            <span className='w-auto px-6 bg-green-500 rounded-full text-white mr-4 font-normal'>2</span> My List
                        </h4>
                        <button className='btn1'>
                            <i className='fa fa-sign-out'></i>Sign In
                        </button>
                    </div>
                    
                    <div className='hidden'>
                        <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i>:<i className='fa fa-bars'></i>}</button>
                    </div>
                </div>
            </header>
        
    )

}

export default Header;
