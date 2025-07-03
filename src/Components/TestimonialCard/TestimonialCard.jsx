import React, {useState, useEffect} from 'react'
import laptop from '../../Images/Category/laptop.png'
import {  } from 'react-router-dom'

const TestimonialCard = ({name, image, message}) => {
     return (
    <>
    <div className="max-w-sm w-full flex flex-col gap-1 items-center">
      <img src={image} className="w-40 p-1 bg-[#00a6bb] rounded-full cursor-pointer" />
        <h2 className="text-2xl font-semibold text-[#00a6bb]">{name}</h2>
        <div className="stars flex gap-3">
            <i className="fa-solid fa-star text-orange-500"></i>
            <i className="fa-solid fa-star text-orange-500"></i>
            <i className="fa-solid fa-star text-orange-500"></i>
        </div>
        <p className="text-[18px] text-center">{message}</p>
    </div>
    </>
  )
}

export default TestimonialCard