import React from 'react'
import { assets, plans } from '../assets/assets'

export default function BuyCredit() {
    return (
        <div className='min-h-[80vh] mb-10 text-center pt-14'>
          <button className='border border-gray-400 px-10 py-2 mb-6 rounded-full '>Our Plan</button>
          <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Chosse the plan that's right for you</h1>
          <div className='flex flex-wrap justify-center gap-6 text-left'>
            {plans.map((item,index)=>(
              <div className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500' key={index}>
                <img src={assets.logo_icon} alt="" />
                <p className='font-semibold mt-3' >{item.id}</p>
                <p className='text-sm'>{item.desc}</p>
                <p className='mt-6'>
                  <span className='text-xl font-medium'>${item.price}</span>/{item.credits} credits
                </p>
                <button className='w-full bg-gray-800 text-white rounded-md min-w-52 py-2 mt-8 text-sm'>Purchase</button>
              </div>
            ))}
          </div>
        </div>
  )
}
