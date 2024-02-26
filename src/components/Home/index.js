// import {} from "react";
import Header from "../Header";

import website from "../../images/books_bg.jpeg";

import "./index.css";

const Home = (props) => {
  const onClickShowBook = () => {
    const { history } = props;
    history.replace("/books");
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="home-main-card">
        <div className="heading-card">
          <h1>Welcome To Our Book Store</h1>
          <p>
            Books are a treasure trove of knowledge. It is essential to
            inculcate reading habits from an early age to develop vocabulary and
            imaginative skills.
          </p>
          <button type="button" onClick={onClickShowBook}>
            Show Books
          </button>
        </div>
        <div className="image-card">
          <img src={website} alt="website" />
        </div>
      </div>
    </div>
  );
};

export default Home;
