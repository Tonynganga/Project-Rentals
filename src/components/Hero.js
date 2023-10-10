import React from 'react';

import Search from '../HouseSearch/Search';

import Heading from '../Headings/Heading';
import './Main.css';
import HeroImage from '../assets/img/Hero.jpg';


const Hero = () => {
    return (
        <>
            <section className="hero"
                                style={{
                                    backgroundImage: `url(${HeroImage})`
                                  }}>
                <div className='hero-container'>
                    <Heading  title='Find Your Next Apartment' subtitle='Search for comfortable and featured apartments in your local area.'/>
                    <div>
                        <Search />
                    </div>
                    
                </div>
            </section>
        </>
    )

}

export default Hero;