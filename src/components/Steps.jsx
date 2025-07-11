import React from 'react'
import { assets } from '../assets/assets'

export default function Steps() {
    return (
        <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
                Steps to remove background <br /> images in second
            </h1>
            <div className='flex flex-wrap md:flex-nowrap items-start gap-4 mt-16 xl:mt-24 '>
                <div className='flex items-start  gap-3 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                    <img className='max-w-9' src={assets.upload_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Upload Image</p>
                        <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later.<br/> this is a demo</p>
                    </div>
                </div>

                <div className='flex items-start  gap-3 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transiotion-all duration-500'>
                    <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Remove Background</p>
                        <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later.<br/> this is a demo</p>
                    </div>
                </div>

                <div className='flex items-start  gap-3 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transiotion-all duration-500'>
                    <img className='max-w-9' src={assets.download_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Download Image</p>
                        <p className='text-sm text-neutral-500 mt-1'>This is a demo text, will replace it later.<br/> this is a demo</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
