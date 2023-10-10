import React, { useState, useContext } from 'react';

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from '../components/HouseContext';

const PriceRangeDropdown = () => {
    const {price, setPrice } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
            value: 'Price range (any)',
          },
          {
            value: '1000 - 2000',
          },
          {
            value: '3000 - 4000',
          },
          {
            value: '5000 - 6000',
          },
          {
            value: '7000 - 8000',
          },
          {
            value: '9000 - 10000',
          },
          {
            value: '10000 - 20000',
          },
    ];
    return (
        <Menu as='div' className='dropdown-relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full'
            >
                <RiWallet3Line className='dropdown-icon-primary' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>{price}</div>
                    <div className='text-[13px]'>Select price Range</div>
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondary' />
                ) : (
                    <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
            </Menu.Button>    

            <Menu.Items className='dropdown-menu'>
                {prices.map((price, index) =>{
                    return (
                        <Menu.Item
                            as='li'
                            onClick={() => setPrice(price.value)}
                            key={index}
                            className='cursor-pointer hover:text-violet-700 transition'
                        >
                            {price.value}
                        </Menu.Item>    
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}

export default PriceRangeDropdown;