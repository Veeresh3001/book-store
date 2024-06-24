import React, { Component } from "react";
import Header from "../Header";

import user from "../../images/blank-profile-picture-973460_960_720.webp";

import "./index.css";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    imgUrl: "",
    phone: "",
    email: "",
    userDeatails: {
      fullName: "",
      emailId: "",
      phoneNum: "",
      userImg: user,
    },
  };

  onSubmitUserDetails = (eve) => {
    eve.preventDefault();
    const { firstName, lastName, email, phone, imgUrl } = this.state;

    const data = {
      fullName: firstName + " " + lastName,
      emailId: email,
      phoneNum: phone,
      userImg: imgUrl,
    };

    this.setState({
      userDeatails: data,
    });
  };

  onChangeFirstName = (eve) => {
    this.setState({ firstName: eve.target.value });
  };

  onChangeLastName = (eve) => {
    this.setState({ lastName: eve.target.value });
  };

  onChangeEmail = (eve) => {
    this.setState({ email: eve.target.value });
  };

  onChangeNumber = (eve) => {
    this.setState({ phone: eve.target.value });
  };

  onChangeProfile = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(img);
      console.log(URL.createObjectURL(img));
      this.setState({
        imgUrl: URL.createObjectURL(img),
      });
    }
  };

  render() {
    const { email, firstName, lastName, phone, userDeatails } = this.state;

    const { fullName, phoneNum, emailId, userImg } = userDeatails;

    return (
      <div className="main">
        <Header navActive="Profile" />
        <div className="profile">
          <h1 className="profile-head">User Details</h1>
          <div className="profile-details">
            <div className="user-details">
              <img src={userImg} alt="user-profile" />
              <div>
                <p>
                  <span>Full Name: </span>
                  {fullName}
                </p>
                <p>
                  <span>Email: </span>
                  {emailId}
                </p>
                <p>
                  <span>Phone: </span>
                  {phoneNum}
                </p>
              </div>
            </div>
            <hr className="vr-line" />
            <form
              className="update-details"
              onSubmit={this.onSubmitUserDetails}
            >
              <div>
                <label htmlFor="imageInp" className="profile-img profile-label">
                  Upload Image:
                </label>
                <input
                  id="imageInp"
                  type="file"
                  className="profile-upload"
                  onChange={this.onChangeProfile}
                />
              </div>
              <div>
                <label htmlFor="firstInp" className="profile-label">
                  First Name:
                </label>
                <input
                  id="firstInp"
                  onChange={this.onChangeFirstName}
                  type="text"
                  placeholder="first name"
                  autoComplete="off"
                  className="profile-input"
                  value={firstName}
                />
              </div>
              <div>
                <label htmlFor="lastInp" className="profile-label">
                  Last Name:
                </label>
                <input
                  id="lastInp"
                  onChange={this.onChangeLastName}
                  value={lastName}
                  type="text"
                  placeholder="last name"
                  className="profile-input"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="emailInp" className="profile-label">
                  Email:
                </label>
                <input
                  id="emailInp"
                  type="text"
                  onChange={this.onChangeEmail}
                  value={email}
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  className="profile-input"
                />
              </div>
              <div>
                <label htmlFor="phoneInp" className="profile-label">
                  Contact Number:
                </label>
                <input
                  id="phoneInp"
                  onChange={this.onChangeNumber}
                  value={phone}
                  type="text"
                  placeholder="0987654321"
                  autoComplete="off"
                  className="profile-input"
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
