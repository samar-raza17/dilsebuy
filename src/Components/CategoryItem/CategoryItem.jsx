import React from 'react'
import laptop from '../../Images/Category/laptop.png'
import { useNavigate } from 'react-router-dom';
console.log(laptop);


const CategoryItem = ({image, name}) => {

  const navigate = useNavigate()

  return (
    <>
    <div className='cursor-pointer w-56 p-2 flex flex-col items-center'>
    <div className='w-36 h-36 rounded-full bg-[#00a6bb]'>
    <img src={image} className="w-full h-full rounded-full scale-110 object-cover object-center" onClick={(e) => navigate(`/${e.target.parentElement.nextElementSibling.textContent}`)} />
    </div>
    <h2 className='text-[22px] font-semibold'>{name}</h2>
    </div>
    </>
  )
}

export default CategoryItem