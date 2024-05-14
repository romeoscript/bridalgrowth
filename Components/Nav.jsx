import React from 'react'
import { logo } from '@/public/Assets/';
import Icon from '@/Reusable/Icons';

const Nav = () => {
    return (
        <div className='bg-black h-[80px] flex justify-around items-center fixed w-full top-0'>
            <aside>
                <img src={logo.src} alt="" />
            </aside>
            <aside className='flex items-center gap-8'>
                <button className='text-white flex gap-2'>
                   
                    <span>Case studies</span>
                    <Icon type='arrowslant' />
                </button>
                <button className='bg-[#176FF5] px-[2rem] py-[0.5rem] rounded-full text-white'>
                Get a Quote
                </button>
            </aside>
        </div>
    )
}

export default Nav
