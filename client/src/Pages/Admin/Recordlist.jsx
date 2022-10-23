import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Pendinglist from '../../components/Recordlist/Recordlist'


function Recordlist() {
  return (

    <div>
        <Navbar/>

        <div className='ml-[250px] p-3'>
        <Pendinglist/>
       
        </div>
    </div>
  )
}

export default Recordlist