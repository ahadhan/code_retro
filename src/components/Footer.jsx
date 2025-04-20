import { footer } from 'framer-motion/client'
import React from 'react'
import { FaDiscord, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const links = [
  // { href: 'https://discrod.com', icon: <FaDiscord/>},
  { href: 'https://www.linkedin.com/in/ahad-khan-552325224/', icon: <FaLinkedin/>},
  { href: 'https://github.com/ahadhan', icon: <FaGithub/>},
  { href: 'https://wa.link/cx6sh3', icon: <FaWhatsapp/>},
] 

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm md:text-left'>
          &copy; RetroCode 2025. All rights reserved.
        </p>
        <div className='flex justify-center gap-4 md:justify-start'>
          {links.map((link) => (
            <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black  transition-colors duration-500 ease-in-out hover:text-white'> 
              {link.icon}
            </a>
          ))}
        </div>

          <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right"> 
            Privacy Policy
          </a>
        
      </div>
    </footer>
  )
}

export default Footer