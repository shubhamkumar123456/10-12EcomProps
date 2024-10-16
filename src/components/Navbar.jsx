import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

  const Navbar=()=>{


   

    return (
       
        
       <header className="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
  <div className="container mx-auto flex items-center h-24">
    <Link to='/' className="flex items-center justify-center">
      <img className="h-16" src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png" alt />
      <span className="ml-4 uppercase font-black">ShopClues</span>
    </Link>
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8 active">
          <a href>
            <span>Home</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href>
            <span>About</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href>
            <span>Projects</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href>
            <span>Services</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href>
            <span>Blog</span>
          </a>
        </li>
      </ul>
    </nav>
    <Link to='/register' className="border border-white rounded-full font-bold px-8 mx-1 py-2">Signup</Link>
    <Link to='/login' className="border border-white rounded-full font-bold px-8 mx-1 py-2">Login</Link>
    <button  className="border border-white rounded-full font-bold px-8 mx-1 py-2">Logout</button>

  </div>
</header>

    )
}

export default Navbar