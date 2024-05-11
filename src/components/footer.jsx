import { RiCopyrightLine } from '@remixicon/react'
import React from 'react'

export const Footer = () => {
  return (
    <div className='absolute bottom-0 w-full bg-green-100 flex justify-center items-center gap-3 text-sm'>
        <RiCopyrightLine className='inline' size={15}/> Designed and developed by <a className=' text-blue-400' href="https://github.com/Tanish2207">Tanish</a>
    </div>
  )
}
