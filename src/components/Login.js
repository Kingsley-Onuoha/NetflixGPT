import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = ()=> {
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header />
        <div className='absolute '>
            <img 
                className='bg-gradient-to-b from-black'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/ea4e3067-609b-4f51-a5ae-88663802fbfc/NG-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                alt='background-img'
            />
        </div>
        <form className=' absolute px-5 p-2 bg-black bg-opacity-80 w-1/3 my-12 mx-auto right-0 left-0 text-white'>
            <div className=' p-2 items-center justify-center'>
                <h1 className='font-bold text-sm my-2'>{ isSignInForm? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && (<input 
                    type='text' 
                    placeholder='Full Name (Surname, First Name)'
                    className='py-1 px-1 w-full text-xs font-thin my-2 text-white bg-slate-900 border border-white rounded' 
                />)}
                <input 
                    type='text' 
                    placeholder='Email Address'
                    className='py-1 px-1 w-full text-xs font-thin my-2 text-white bg-slate-900 border border-white rounded' 
                /> 
                <input 
                    type='password' 
                    placeholder='Password'
                    className='my-2 p-1 px-2 w-full text-xs font-thin text-white bg-slate-900  border border-white rounded' 
                />
                <button className='my-2 p-1 text-xs bg-red-600 w-full font-thin rounded'>
                { isSignInForm? 'Sign In' : 'Sign Up'}
                </button>
                <span className='text-xs flex flex-row my-2'>
                    <p>{isSignInForm? "New to Netflix?": "Already Registered?"}</p>
                    <p className='mx-2  cursor-pointer hover:underline underline-offset-4' onClick={toggleSignInForm}>{isSignInForm? "Sign up Now": "Sign In Now"}</p>
                </span>
            </div>
        </form>
    </div>
  )
}

export default Login