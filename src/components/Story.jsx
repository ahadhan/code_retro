import { section } from 'framer-motion/client'
import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import RoundedCorners from './RoundedCorners'
import Button from './Button'
import { TiLocationArrow } from "react-icons/ti";


const Story = () => {

    const frameRef = useRef(null)

    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            transformPerspective: 500,
            ease: "power1.inOut",
        })
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.out",
        })
    }
    return (

        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className='flex size-full flex-col items-center py-10 pb-24'>
                <p className='font-general text-sm uppercase md:text-[10px]'>the multiverse of technologies </p>

                <div className="relative size-full">
                    <AnimatedTitle
                        title="The Story that<br />  inspire thousands"
                        sectionId="#story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 "
                    />

                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/logo1.png"
                                    alt="story"
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <RoundedCorners />
                    </div>

                </div>

                <div className="-mt-92 flex w-full justify-center md:-mt-84  md:me-44 md:justify-end">
                    <div className='flex h-full w-fit flex-col items-center md:items-start'>
                        <p className='mt-5 max-w-sm text-left font-circular-web mx-2'>
                            I am a passionate developer with a strong background in web and mobile development. My journey began with a fascination for technology, and it has evolved into a deep commitment to creating innovative solutions that make a difference. I thrive on challenges and constantly seek opportunities to learn and grow in this ever-evolving field. My goal is to leverage my skills and creativity to build applications that not only meet user needs but also inspire others to embrace the power of technology.
                        </p>

                        <div id='contact' className="icons mt-10 flex space-x-5 w-fit">

                            <div className="icon-container w-12 cursor-pointer">
                                <a
                                    href="https://github.com/ahadhan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-container w-12 cursor-pointer"
                                >
                                    <img src="img/github.webp" alt="github" className='icon ' />
                                </a>
                            </div>

                            <div className="icon-container w-12 cursor-pointer">
                                <a
                                    href="https://www.linkedin.com/in/ahad-khan-552325224/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-container w-12 cursor-pointer"
                                >
                                    <img src="img/linkedin.webp" alt="linkedin" className='icon' />
                                </a>
                            </div>
{/* 
                            <div className="icon-container w-12 cursor-pointer">
                                <a
                                    href="https://instagram.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-container w-12 cursor-pointer"
                                >
                                    <img src="img/instagram.webp" alt="instagram" className='icon' />
                                </a>
                            </div> */}

                            <div className="icon-container w-12 cursor-pointer">
                                <a
                                    href="https://wa.link/cx6sh3" // or your WhatsApp Business link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-container w-12 cursor-pointer"
                                >
                                    <img src="img/whatsapp.webp" alt="instagram" className='icon' />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    )
}

export default Story