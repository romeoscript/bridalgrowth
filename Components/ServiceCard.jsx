import React from 'react'
import Icon from '@/Reusable/Icons'// Assuming you have an Icon component

const ServiceCard = ({ iconText, title, text }) => {
    return (
        <section className='relative transition-transform duration-300 ease-in-out hover:scale-[1.1] cursor-pointer'>
            <div className='border-[1px] border-blue-500 rounded-md p-[25px] w-[340px]'>
                <Icon type={iconText} />
                <h2 className='font-bold text-capitalize text-2xl my-[0.5rem]'>{title}</h2>
                <p className='text-md text-gray-500'>{text}</p>
            </div>
        </section>
    )
}

export default ServiceCard
