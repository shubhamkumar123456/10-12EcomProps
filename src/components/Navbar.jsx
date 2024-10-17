import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

  const Navbar=(props)=>{


   

    return (
       
        
       <header className="  fixed top-0 left-0 bg-[#e09129] right-0 text-white shadow-lg hidden md:block">
  <div className="container mx-auto flex items-center h-20">
    <Link to='/' className="flex items-center justify-center">
      <img className="h-16" src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png" alt />
      <span className="ml-4 uppercase font-black">ShopClues</span>
    </Link>
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8 active">
          <Link to="/">
            <span>Home</span>
          </Link>
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
          <Link to="/cart">
            <span>Cart <sup>{props.cartArr.length}</sup></span>
          </Link>
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