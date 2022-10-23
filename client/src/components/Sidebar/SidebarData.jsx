import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";





export const SidebarData=[
    {
       title:'Applicant List',
       path:'/admin/ApplicationList',
       icon:<AiIcons.AiFillHome/>,
       cName:'nav-text',
     
    },
    {
        title:'Pending List',
        path:'/admin/PendingList',
     icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
     },
     {
        title:'Record List',
        path:'/admin/Recordlist',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
     },
     {
        title:'Booking Slot',
        path:'/admin/Bookingslot',
    
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
     },
    
     {
        title:'Logout',
       
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
     },

]

export default SidebarData