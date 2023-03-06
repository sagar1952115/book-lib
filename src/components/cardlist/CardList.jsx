import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardList.css";
import Card from "../card/Card";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import CircleLoader from "react-spinners/ClipLoader";
import SearchCard from "../card/SearchCard";
import { useLocation, useParams } from "react-router-dom";

const CardList = () => {
  const color = "#2d3001ce";
  const { subject } = useParams();
  const { book } = useParams();
  const topic = subject || book;
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [sub, setSub] = useState("");
  const [offset, setOffset] = useState(0);
  const [end, setEnd] = useState(0);
  const limit = 6;
  const location = useLocation();

  const fetchData = async () => {
    if (location.pathname.includes("search")) {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://openlibrary.org/search.json?q=${topic}&offset=${offset}&limit=6`
        );
        const data = res.data.docs;
        setSub(topic.split("+").join(" ").toUpperCase());
        setBooks(data);
        setEnd(data.length);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
      setLoading(false);
    } else {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://openlibrary.org/subjects/${topic}.json?details=true&offset=${offset}&limit=6`
        );
        let data = res.data.works;
        setBooks(data);
        setSub(topic.split("+").join(" ").toUpperCase());
        setEnd(data.length);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [topic, offset]);

  return (
    <div>
      <div className="homepage-card">
        {loading && (
          <div className="center">
            {" "}
            <CircleLoader
              color={color}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        {!loading && (
          <div>
            <div className="cardlist-heading">{sub}</div>
            {!location.pathname.includes("search") && (
              <div className="cardlist-container">
                {books.map((book) => (
                  <Card
                    key={book.key}
                    title={book.title}
                    authors={book.authors}
                    edition={book.edition_count}
                    firstPub={book.first_publish_year}
                  />
                ))}
              </div>
            )}
            {location.pathname.includes("search") && (
              <div className="cardlist-container">
                {books.map((book) => (
                  <SearchCard
                    key={book.key}
                    title={book.title}
                    author={book.author_name}
                    edition={book.edition_count}
                    firstPub={book.first_publish_year}
                  />
                ))}
              </div>
            )}
            {topic !== "" && (
              <div className="pagination">
                <button
                  className="previous"
                  disabled={offset < 1}
                  onClick={() => setOffset(offset - limit)}
                >
                  <GrLinkPrevious />
                </button>
                <button
                  className="next"
                  disabled={end - 6 < 0 || end - offset < 6 || offset > end}
                  onClick={() => setOffset(offset + limit)}
                >
                  <GrLinkNext />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
