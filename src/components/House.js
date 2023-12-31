import React from "react";
import {HTTP_API_PATH} from "../utils"
import LogoImage from '../assets/img/MainLogo.png';

import './Main.css';
import { BiBed, BiBath} from 'react-icons/bi';

// import {BiArea} from 'react-icons/bi';

const House = ({ house }) => {
    return(
        <div className="bg-white shadow-1 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
            <img className="mb-8" src={'/static'+house.thumbnail_url} alt="" />
            <div className='mb-4 flex gap-x-2 text-sm'>
                <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
                    { house.sub_location_name }
                </div>
                <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
                    { house.location_name }
                </div>
            </div>
            <div className='text-lg font-semibold max-w-[260px]'>
                { house.name }
            </div>
            <div className='flex gap-x-4 my-4'>
                <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px] rounded-full'>
                        <BiBed />
                    </div>
                    <div className='text-base'>
                        { house.bedrooms }
                    </div>
                </div>
                <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px] rounded-full'>
                        <BiBath />
                    </div>
                    <div className='text-base'>{house.bathrooms}</div>
                </div>
                {/* <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px] rounded-full'>
                        <BiArea />
                    </div>
                    <div className='text-base'>{ house.surface }</div>
                </div> */}
            </div>
            <div className='text-lg font-semibold text-violet-600 mb-4'>
                Ksh { house.rent_amount_minimum }
            </div>

        </div>
    );

}

export default House;