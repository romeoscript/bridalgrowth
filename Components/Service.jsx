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
        gsap.set(".second-aside", { autoAlpha: 0, y: 50, position: "absolute", top: 0, left: 0, right: 0 })

        // Create the reveal animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top top+=180",
                end: "bottom bottom",
                pin: true,
                pinReparent: true,
                scrub: true,
            }
        })

        // Animate the first aside out very slowly and second aside in
        tl.to(".first-aside", { autoAlpha: 0, y: -100, duration: 5, ease: "power3.inOut" })
        tl.to(".second-aside", { autoAlpha: 1, y: 0, duration: 2, ease: "power3.inOut" }, "-=2")

        // Add staggered animations for service cards in the second aside
        tl.fromTo('.second-aside .service-card', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 2, stagger: 0.5, ease: "power3.inOut" }, "-=1")
    }, [])

    return (
        <section id='section'>
            <div className='relative py-[1rem] px-[2rem] w-4/5 m-auto h-screen' ref={ref}>
                <aside className='flex items-start justify-between first-aside'>
                    <div className='flex flex-col gap-4 justify-between h-full'>
                        <ServiceCard
                            title="Keyword Research"
                            text='Identifying relevant keywords for your business to optimize website content.'
                            iconText='magnify'
                            className='service-card' />
                        <ServiceCard
                            title="Technical SEO"
                            text='Optimizing website structure, content, and HTML elements to improve search engine rankings.'
                            iconText='seo'
                            className='service-card' />
                    </div>
                    <div className='flex-shrink-0'>
                        <img src={people.src} alt="" className='object-contain w-full h-[700px]' />
                    </div>
                </aside>
                <aside className='flex items-start gap-[9rem] my-[1rem] second-aside'>
                    <div className='flex flex-col gap-4 justify-between h-full'>
                        <ServiceCard
                            iconText="optimize"
                            title="On & Off Page Optimization"
                            text="Optimizing website structure, content, and HTML elements to improve search engine rankings.
                        Building backlinks from authoritative websites to increase domain authority and improve search visibility."
                            className='service-card' />
                        <ServiceCard
                            title="Content Marketing"
                            iconText="content"
                            text="Creating high-quality, relevant content to attract and engage target audiences while also improving search rankings."
                            className='service-card' />
                    </div>
                    <div className='flex flex-col gap-4 justify-between h-full mt-[2rem]'>
                        <ServiceCard
                            text="Creating a comprehensive plan aligned with business goals and target audience."
                            title="Strategy development"
                            iconText="strategy"
                            className='service-card' />
                        <ServiceCard
                            text="Designing visually appealing and engaging email templates."
                            title="Email Campaign Design"
                            iconText="campaign"
                            className='service-card' />
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Service
