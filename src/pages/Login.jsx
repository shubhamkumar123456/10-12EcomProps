import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate()

  let arr = JSON.parse(localStorage.getItem('ecom')) || [];


  let emailRef = useRef();
  let passwordRef = useRef()

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("running")
    let obj = {
     
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    console.log(obj)
    let findUser = arr.find((ele)=>ele.email === obj.email);
    if(findUser){
        if(findUser.password === obj.password){
          console.log('successfull')
          navigate('/')
        }
        else{
          console.log("wrong password")
          alert('wrong password')
        }
    }
    else{
      console.log("user not found")
      alert('user not found')
    }
   
  }
  return (
    <div>

      

<form className="max-w-sm mx-auto mt-5 border p-5 rounded-xl border-gray-500 ">
      <h1 className='text-center my-2'>Login page</h1>
 
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input ref={emailRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input ref={passwordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


    </div>
  )
}

export default Login
