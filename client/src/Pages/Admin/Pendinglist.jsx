import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Pendinglistdata from '../../components/Pendinglist/Pendinglist'

function Pendinglist() {
  return (
    <div>
    <Navbar/>
    <div className='ml-[250px] p-3'>

        <Pendinglistdata/>
    
    </div>
</div>
   
  )
}

export default Pendinglist
