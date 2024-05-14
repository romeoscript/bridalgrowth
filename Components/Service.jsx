import React from 'react'
import ServiceCard from './ServiceCard'
import { people } from '@/public/Assets/'

const Service = () => {
    return (
        <div className='py-[1rem] px-[2rem] w-4/5 m-auto h-screen'>

            <aside className='flex items-start justify-between'>
                <div className='flex flex-col gap-4 justify-between  h-full'>
                    <ServiceCard />
                    <ServiceCard />
                </div>
                <div>
                    <img src={people.src} alt="" />
                </div>
            </aside>
            <aside className='flex items-start  gap-[9rem] my-[1rem]'>
                <div className='flex flex-col gap-4 justify-between  h-full'>
                    <ServiceCard />
                    <ServiceCard />
                </div>
                <div className='flex flex-col gap-4 justify-between  h-full mt-[2rem]'>
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </aside>

        </div>
    )
}

export default Service
