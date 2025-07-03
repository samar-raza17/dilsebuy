import React, {useState, useEffect} from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard'

const TestimonialArea = () => {

  const testimonialUsers = [
    {
      name: "Bilal Raza",
      image: "https://avatars.githubusercontent.com/u/26040872?v=4",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at dolor, et vitae nulla cumque natus molestiae excepturi odio quae."
    },
    {
      name: "Ghous Ahmed",
      image: "https://avatars.githubusercontent.com/u/25761034?v=4",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at dolor, et vitae nulla cumque natus molestiae excepturi odio quae."
    },
    {
      name: "Siddique Ahmed",
      image: "https://avatars.githubusercontent.com/u/153608121?v=4",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at dolor, et vitae nulla cumque natus molestiae excepturi odio quae."
    },
    {
      name: "Samar Raza",
      image: "https://avatars.githubusercontent.com/u/160308566?v=4",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at dolor, et vitae nulla cumque natus molestiae excepturi odio quae."
    },
  ]

  return (
    <div className='mt-10'>
        <h1 className='text-3xl mb-10 text-center font-semibold text-[#00a6bb]'>OUR CUSTOMERS</h1>
    <div className='w-full flex justify-center flex-wrap gap-y-5'>
    {
      testimonialUsers.map((data, index) => {
        return(
        <TestimonialCard key={index} image={data.image} name={data.name} message={data.desc}/>
        )
      })
    }
        </div>
    </div>
  )
}

export default TestimonialArea