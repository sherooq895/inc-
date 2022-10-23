import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from '../Sidebar/SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const [sidebar,setSidebar]=useState(true)
    let Navigate=useNavigate()

    useEffect(()=>{
        let userData=localStorage.getItem('token')
        if(userData){
          // setuserName(jwtDecode(localStorage.getItem('token')));
        //   Navigate('/admin/dashboard')
        }else{
          Navigate('/admin')
        }
      },[Navigate])


      const logout=()=>{
        localStorage.removeItem('token')
        Navigate('/admin')
      }
   

  return (
    <div>
       <IconContext.Provider value={{color:'red'}}>
        <div className='navbar'>

            <div className='flex gap-3 align-end items-end p-6'>
            <p className='text-white text-center flex-1 pt-1  bl-20px text-3xl'>REVA NEXT</p>
            <button  type="button" onClick={logout} className='"text-white bg-red-700 font-bold uppercase  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 rounded-lg items-end"'>LogOut</button>
            </div>

           
           
           {/* <Link to="#" className='menu-bars pl-5 '>
          
               <FaIcons.FaBars />
           </Link> */}

        </div>
        <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' >
               <li className='navbar-toggle'>
                
                </li> 
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>

                            </Link>
                        </li>
                    )
                })}


            </ul>
        </nav> 
        </IconContext.Provider>
    </div>
  )
}

export default Navbar