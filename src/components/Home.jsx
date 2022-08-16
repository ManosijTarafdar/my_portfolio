import React from 'react';
import HeroImage from '../assets/heroimage.jpg';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-2xl sm:text-4xl text-white'>CSE UG Student at MCKV Institute of Engineering</h2>
                    <p className='text-gray-500 py-3 max-w-md'>Interested towards DBMS ,Backend-Development and Software Development Roles.Currently, I love to work on real life implementation softwares.
                    </p>
                    <h3 className='max-w-md text-xl text-white'>"Solve it rather than complaining."</h3>
                </div>
                <div>
                    <img src={HeroImage} alt="My profile" className='w-1/2 md:w-full rounded-full mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default Home;