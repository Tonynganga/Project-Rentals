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
    const { houses, loading } = useContext(HouseContext);

    if(loading){
        return (
            <ImSpinner className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
        );
    }
}

export default HouseList;