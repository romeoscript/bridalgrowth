"use client"
import React, { useEffect, useRef } from 'react'
import ServiceCard from './ServiceCard'
import { people } from '@/public/Assets/'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Service = () => {
    const ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const element = ref.current

        // Set initial state
        gsap.set(".second-aside", { autoAlpha: 0, position: "absolute", top: 0, left: 0, right: 0 })

        // Create the reveal animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top top+=100",
                end: "bottom bottom",
                pin: true,
                pinReparent: true,
                markers: true,
                scrub: true,
            }
        })

        // Animate the first aside out and second aside in
        tl.to(".first-aside", { autoAlpha: 0, y: -50, duration: 1 })
        tl.to(".second-aside", { autoAlpha: 1, y: 0, duration: 1 }, "-=1")

        // Add staggered animations for service cards in the second aside
        tl.fromTo('.second-aside .service-card', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.2 }, "-=1")
    }, [])

    return (
        <section id='section'>
            <div className='relative py-[1rem] px-[2rem] w-4/5 m-auto h-screen' ref={ref}>
                <aside className='flex items-start justify-between first-aside'>
                    <div className='flex flex-col gap-4 justify-between h-full'>
                        <ServiceCard className='service-card' />
                        <ServiceCard className='service-card' />
                    </div>
                    <div className='flex-shrink-0'>
                        <img src={people.src} alt="" className='object-contain w-full h-auto' />
                    </div>
                </aside>
                <aside className='flex items-start gap-[9rem] my-[1rem] second-aside'>
                    <div className='flex flex-col gap-4 justify-between h-full'>
                        <ServiceCard className='service-card' />
                        <ServiceCard className='service-card' />
                    </div>
                    <div className='flex flex-col gap-4 justify-between h-full mt-[2rem]'>
                        <ServiceCard className='service-card' />
                        <ServiceCard className='service-card' />
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Service
