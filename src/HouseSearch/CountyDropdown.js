import React, { useState, useContext } from 'react';

//icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from '../components/HouseContext';

const CountyDropdown = () =>{
    const { county, setCounty, counties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left'
            >
                <RiMapPinLine className='dropdown-icon-primary' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{county}</div>
                    <div className='text-[13px]'>Select your place</div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondary' />
                ) :(
                    <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
                {counties.map((county, index) =>{
                    return (
                        <Menu.Item
                            as='li'
                            onClick={() => setCounty(county)}
                            key={index}
                            className='cursor-pointer hover:text-violet-700 transition'>
                                {county}
                            </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    );
};

export default CountyDropdown;