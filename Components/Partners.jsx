import Icon from '@/Reusable/Icons'
import React from 'react'

const Partners = () => {
    return (
        <section className='my-[4rem]'>
            <p className='text-center uppercase'>our partners</p>
            <div className='flex gap-4 items-center py-[2rem]  justify-around w-4/5 m-auto'>
                <Icon type='convert' />
                <Icon type='goedu' />
                <Icon type='microsoft' />
                <Icon type='yelp' />
                <Icon type='taboola' />
                <Icon type='googlelogo' />
                {/* <Icon type='convert' /> */}
            </div>
        </section>
    )
}

export default Partners
