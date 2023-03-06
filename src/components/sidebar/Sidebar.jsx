import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "../../pages/homepage/HomePage.css";
import { useNavigate } from "react-router-dom";
const Trending = [
  "Javascript",
  "Science",
  "Technology",
  "History",
  "Thermodynamics",
];
const Sidebar = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const handleSubjectClick = () => {
    const sub = subject.toLowerCase();
    navigate("/" + sub);
    setSubject("");
  };
  return (
    <div className="homepage-left">
      <div className="search-area">
        <input
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="subject-input"
          type="search"
          placeholder="Search Subjects"
        />
        <button onClick={handleSubjectClick}>
          <AiOutlineSearch className="search-button" />
        </button>
      </div>
      <div className="trending-subject">
        {Trending.map((curr, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                navigate("/" + curr.toLowerCase());
              }}
              className="trending"
            >
              {curr}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
