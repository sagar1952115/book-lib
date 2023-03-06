import React from "react";
import "./Card.css";
const SearchCard = ({ title, edition, author, firstPub }) => {
  return (
    <div>
      <div className="card-container">
        <div className="book">
          <div className="cover">
            <div className="cover-left"></div>
            <div className="cover-right">{title}</div>
          </div>
          <div className="details">
            <div className="cover-title">{title}</div>
            <div className="cover-edition">{edition} th Edition</div>
            <div className="book-info">
              {author !== undefined && (
                <div className="cover-author">
                  by
                  {author.map((curr, i) => {
                    return (
                      <div key={i} className="author">
                        {curr}
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="first-published">
                First-Published : {firstPub}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
