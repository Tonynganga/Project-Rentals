import React from 'react';

//pages
import HouseList from '../components/HouseList';
import Hero from '../components/Hero';
import Search from '../HouseSearch/Search';

const Home = () =>{
    return (
        <div className='min-h-[1800px'>
            <Hero />
            <HouseList />
        </div>
    )
}

export default Home;