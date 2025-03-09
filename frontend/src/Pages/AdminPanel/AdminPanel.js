import React, { useState } from "react";
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import HomeSection from '../../components/HomeSection/HomeSection'

const AdminPanel = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarActive(!isSidebarActive);
    };
  
  return (
    <div>
        <Navbar />
        <Sidebar isActive={isSidebarActive} toggleSidebar={toggleSidebar} />
        <HomeSection toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default AdminPanel