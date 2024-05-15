import React from 'react'
import ClientCard from './ClientCard'

const People = () => {
    return (
        <div className='bg-[#010814] text-white p-[4rem]'>
            <h2 className='text-4xl w-1/5 my-[1rem] font-bold'>What a few clients say</h2>
            <div className='grid grid-cols-3 gap-8'>
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
            </div>
        </div>
    )
}

export default People
