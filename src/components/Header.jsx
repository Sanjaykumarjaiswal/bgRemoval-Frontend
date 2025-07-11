import React from 'react'
import { assets } from '../assets/assets'

export default function Header() {
    return (
        <div  className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
            {/*----Left Side---*/ }
            <div>
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
                    Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'> background</span> from <br className='max-md:hidden' /> images for free
                </h1>
                <p className='text-[15px] my-6 text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br className='max-md:hidden'/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div>
                    <input type="file" id='upload1' hidden/>
                    <label className='inline-flex px-8 py-3.5 bg-gradient-to-r from-purple-600 to-fuchsia-500 gap-3 rounded-full cursor-pointer transition-all duration-700 m-auto hover:scale-105' htmlFor="upload1">
                        <img width={20} src={assets.upload_btn_icon} alt="" />
                        <p className='text-white text-sm'>Upload Your Image</p>
                    </label>
                </div>
            </div>
            {/*----Right Side---*/ }
            <div className='w-full max-w-md'>
                <img src={assets.header_img} alt="" />
            </div>

        </div>
    )
}
