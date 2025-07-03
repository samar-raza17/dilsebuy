import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
  <footer className="text-white body-font bg-[#00a6bb] mt-20">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <Link to='/'>
    <h1 className='font-bold text-white text-4xl'>Dil<span className='text-[#ffcfd0]'>SE</span>BUY</h1>
    </Link>
      <p className="mt-2 text-sm text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, nisi.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link to='/fashion' className="text-white hover:text-white hover:underline cursor-pointer">Fahion</Link>
          </li>
          <li>
            <Link to='/shirt' className="text-white hover:text-white hover:underline cursor-pointer">Shirt</Link>
          </li>
          <li>
            <Link to='/jacket' className="text-white hover:text-white hover:underline cursor-pointer">Jacket</Link>
          </li>
          <li>
            <Link to='/mobile' className="text-white hover:text-white hover:underline cursor-pointer">Mobile</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link to='/laptop' className="text-white hover:text-white hover:underline cursor-pointer">Laptop</Link>
          </li>
          <li>
            <Link to='/shoes' className="text-white hover:text-white hover:underline cursor-pointer">Shoes</Link>
          </li>
          <li>
            <Link to='/home' className="text-white hover:text-white hover:underline cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to='/books' className="text-white hover:text-white hover:underline cursor-pointer">Books</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          OUR CUSTOMERS
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link to='https://github.com/bilalattari' target='_blank' className="text-white hover:text-white hover:underline cursor-pointer">Bilal Attari</Link>
          </li>
          <li>
            <Link to='https://github.com/ghousahmed' target='_blank' className="text-white hover:text-white hover:underline cursor-pointer">Ghous Ahmed</Link>
          </li>
          <li>
            <Link to='https://github.com/siddique-ahmed' target='_blank' className="text-white hover:text-white hover:underline cursor-pointer">Siddique Ahmed</Link>
          </li>
          <li>
            <Link to='https://github.com/samar-memon' target='_blank' className="text-white hover:text-white hover:underline cursor-pointer">Samar Raza</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          SOCIAL MEDIA
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link to='https://github.com/samar-memon' target='_blank' className="text-white hover:text-white hover:underline cursor-pointer"><i className="fa-brands fa-github"></i> GITHUB</Link>
          </li>
          <li>
            <Link to='https://instagram.com/samar_raza_56' target='_blank' className="text-white hover:text-white hover:underline cursor-pointer"><i className="fa-brands fa-instagram"></i> INSTAGRAM</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-[#ffcfd0]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-black text-sm text-center sm:text-left">
        © 2024 DilSEBUY —
        <Link to='https://github.com/samar-memon'
          rel="noopener noreferrer"
          className="text-black ml-1"
          target="_blank"
        >
          @Samar-Memon
        </Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link to='' className="text-black">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </Link>
        <Link to='' className="ml-3 text-black">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </Link>
        <Link to='' className="ml-3 text-black">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </Link>
        <Link to='' className="ml-3 text-black">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer