import React from 'react';

//pages
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
import Hero from '../components/Hero';

const Home = () =>{
    return (
        <div className='min-h-[1800px'>
            <Banner />
            <Hero />
            <HouseList />
        </div>
    )
}

export default Home;