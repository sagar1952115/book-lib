import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SearchBar from "../../components/searchbar/SearchBar";
import CardList from "../../components/cardlist/CardList";

const SubjectPage = () => {
  return (
    <div>
      <div className="homepage-container">
        <Sidebar />
        <div className="homepage-right">
          <SearchBar />
          <div className="homepage-card">
            <CardList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectPage;
