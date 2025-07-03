import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <>
    <section className="bg-white min-h-screen flex justify-center items-center">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-500">
        404
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-[#00a6bb] md:text-4xl">
        Page not Found
      </p>
      <p className="mb-4 text-lg font-semibold text-black">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.{" "}
      </p>
      <Link
        to="/"
      >
        <button className='bg-[#00a6bb] text-white px-6 h-[50px] rounded-lg font-semibold border-2 border-[#00a6bb] hover:bg-transparent hover:text-[#00a6bb]'>
        Back to Homepage
        </button>
      </Link>
    </div>
  </div>
</section>

    </>
  )
}

export default NoPage