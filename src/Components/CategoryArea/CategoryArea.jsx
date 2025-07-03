import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import '../../App.css'

const CategoryArea = () => {
  const categoryArr = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
]
  return (
    <>
    <div className=' mt-7'>
        <h1 className='text-3xl mb-4 text-center font-semibold text-[#00a6bb]'>Category Area</h1>
        <div className='w-full px-2 flex overflow-x-auto hide-scroll-bar gap-10'>
            {
              categoryArr.map((data, index)=> {
                return(
                <CategoryItem image={data.image} name={data.name} key={index}/>
                )
              })
            }
        </div>
    </div>
    </>
  )
}

export default CategoryArea