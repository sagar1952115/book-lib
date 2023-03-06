import React from "react";
import "./HomePage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SearchBar from "../../components/searchbar/SearchBar";

const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        <Sidebar />
        <div className="homepage-right">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
