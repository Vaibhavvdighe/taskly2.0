import React from 'react'

const Footer = () => {
  return (
    <div className='bg-zinc-300 text-zinc-500 pt-2 m-0 md:text-xs text-[10px] w-full'>
      <ul className='links flex justify-center gap-2'>
        <li className='hover:underline cursor-pointer hover:text-zinc-700'>Privacy Policy</li>
        <span>|</span>
        <li className='hover:underline cursor-pointer hover:text-zinc-700'>Terms of Service</li>
        <span>|</span>
        <li className='hover:underline cursor-pointer hover:text-zinc-700'>Contact me</li>
      </ul>
      <ul className="copyright flex flex-col items-center py-2">
        <li>© 2025 Taskly. All rights reserved.</li>
        <li>Developed by Vaibhav Vikas Dighe</li>
      </ul>
    </div>
  )
}

export default Footer
