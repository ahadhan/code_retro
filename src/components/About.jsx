

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className='relative mb-9 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to RetroCode</h2>

        <AnimatedTitle title="Tech <b> Enthusiast</b>, <br /> Innovator, and Builder" containerClass='mt-5 !text-black text-center' />

        <div className='about-subtext'>
          <p>Our Mission is to create impactful websites and AI-powered  </p>
          <p>chatbots that make life easier, more fun, and more interactive</p>
        </div>
      </div>

      <div className='h-dvh w-screen' id='clip'>
        <div className='mask-clip-path about-image'>
          {/* Using video instead of image */}
          <video
            src={'https://res.cloudinary.com/dq6dotbrs/video/upload/v1745140450/about_qjo6w4.mp4'}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
