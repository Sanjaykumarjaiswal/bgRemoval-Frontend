import React from 'react'
import { assets } from '../assets/assets'

export default function Upload() {
    return (
        <div className='pb-16'>
            {/* Title */}
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-12 sm:mb-4 py-6 md:py-16 '>
                See the Magic. Try Now!
            </h1>
            <div className='text-center'>
                    <input type="file" id='upload2' hidden/>
                    <label className='inline-flex px-8 py-3.5 bg-gradient-to-r from-purple-600 to-fuchsia-500 gap-3 rounded-full cursor-pointer transition-all duration-700 m-auto hover:scale-105' htmlFor="upload2">
                        <img width={20} src={assets.upload_btn_icon} alt="" />
                        <p className='text-white text-sm'>Upload Your Image</p>
                    </label>
            </div>
        </div>
    )
}
