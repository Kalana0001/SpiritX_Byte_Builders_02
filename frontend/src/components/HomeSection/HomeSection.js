import React from "react";
import './HomeSection.css';

const HomeSection = () => {
  return (
    <section className="home-section">
      <nav>
        <div className="sidebar-button">
          <span className="dashboard">Dashboard</span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </div>
      </nav>

      <div className="home-content">
        <div className="overview-boxes">
          {[
            { topic: "Total Order", number: "40,876", icon: "bx bx-cart-alt" },
            { topic: "Total Sales", number: "38,876", icon: "bx bxs-cart-add" },
            { topic: "Total Profit", number: "$12,876", icon: "bx bx-cart" },
            { topic: "Total Return", number: "11,086", icon: "bx bxs-cart-download" },
          ].map((box, index) => (
            <div className="box" key={index}>
              <div className="right-side">
                <div className="box-topic">{box.topic}</div>
                <div className="number">{box.number}</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className={`${box.icon} cart`}></i>
            </div>
          ))}
        </div>

        <div className="sales-boxes">
          <div className="recent-sales box">
            <div className="title">Recent Sales</div>
            <div className="sales-details">
              {["Date", "Customer", "Sales", "Total"].map((topic, index) => (
                <ul className="details" key={index}>
                  <li className="topic">{topic}</li>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <li key={i}><a href="#">Sample Data</a></li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="button">
              <a href="#">See All</a>
            </div>
          </div>
          <div className="top-sales box">
            <div className="title">Top Selling Product</div>
            <ul className="top-sales-details">
              {[
                { image: "sunglasses.jpg", product: "Vuitton Sunglasses", price: "$1107" },
                { image: "jeans.jpg", product: "Hourglass Jeans", price: "$1567" },
                { image: "nike-min.jpg", product: "Nike Sport Shoe", price: "$1234" },
              ].map((item, index) => (
                <li key={index}>
                  <a href="#">
                    <img src={`images/${item.image}`} alt="" />
                    <span className="product">{item.product}</span>
                  </a>
                  <span className="price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;