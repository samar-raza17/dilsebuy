import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../Context/Context';
import { auth, signOut } from '../../FireBase/firebase';


const Navbar = () => {

  const [toggleBtn, setToggleBtn] = useState(false)
  const [getLocals, setGetLocals] = useState(false)

  const {isUser} = useContext(UserContext);

  useEffect(() => {
    if(isUser){
      setGetLocals(true)
    }else{
      setGetLocals(false)
    }
  }, [isUser])

  const navigate = useNavigate();

  const navBarUL = (
  <>
    <ul className={
      toggleBtn ? "text-[#ffcfd0] font-bold text-[18px] flex flex-col gap-5 md:flex-row absolute top-[8vh] right-0 bg-[#00a6bb] w-[200px] text-center md:bg-none md:w-auto py-4 md:static transition-all duration-[400ms]" : "text-[#ffcfd0] font-bold text-[18px] md:flex flex-col gap-5 md:flex-row absolute top-[-1000%] right-0 bg-[#00a6bb] w-[200px] text-center md:bg-none md:w-auto py-4 md:static transition-all duration-[400ms]"
    }>
    <li className='border-b-[3px] border-transparent hover:border-[#ffcfd0]'>
      <Link to={'/'}>
        Home
      </Link>
    </li>
    <li className='border-b-[3px] border-transparent hover:border-[#ffcfd0]'>
      <Link to={'/allproduct'}>
        All Product
      </Link>
    </li>
    <li className='border-b-[3px] border-transparent hover:border-[#ffcfd0]'>
      <Link to={'/cartitems'}>
        Cart Items
      </Link>
    </li>
      {
        !getLocals ? <li className='border-[3px] border-transparent hover:border-[#ffcfd0] hover:bg-transparent hover:text-[#ffcfd0] text-[#00a6bb] px-2 rounded-sm bg-[#ffcfd0]'>
        <Link to={'/signup'}>
          SignUp
        </Link>
    </li> : location.pathname != '/signup' && location.pathname != '/login' &&  <li onClick={() => {
      signOut(auth).then(() => {
        navigate('/')
      }).catch((error) => {
        console.error('Error signing out: ', error);
      });
    }} className='border-[3px] border-transparent hover:border-[#ffcfd0] hover:bg-transparent hover:text-[#ffcfd0] text-[#00a6bb] px-2 rounded-sm bg-[#ffcfd0]'>
      <button>
        <i className="fa-solid fa-right-from-bracket"></i> LogOut
      </button>
    </li>
      }

  </ul>

  <div className="toggle md:hidden text-[30px] text-[#ffcfd0] cursor-pointer border-[#ffcfd0]" onClick={()=>setToggleBtn(!toggleBtn)}><i className={toggleBtn ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></div>
  </>

  )
  return (
    <>
    <nav className='h-[8vh] px-2 bg-[#00a6bb] text-white flex justify-between items-center fixed top-0 left-0 w-full z-50'>
    <Link to='/'>
    <h1 className='font-bold text-4xl'>Dil<span className='text-[#ffcfd0]'>SE</span>BUY</h1>
    </Link>
    {navBarUL}
    </nav>
    </>
  )
}

export default Navbar