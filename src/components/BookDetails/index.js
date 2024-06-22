import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import Header from "../Header";
import "./index.css";
import Loader from "react-loader-spinner";

const BookDetails = (props) => {
  const { match } = props;
  const { params } = match;
  const { isbn13 } = params;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`);
      const data = await resp.json();
      // console.log(data);
      setBook(data);
    };
    getData();
  }, [isbn13]);

  return (
    <div className="main">
      <Header />
      {book === null ? (
        <div className="loading" data-testid="loading">
          <Loader type="ThreeDots" color="#3b82f6" height="100" width="100" />
        </div>
      ) : (
        <div className="book-details-card">
          <div className="book-details">
            <div className="book-main">
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <div>
                <h1>
                  Price: <span>{book.price}</span>
                </h1>
                <a href={book.url} target="__blank">
                  Know more...
                </a>
              </div>
            </div>
            <div className="book-data">
              <div>
                <h1>Authors:</h1>
                <p>{book.authors}</p>
              </div>
              <div>
                <h1>Language:</h1>
                <p>{book.language}</p>
              </div>
              <div>
                <h1>Publish Year:</h1>
                <p>{book.year}</p>
              </div>
              <div>
                {book.rating > 0 && (
                  <>
                    <h1>Rating:</h1>
                    <p>
                      {book.rating} <FaStar size={20} />
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <img src={book.image} alt={book.title} />
        </div>
      )}
    </div>
  );
};

export default BookDetails;
