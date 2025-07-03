import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signInWithEmailAndPassword } from '../../../FireBase/firebase'
import { toast } from 'react-toastify'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const formSubmitted = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sessionStorage.setItem('E-react-user_email', user.email)
            navigate('/')
        })
        .catch((error) => {
            toast.error(error.code.split('/')[1].split('-').join(' '), {
                autoClose: 500
            })
        });
    }

  return (
    <>

    <Layout>
    <section className="bg-gray-50 h-[100vh] flex justify-center items-center">
  <div className="px-1 py-8 max-w-[500px] w-full lg:py-0">
    <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-[#00a6bb] md:text-2xl">
          Login your Account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={formSubmitted}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#00a6bb]"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#00a6bb]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#00a6bb] hover:bg-transparent hover:text-[#00a6bb] border-2 border-[#00a6bb] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login account
          </button>

          <p className='text-center'>Don't have an <Link className='text-[#00a6bb] font-semibold hover:underline' to={'/signup'}>Account?</Link></p>

        </form>
      </div>
    </div>
  </div>
</section>

    </Layout>
    </>
  )
}

export default Login