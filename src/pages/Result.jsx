import React from 'react'
import { assets } from '../assets/assets'

export default function Result() {
    return (
        <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
            <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
                {/* Image Container */}
                <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
                    {/* left Side */}
                    <div>
                        <p className='font-semibold text-gray-600 mb-2'>Original</p>
                        <img className='rounded-md border' src={assets.image_w_bg} alt="" />
                    </div>

                    {/* Right Side */}
                    <div className='flex flex-col'>
                        <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
                        <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden '>
                            {/* <img  src={assets.image_wo_bg} alt="" /> */}
                            <div className='absolute right-1/2 bottom-1/2 transfrom translate-x-1/2 translate-y-1/2 '>
                                <div className='border-4 border-violet-400 h-12 w-12 rounded-full border-t-transparent animate-spin'></div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Buttons */}
                <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
                    <button className='px-8 py-2.5 text-violet-600 text-sm border rounded-full border-violet-600 hover:scale-105 transition-all duration-700 '>Try Another Image</button>
                    <a href="" className='px-8 py-2.5 text-sm text-white border bg-gradient-to-r from-violet-600 to bg-fuchsia-500 rounded-full transition-all hover:scale-105 duration-700 '>Downlaod Image</a>
                </div>
            </div>

        </div>
    )
}
