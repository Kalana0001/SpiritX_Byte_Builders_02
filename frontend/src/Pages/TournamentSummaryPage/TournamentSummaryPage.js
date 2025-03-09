import React, { useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import HomeSection from '../../components/HomeSection/HomeSection'

const TournamentSummaryPage = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarActive(!isSidebarActive);
    };
  
  return (
    <div>
        <Sidebar isActive={isSidebarActive} toggleSidebar={toggleSidebar} />
        <HomeSection toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default TournamentSummaryPage