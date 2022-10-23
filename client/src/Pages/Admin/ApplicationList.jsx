import React from 'react'
import AppTable from '../../components/ApplicationList/AppList'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/SidebarData'

function AppList() {
  return (
    <div>
        <Navbar/>
        <div className='ml-[250px] p-3'>
          {/* uhygvbv   */}
     < AppTable/>
        </div>
    </div>
  )
}

export default AppList