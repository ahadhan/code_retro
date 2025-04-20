import { a } from 'framer-motion/client'
import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass, redLink }) => {
    return (
        <a href={redLink}>
        <button id={id} className={`group realtive z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 bg-violet-200 text-black-100 ${containerClass} `}>
            {leftIcon}
            <span className='relative incline-flex overflow-hidden font-general text-xs uppercase flex gap-1 items-center'>
                <div>
                    {title}
                </div>
                {rightIcon}
            </span>
        </button>
        </a>
    )
}

export default Button