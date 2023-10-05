import React from 'react';

import Heading from '../Headings/Heading';
import './Hero.css';


const Hero = () => {
    return (
        <>
            <section className="bg-cover bg-center bg-no-repeat h-[90vh] w-full"
                                style={{
                                    backgroundImage: "url('../../../../public/images/banner.png')",
                                  }}>
                <div className='container'>
                    <Heading title='Find Your Next Apartment' subtitle='Search for comfortable and featured apartments in your local area.'/>
                </div>
            </section>
        </>
    )

}

export default Hero;