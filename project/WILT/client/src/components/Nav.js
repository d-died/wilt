import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../App.css'
import { Link } from 'react-router-dom'

 const Nav = () => {
     return(
         <div className='navbar'>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/myposts'>My Posts</Link>
                </li>
                <li>
                    <Link to='/graphs'>Graphs</Link>
                </li>
                <li>
                    <Link to='/about'>About the Creator</Link>
                </li>
            </ul>
         </div>
        
     )
 }




export default Nav