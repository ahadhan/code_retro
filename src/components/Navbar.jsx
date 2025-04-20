
import React, { useEffect, useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const NavItems = [
  { label: 'Services', link: '#services' },
  { label: 'About', link: '#about' },
  { label: 'Story', link: '#story' },
  { label: 'Contact', link: '#contact' }
];


const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying(prev => !prev);
    setIsIndicatorActive(prev => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-2 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 rounded-lg"
      style={{
        background: 'linear-gradient(-45deg, #1B0063, #1A0024, #1B0063, #1B0129)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img
              src="/img/logo1.png"
              alt="logo"
              className="w-10"
            />

            <Button
              id="portfolio-button"
              title="Portfolio"
              rightIcon={<TiLocationArrow />}
              containerClass="neon-button flex "
              redLink={"#about"}
            />

          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {NavItems.map((item) => (
                <a key={item.label} className="nav-hover-btn" href={item.link}>
                  {item.label}
                </a>
              ))}
            </div>


            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio ref={audioElementRef} src="/audio/loop.mp3" className="hidden" loop />
              {[1, 2, 3, 4].map(bar => (
                <div
                  key={bar}
                  className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
