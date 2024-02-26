import { Component } from "react";

import Loader from "react-loader-spinner";
import { FiSearch } from "react-icons/fi";

import Header from "../Header";
import { Redirect } from "react-router-dom";

import "./index.css";
import Cookies from "js-cookie";

const apiStatusConst = {
  initial: "initial",
  succuss: "succuss",
  failure: "failure",
  loading: "loading",
};

class Home extends Component {
  state = {
    booksData: [],
    apiStatus: apiStatusConst.initial,
    searchBook: "",
  };

  componentDidMount() {
    this.getBooks();
  }

  getDataSuccuss = (data) => {
    const updateData = data.map((each) => ({
      title: each.title,
      subtitle: each.subtitle,
      isbn13: each.isbn13,
      price: each.price,
      image: each.image,
      url: each.url,
    }));

    this.setState({ booksData: updateData, apiStatus: apiStatusConst.succuss });
  };

  getDataFailure = () => {
    console.log("Data Fetching Failure...!");
    this.setState({ apiStatus: apiStatusConst.failure });
  };

  getBooks = async () => {
    this.setState({ apiStatus: apiStatusConst.loading });
    const response = await fetch("https://api.itbook.store/1.0/new");
    const data = await response.json();
    if (response.ok === true) {
      this.getDataSuccuss(data.books);
      // console.log(data);
    } else {
      this.getDataFailure();
    }
  };

  changeInputValue = (event) => {
    this.setState({ searchBook: event.target.value });
  };

  loadingView = () => (
    <div className="loading" data-testid="loading">
      <Loader type="ThreeDots" color="#3b82f6" height="100" width="100" />
    </div>
  );

  succussView = () => {
    const { booksData, searchBook } = this.state;

    const filterData = booksData.filter((each) =>
      each.title.toLocaleLowerCase().includes(searchBook.toLocaleLowerCase())
    );

    const emptyData = filterData.length === 0;
    // console.log(emptyData);
    return (
      <>
        {emptyData ? (
          <div className="no-data">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="no data"
            />
            <h1>No Data Found</h1>
            <p>
              We could not result on your searching, Please search other books
            </p>
          </div>
        ) : (
          <ul className="books-list">
            {filterData.map((each) => (
              <li className="book-item" key={each.isbn13}>
                <div className="crop">
                  <img
                    className="book-image"
                    src={each.image}
                    alt={each.title}
                  />
                </div>
                <div className="book-detail">
                  <p className="book-title">{each.title}</p>
                  <p className="book-price">
                    Price: <span>{each.price}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  renderSwitch = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConst.loading:
        return this.loadingView();
      case apiStatusConst.succuss:
        return this.succussView();
      default:
        return null;
    }
  };

  render() {
    const { searchBook } = this.state;
    const token = Cookies.get("jwt_token");
    if (token === undefined) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="main">
        <Header />
        <div className="books-main">
          <div className="search-card">
            <FiSearch size={20} />
            <input
              value={searchBook}
              onChange={this.changeInputValue}
              type="search"
              placeholder="Search book here"
            />
          </div>
          {this.renderSwitch()}
        </div>
      </div>
    );
  }
}

export default Home;
