import Icon from '@/Reusable/Icons'
import React from 'react'

const ServiceCard = () => {
    return (
        <section className='relative'>
            <div className='border-[1px] border-blue-500 rounded-md p-[25px]  w-[340px]'>
                <Icon type="magnify" />
                <h2 className='font-bold text-capitalize text-2xl my-[0.5rem]'>Keyword Research</h2>
                <p className='text-md text-gray-500'>Identifying relevant keywords for your business to optimize website content.</p>
            </div>
        </section>
    )
}

export default ServiceCard
