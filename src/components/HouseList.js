import React, { useContext } from "react";

//context
import { HouseContext } from "./HouseContext";

//components
import House from "./House";

//icons
import { ImSpinner } from 'react-icons/im';

//link
import { Link } from "react-router-dom";

const HouseList = () => {
    const { houses2, loading } = useContext(HouseContext);

    if(loading){
        return (
            <ImSpinner className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
        );
    }

    if(houses2.length < 1){
        return (
            <div className='text-center text-3xl text-gray-400 mt-48'>
                Sorry, nothing was found
            </div>
        );
    }

    return (
        <section className='mb-20 mt-[20px]'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {houses2.map((house, index) => {
                        return (
                            <Link to={`/subLocation/${house.id}`}key={index}>
                                <House house={house} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HouseList;