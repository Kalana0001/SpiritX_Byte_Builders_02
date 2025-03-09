import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isActive, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="logo-details">
        <i className={`bx ${isActive ? "bx-menu-alt-right" : "bx-menu"}`} onClick={toggleSidebar}></i>
        <span className="logo_name">CodingLab</span>
      </div>
      <ul className="nav-links">
        {[
          { icon: "bx bx-grid-alt", name: "Dashboard" },
          { icon: "bx bx-box", name: "Product" },
          { icon: "bx bx-list-ul", name: "Order list" },
          { icon: "bx bx-pie-chart-alt-2", name: "Analytics" },
          { icon: "bx bx-coin-stack", name: "Stock" },
          { icon: "bx bx-book-alt", name: "Total order" },
          { icon: "bx bx-user", name: "Team" },
          { icon: "bx bx-message", name: "Messages" },
          { icon: "bx bx-heart", name: "Favorites" },
          { icon: "bx bx-cog", name: "Setting" },
          { icon: "bx bx-log-out", name: "Log out" },
        ].map((item, index) => (
          <li key={index}>
            <a href="#" className={index === 0 ? "active" : ""}>
              <i className={item.icon}></i>
              <span className="links_name">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;