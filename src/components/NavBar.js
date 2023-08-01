import React from 'react'
import { Link, Router, Routes } from 'react-router-dom'
import {motion} from 'framer-motion'


const CustomLink = ({ href, title, className = '' }) => {
  const router = Router();
  
  return (
    <Link to={href}>
      {title}
      <span className={`h-[1px] inline-block bg-darl absolute left-0 -bottom-0.5
      group-hover: w-full transition-[width ease duration-300 
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        
        
        nbsp;
      </span>
    </Link>
   
  )
}

export const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <a href='/'> Home </a>
        <a className='mx-4'> About </a>
        <a className='mx-4'> Articles </a>
        <a className='ml-4'> Projects </a>
      </nav>
    </header>
  )
}
