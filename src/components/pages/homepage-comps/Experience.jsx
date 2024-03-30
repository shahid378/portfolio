import React from "react"
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
const experience = () =>{
    return (
        <section name='Experience'
        className='relative w-full md:h-screen text-white h-unset'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                <div className='pb-8'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>Experience</h2>
                </div>

            
        </div>
            <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    )
}
export default experience