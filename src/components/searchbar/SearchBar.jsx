import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("");

  const navigate = useNavigate();

  const handleSearchClick = (e) => {
    navigate("/search/" + searchBar.toLowerCase().split(" ").join("+"));
    setSearchBar("");
  };

  return (
    <div className="search-area">
      <input
        value={searchBar}
        className="author-input"
        onChange={(e) => setSearchBar(e.target.value)}
        type="search"
        placeholder="Search Book By Title or By Author"
      />
      <button onClick={handleSearchClick}>
        <AiOutlineSearch className="search-button" />
      </button>
    </div>
  );
};

export default SearchBar;
