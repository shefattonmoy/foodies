import React from 'react'
import Button from '../../layouts/Button';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/img1.jpg')] bg-cover bg-no-repeat">
            <div className='w-full lg:w-2/3 space-y-5'>
                <h1 className='text-white font-semibold text-6xl'>Satisfy Your Cravings and Elevate Your Soul...</h1>
                <p className='text-white'>
                    Delight in a symphony of tastes at our establishment,
                    where every dish is a carefully crafted masterpiece.
                    Our menu is a testament to the artistry of flavors,
                    inviting you to embark on a culinary adventure that explores
                    the boundaries of taste and texture,
                    promising a dining experience like no other.
                </p>
                <div className='lg:pl-44'>
                    <Button title="Order Now"></Button>
                </div>
            </div>
        </div>
    );
};

export default Home;