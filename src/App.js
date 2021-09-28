import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import {
  StyledApp,
  StyledTopbar,
  StyledHome,
  StyledNav,
  StyledNavDiv,
  StyledNavLink,
  StyledHomeText,
  StyledHomeDiv,
  StyledText,
  StyledButton,
  StyledDiv,
  StyledContainer1,
  StyledContainer1Head,
  StyledContainer1Text,
  StyledContainer1Description,
  StyledContainer1Tag,
  StyledProduct,
  StyledPagination,
  StyledPaginationProgress,
  StyledScrollButton,
  StyledProductContainer,
  StyledProductList,
  StyledFooterbar,
  StyledFootercard1,
  StyledFootercard2,
  StyledFootercardhead,
  StyledFootercardtext,
  StyledSlide,
  StyledList,
  Styledbtn
} from "./styledComponents";
import {useSelector, useDispatch} from "react-redux"
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImArrowUpRight2, ImCross } from "react-icons/im";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import cleansing from "./cleansing.webp";
import commitment from "./commitment.jpg";
import cleansing_mobile from "./cleansing_mobile.webp";
import commitment_mobile from "./commitment_mobile.jpg";
import L1 from "./img/L1.jpg";
import L2 from "./img/L2.webp";
import L3 from "./img/L3.jpg";
import L1_mobile from "./img/L1_mobile.webp";
import L2_mobile from "./img/L2_mobile.webp";
import L3_mobile from "./img/L3_mobile.webp";
import p1 from "./img/p1.webp";
import p2 from "./img/p2.webp";
import p3 from "./img/p3.webp";
import p4 from "./img/p4.webp";
import p5 from "./img/p5.webp";
import p6 from "./img/p6.webp";
import p7 from "./img/p7.webp";
import p8 from "./img/p8.webp";
import p9 from "./img/p9.webp";
import p10 from "./img/p10.webp";
import p11 from "./img/p11.webp";
import p12 from "./img/p12.webp";
import p13 from "./img/p13.webp";
import p14 from "./img/p14.webp";
import p15 from "./img/p15.webp";
import {updateIsLoggedIn} from "./features/isLoggedIn/isLoggedInSlice"
import {updateEmail} from "./features/email/emailSlice"
import {updatePassword} from "./features/password/passwordSlice"
import { updateUserName } from "./features/userName/userNameSlice"
import axios from "axios";
import { updateProfile } from "./features/profileImage/profileImageSlice";
import "./App.css"

function People({ userName, profileImage }) {
  const [btn, setBtn] = useState("Add friend")
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        padding: "10px 0px 10px 0px",
      }}
    >
      <img
        style={{ height: "50px", marginRight: "10px", width: "50px" }}
        src={profileImage}
        alt="profile"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h5>{userName}</h5>
        <button
          className="btn"
          style={{
            padding: "5px 10px",
            backgroundColor: "#b8d0cb",
            width: "fit-content",
            border: "none",
            fontWeight: "600",
            color: "#fff",
            cursor:"pointer"
          }}
          onClick={() => {
            setBtn("Remove friend");
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}

function Friend({ userName, profileImage }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        padding: "10px 0px 10px 0px"
      }}
    >
      <img
        style={{ height: "50px", marginRight: "10px", width: "50px" }}
        src={profileImage}
        alt="profile"
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h5>{userName}</h5>
      </div>
    </div>
  );
}


function App() {
  // values
  const [firstProduct, setFirstProduct] = useState(0);
  const [secondProduct, setSecondProduct] = useState(0);
  const [carousel, setCarousel] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true)
  const [scroll, setScroll] = useState('')
  const [width, setWidth] = useState(0)
  const [slideState, setSlideState] = useState("login")
  const [loginSuccess, setLoginSuccess] = useState("")
  const body = useRef(null)
  const slide = useRef(null)
  const myaccount = useRef(null)
  const isLoggedIn = useSelector(state => state.isLoggedIn.value)
  const email = useSelector(state => state.email.value)
  const userName = useSelector(state => state.userName.value)
  const password = useSelector(state => state.password.value)
  const profileImage = useSelector(state => state.profile.value)
  const [profile, setProfile] = useState()
  const dispatch = useDispatch()
  const friendList = useRef(null)
  const search = useRef(null)
  const edit = useRef(null);
  const [ users, setUsers] = useState([])
  const [ friends, setFriends] = useState([])

  // functions
  const leftFirstClick = () => {
    if (firstProduct > 0) {
      setFirstProduct((pre) => pre - 1);
    }
  };
  const leftSecondClick = () => {
    if (secondProduct > 0) {
      setSecondProduct((pre) => pre - 1);
    }
  };
  const rightFirstClick = () => {
    if (firstProduct < 5) {
      setFirstProduct((pre) => pre + 1);
    }
  };
  const rightSecondClick = () => {
    if (secondProduct < 4) {
      setSecondProduct((pre) => pre + 1);
    }
  };
  const leftCarousel = () => {
    if (carousel > 0) {
      setCarousel((pre) => pre - 1);
    } else {
      setCarousel(2);
    }
  };
  const rightCarousel = () => {
    if (carousel < 2) {
      setCarousel((pre) => pre + 1);
    } else {
      setCarousel(0);
    }
  };
  const handleLogin = (event) => {
    event.preventDefault()
    setLoginSuccess("")
    let data = {
      email_id:email,
      password:password
    }
    axios
      .post("http://ec2-13-232-120-51.ap-south-1.compute.amazonaws.com/login", data)
      .then(function (response) {
        console.log(response);
        if (response.data.Item) {
          dispatch(updateIsLoggedIn());
          dispatch(updateUserName(response.data.Item.username));
          slide.current.style.transform = "translateX(600px)";
        } else {
          setLoginSuccess(response.data.message);
          dispatch(updateEmail(""));
          dispatch(updatePassword(""));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleSignup = (e) => {
    e.preventDefault()
    setLoginSuccess("");
    let data = {
      username: userName,
      email_id: email,
      password: password,
    };
    axios
      .post("http://ec2-13-232-120-51.ap-south-1.compute.amazonaws.com/signup", data)
      .then(function (response) {
        console.log(response);
        if (response.data.message) {
          setLoginSuccess(response.data.message);
          dispatch(updateEmail(""));
          dispatch(updatePassword(""));
          dispatch(updateUserName(""));
        } else {
          dispatch(updateIsLoggedIn());
          dispatch(updateProfile(profileImage));
          slide.current.style.transform = "translateX(600px)";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const imageHandler = (e) => {
    const data = new FormData();
    data.append("profile", e.target.files[0]);
    setProfile(e.target.files)
  }

  const handleLogout = () => {
    myaccount.current.style.transform = "translateX(600px)";
    dispatch(updateIsLoggedIn());
    dispatch(updateEmail(""));
    dispatch(updatePassword(""));
    dispatch(updateUserName(""));
  }

  const editImage = () => {
    myaccount.current.style.transform = "translateX(600px)";
    edit.current.style.transform = "translateX(0px)";
  }

  const uploadImageHandler = (e) => {
    e.preventDefault();
    edit.current.style.transform = "translateX(600px)";
    myaccount.current.style.transform = "translateX(0px)";
    const data = new FormData();
    console.log(profile);
    data.append("file", profile[0]);
    data.append("email_id", email)
    // http://ec2-13-232-120-51.ap-south-1.compute.amazonaws.com/upload
    axios
      .post("http://ec2-13-232-120-51.ap-south-1.compute.amazonaws.com/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch(updateProfile(res.data.Location));
      })
      .catch((err) => console.log(err));
  }

  const searchList = () => {
    axios.get("http://ec2-13-232-120-51.ap-south-1.compute.amazonaws.com/peoples")
      .then(res => {
        if (users.length===0)
          setUsers(pre=>[...pre, ...res.data])
    })
    .catch(err=>console.log(err))
    search.current.style.transform = "translateX(0px)"
      
  }
  const friendListSlide = () => {
    let data = {
      email_id:email
    }
    axios.get(`http://ec2-13-232-120-51.ap-south-1.compute.amazonaws.com/friends?email_id=${email}`)
      .then(res => {
        if (friends.length===0)
          setFriends(pre=>[...pre, ...res.data[0].friends])
      })
    .catch(err=>console.log(err))
    friendList.current.style.transform = "translateX(0px)"
  }


  const ctitle = ["Aesop K11 Musea", "Aesop New Town Plaza", 'Aesop Hollywood Road'];
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    if(autoScroll){
      var interval = setInterval(() => setCarousel(pre=>(pre+1)%3), 4000);
    }
      return ()=>clearInterval(interval)
  }, [autoScroll])


  return (
    <StyledApp
      ref={body}
      onWheel={(event) => {
        if (event.nativeEvent.wheelDelta > 0) {
          setScroll("Scroll up");
        } else {
          setScroll("Scroll down");
        }
      }}
    >
      <StyledSlide ref={edit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h6
            onClick={() => {
              slide.current.style.transform = "translateX(600px)";
            }}
            style={{ marginLeft: "-100px", fontSize: "1.5rem" }}
          >
            <AiOutlineArrowRight />
          </h6>
          <h3>Edit Image</h3>
          <br />
          <form
            // onSubmit={(event) => handleLogin(event)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <br />
            <label htmlFor="password_input">Enter password</label>
            <input
              id="image_input"
              type="file"
              name="profile"
              onChange={(e) => imageHandler(e)}
              required
            />
            <br />
            <button
              type="submit"
              style={{
                padding: "10px 30px",
                backgroundColor: "#b8d0cb",
                width: "fit-content",
                border: "none",
                fontWeight: "900",
                color: "#fff",
              }}
              className="btn"
              onClick={(e) => uploadImageHandler(e)}
            >
              Save Changes
            </button>
          </form>
        </div>
      </StyledSlide>
      <StyledSlide ref={myaccount}>
        <h6
          onClick={() => {
            myaccount.current.style.transform = "translateX(600px)";
          }}
          style={{ margin: "0px 0px 0px -100px", fontSize: "1.5rem" }}
        >
          <AiOutlineArrowRight />
        </h6>
        <h3>My Account</h3>
        <div>
          <img
            style={{ height: "100px", width: "100px" }}
            src={profileImage}
            alt="gravatar"
          />
        </div>
        <button
          style={{
            padding: "5px 10px",
            backgroundColor: "#b8d0cb",
            width: "fit-content",
            border: "none",
            fontWeight: "900",
            color: "#fff",
          }}
          className="btn"
          onClick={(e) => editImage(e)}
        >
          edit
        </button>
        <h6>Username:{userName}</h6>
        <h6>Email:{email}</h6>
        <button
          style={{
            padding: "10px 30px",
            backgroundColor: "#b8d0cb",
            width: "fit-content",
            border: "none",
            fontWeight: "900",
            color: "#fff",
          }}
          className="btn"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </StyledSlide>
      <StyledSlide ref={slide}>
        {slideState === "login" ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h6
              onClick={() => {
                slide.current.style.transform = "translateX(600px)";
              }}
              style={{ marginLeft: "-100px", fontSize: "1.5rem" }}
            >
              <AiOutlineArrowRight />
            </h6>
            <h3>Login</h3>
            <br />
            <div style={{ color: "red" }}>{loginSuccess}</div>
            <form
              onSubmit={(event) => handleLogin(event)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="email_input">Enter email</label>
              <input
                id="email_input"
                type="text"
                name="email"
                value={email}
                placeholder="email"
                onChange={(e) => dispatch(updateEmail(e.target.value))}
                required
              />
              <br />
              <label htmlFor="password_input">Enter password</label>
              <input
                id="password_input"
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={(e) => dispatch(updatePassword(e.target.value))}
                required
              />
              <br />
              <button
                type="submit"
                style={{
                  padding: "10px 30px",
                  backgroundColor: "#b8d0cb",
                  width: "fit-content",
                  border: "none",
                  fontWeight: "900",
                  color: "#fff",
                }}
                className="btn"
              >
                Login
              </button>
            </form>
            <div className="redirect" onClick={() => setSlideState("register")}>
              Not an user? Register here
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h6
              onClick={() => {
                slide.current.style.transform = "translateX(600px)";
              }}
              style={{ marginLeft: "-100px", fontSize: "1.5rem" }}
            >
              <AiOutlineArrowRight />
            </h6>
            <h3>Register</h3>
            <br />
            <div style={{ color: "red" }}>{loginSuccess}</div>
            <form
              onSubmit={(event) => handleSignup(event)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="name_input">Enter name</label>
              <input
                id="name_input"
                type="text"
                name="name"
                onChange={(e) => dispatch(updateUserName(e.target.value))}
                value={userName}
                placeholder="name"
                required
              />
              <br />
              <label htmlFor="email_input">Enter email</label>
              <input
                id="email_input"
                type="text"
                name="email"
                onChange={(e) => dispatch(updateEmail(e.target.value))}
                value={email}
                placeholder="email"
                required
              />
              <br />
              <label htmlFor="password_input">Enter password</label>
              <input
                id="password_input"
                type="password"
                onChange={(e) => dispatch(updatePassword(e.target.value))}
                value={password}
                name="password"
                placeholder="password"
                required
              />
              <br />
              <button
                type="submit"
                className="btn"
                style={{
                  padding: "10px 30px",
                  backgroundColor: "#b8d0cb",
                  width: "fit-content",
                  border: "none",
                  fontWeight: "900",
                  color: "#fff",
                }}
              >
                Signup
              </button>
            </form>
            <div className="redirect" onClick={() => setSlideState("login")}>
              Already an user? Login here
            </div>
          </div>
        )}
      </StyledSlide>
      <StyledTopbar padding>
        <StyledTopbar>
          <StyledTopbar hover>
            <StyledTopbar pointer small lineheight>
              Enjoy complimentary shipping on orders over HKD 400. Click here
              for details
            </StyledTopbar>
            <StyledTopbar
              pointer
              lineheight
              style={{ paddingLeft: "25px" }}
              center
            >
              +
            </StyledTopbar>
          </StyledTopbar>
        </StyledTopbar>
      </StyledTopbar>
      <StyledHome>
        <StyledNav
          style={{
            display: width <= 639 ? "none" : "flex",
            position:
              scroll === "Scroll up" && window.pageYOffset > 300
                ? "fixed"
                : "relative",
            top:
              scroll === (scroll === "Scroll up" && window.pageYOffset > 300)
                ? "initial"
                : "0",
            backgroundColor:
              scroll === "Scroll up" && window.pageYOffset > 300
                ? "white"
                : "none",
            borderBottom:
              scroll === "Scroll up" && window.pageYOffset > 300
                ? "1.5px gray solid"
                : "none",
          }}
        >
          <StyledList ref={search}>
            <div>
              <ImCross
                onClick={() => {
                  search.current.style.transform = "translateX(-600px)";
                }}
              />
              {users.map((user, index) => {
                return user.email_id !== email ? (
                  <People
                    key={index}
                    userName={user.username}
                    profileImage={user.profile}
                  />
                ) : null;
              })}
            </div>
          </StyledList>
          <StyledList ref={friendList}>
            <div>
              <ImCross
                onClick={() => {
                  friendList.current.style.transform = "translateX(-600px)";
                }}
              />
              {friends.map((user, index) => (
                <Friend key={index} userName={user[0]} profileImage={user[1]} />
              ))}
            </div>
          </StyledList>
          <StyledNavDiv>
            {isLoggedIn ? (
              <StyledNavLink onClick={() => friendListSlide()}>
                Friend list
              </StyledNavLink>
            ) : null}
            {isLoggedIn ? (
              <StyledNavLink onClick={() => searchList()}>
                Peoples
              </StyledNavLink>
            ) : null}
            <StyledNavLink>Search</StyledNavLink>
          </StyledNavDiv>
          <StyledNavDiv>
            {isLoggedIn ? (
              <StyledNavLink
                onClick={() => {
                  myaccount.current.style.transform = "translateX(0px)";
                }}
              >
                <RiAccountCircleFill style={{ fontSize: "1.3rem" }} />
                My Account
              </StyledNavLink>
            ) : (
              <StyledNavLink
                onClick={() => {
                  slide.current.style.transform = "translateX(0px)";
                }}
                left
              >
                Login
              </StyledNavLink>
            )}
            <StyledNavLink left>Cart</StyledNavLink>
          </StyledNavDiv>
        </StyledNav>
        <StyledNav
          style={{
            display: width <= 639 ? "flex" : "none",
            position:
              scroll === "Scroll up" && window.pageYOffset > 300
                ? "fixed"
                : "relative",
            top:
              scroll === (scroll === "Scroll up" && window.pageYOffset > 300)
                ? "initial"
                : "0",
            backgroundColor:
              scroll === "Scroll up" && window.pageYOffset > 300
                ? "white"
                : "#b8d0cb",
            borderBottom:
              scroll === "Scroll up" && window.pageYOffset > 300
                ? "1.5px gray solid"
                : "none",
          }}
        >
          <StyledNavDiv style={{ width: "100px" }}>
            <svg
              aria-labelledby="269c97c3-21a4-4006-a173-6bb3e37384dd"
              role="img"
              viewBox="0 0 489.7 154.3"
            >
              <title id="269c97c3-21a4-4006-a173-6bb3e37384dd">
                Aesop logo
              </title>
              <g>
                <path
                  className="NavLogo-icon--path"
                  d="M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z"
                ></path>
                <path
                  className="NavLogo-icon--path"
                  d="M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z"
                ></path>
                <path
                  className="NavLogo-icon--path"
                  d="M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z"
                ></path>
                <path
                  className="NavLogo-icon--path"
                  d="M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73"
                ></path>
                <path
                  className="NavLogo-icon--path"
                  d="M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7"
                ></path>
                <rect
                  x="131.8"
                  y="13.5"
                  className="NavLogo-icon--path"
                  width="44.3"
                  height="5"
                ></rect>
                <path
                  className="NavLogo-icon--path"
                  size="5px"
                  d="M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.9-4.7,10.5-10.5,10.5c-5.8,0-10.5-4.6-10.5-10.5 C468.8,97.5,473.5,92.9,479.2,92.9"
                ></path>
              </g>
            </svg>
          </StyledNavDiv>
          <StyledNavDiv>
            <StyledNavLink left style={{ fontSize: "20px", paddingTop: "3px" }}>
              Cart
            </StyledNavLink>
            <StyledNavLink left style={{ fontSize: "30px" }}>
              <HiMenuAlt4 />
            </StyledNavLink>
          </StyledNavDiv>
        </StyledNav>

        <StyledHomeDiv>
          <StyledNavDiv
            style={{ display: width <= 639 ? "none" : "flex", width: "100px" }}
          >
            <svg
              aria-labelledby="269c97c3-21a4-4006-a173-6bb3e37384dd"
              role="img"
              viewBox="0 0 489.7 154.3"
            >
              <title id="269c97c3-21a4-4006-a173-6bb3e37384dd">
                Aesop logo
              </title>
              <g>
                <path
                  className="NavLogo-icon--path"
                  d="M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z"
                ></path>
                <path
                  className="NavLogo-icon--path"
                  d="M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z"
                ></path>
                <path
                  className="NavLogo-icon--path"
                  d="M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z"
                ></path>
                <path
                  className="NavLogo-icon--path"
                  d="M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73"
                ></path>
                <path
                  className="NavLogo-icon--path"
                  d="M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7"
                ></path>
                <rect
                  x="131.8"
                  y="13.5"
                  className="NavLogo-icon--path"
                  width="44.3"
                  height="5"
                ></rect>
                <path
                  className="NavLogo-icon--path"
                  size="5px"
                  d="M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.9-4.7,10.5-10.5,10.5c-5.8,0-10.5-4.6-10.5-10.5 C468.8,97.5,473.5,92.9,479.2,92.9"
                ></path>
              </g>
            </svg>
          </StyledNavDiv>
          <StyledHomeText>
            <StyledText
              fontsize="16px"
              lineheight="25.6px"
              fontfamily="Suisse Regular, sans-serif"
            >
              <StyledText
                fontsize="14px"
                lineheight="23.8px"
                fontfamily="Suisse Medium, sans-serif"
                marginbottom="15px"
              >
                Father's Day
              </StyledText>
              <StyledText
                fontsize="30px"
                lineheight="39.9px"
                fontfamily="Suisse Regular, sans-serif"
                marginbottom="15px"
              >
                Bountiful bonds
              </StyledText>
              <StyledText
                fontsize="14px"
                lineheight="27.2px"
                fontfamily="Suisse Regular, sans-serif"
                marginbottom="30px"
              >
                It is the thought that goes into our products that leaves an
                indelible impression on a loved one. For father figures of all
                stripes, an array of apt choices is provided—from the uplifting,
                to the softly soothing.
              </StyledText>
              <StyledButton background="#b8d0cb">
                Discover gifts for father figures{" "}
                <AiOutlineArrowRight
                  style={{ paddingTop: "3px", marginLeft: "32px" }}
                />
              </StyledButton>
            </StyledText>
          </StyledHomeText>
        </StyledHomeDiv>
      </StyledHome>
      <StyledProduct className="hover">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: width <= 639 ? "50px" : "0px",
          }}
        >
          <StyledScrollButton
            onClick={leftFirstClick}
            className="leftin"
            hide={width >= 640 ? "-80px" : "0px"}
            style={{
              pointerEvents: firstProduct === 0 ? "none" : "auto",
              transform: firstProduct === 0 ? "translateX(-80px)" : "",
              left: "0%",
            }}
            left
          >
            <IoIosArrowBack />
          </StyledScrollButton>
          <StyledProductList slide={`${firstProduct * -453}px`}>
            <StyledProductContainer className="hover2">
              <img height="240px" src={p8} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Adventurer Roll Up
              </div>
              <div>A portable trio for hands </div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="240px" src={p9} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Moroccan Neroli Shaving Duet
              </div>
              <div>For smooth, calm, well-shaven skin</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p10} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Double-Edge Razor
              </div>
              <div>Facilitate an immaculate shave</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p11} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Post-Poo Drops
              </div>
              <div>A botanical bathroom deodoriser</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p12} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Sculpt Hair Polish
              </div>
              <div>Non-sticky, medium-to-high-hold gel</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p13} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Reverence Aromatique Hand Balm
              </div>
              <div>Woody, earthy, smoky aroma</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="240px" src={p14} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Seeking Silence Facial Hydrator
              </div>
              <div>Soothing hydration for sensitive skin</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p15} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Marrakech Intense Parfum
              </div>
              <div>A raw, unorthodox fragrance</div>
            </StyledProductContainer>
          </StyledProductList>
          <StyledScrollButton
            onClick={rightFirstClick}
            className="rightin"
            hide={width >= 640 ? "80px" : "0px"}
            style={{
              pointerEvents: firstProduct === 5 ? "none" : "all",
              transform: firstProduct === 5 ? "translateX(80px)" : "",
              right: "0%",
            }}
            right
          >
            <IoIosArrowForward />
          </StyledScrollButton>
        </div>
        <StyledPagination>
          <StyledPaginationProgress
            left={`${firstProduct * (100 / 6)}%`}
            part={`${100 / 6}%`}
          ></StyledPaginationProgress>
        </StyledPagination>
      </StyledProduct>
      <StyledContainer1>
        <img
          style={{
            height: "497px",
            paddingRight: "126px",
            display: width >= 640 ? "block" : "none",
          }}
          src={cleansing}
          alt="cleansing"
        />
        <img
          style={{ display: width <= 639 ? "block" : "none" }}
          src={cleansing_mobile}
          alt="cleansing"
        />
        <StyledContainer1Text right>
          <StyledContainer1Tag>Daily rituals</StyledContainer1Tag>
          <StyledContainer1Head>How to cleanse the skin</StyledContainer1Head>
          <StyledContainer1Description>
            Both delicate and resilient, skin requires gentle, routine
            cleansing. To better understand cleansing and its foundational role
            in a healthy skin care routine, we invite you to read on.
          </StyledContainer1Description>
          <StyledButton background="#ffffff">
            Explore cleansing{" "}
            <AiOutlineArrowRight style={{ paddingTop: "3px" }} />
          </StyledButton>
        </StyledContainer1Text>
      </StyledContainer1>
      <StyledProduct className="hover">
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledScrollButton
            onClick={leftSecondClick}
            className="leftin"
            hide={width >= 640 ? "-80px" : "0px"}
            style={{
              pointerEvents: secondProduct === 0 ? "none" : "auto",
              transform: secondProduct === 0 ? "translateX(-80px)" : "",
              left: "0%",
            }}
            left
          >
            <IoIosArrowBack />
          </StyledScrollButton>
          <StyledProductList slide={`${secondProduct * -453}px`}>
            <StyledProductContainer className="hover2">
              <img style={{ height: "400px" }} src={p1} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Purifying Facial Exfoliant Paste
              </div>
              <div>A mild and refined extrolating cleanser</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="240px" src={p2} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Primrose Facial Cleansing Masque
              </div>
              <div>Clay-based cleansing for combination to oily skin</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p3} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Gentle Facial Cleansing Milk
              </div>
              <div>Particularly suited to dry and sensitive skin</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p4} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Parsley Seed Facial Cleanser
              </div>
              <div>A clarifying gel cleanser, lightly exfoliating</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p5} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Remove
              </div>
              <div>Makeup removal for the delicate eye area</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p6} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                Fabulous Face Cleanser
              </div>
              <div>A low-foaming gel for most skin types</div>
            </StyledProductContainer>
            <StyledProductContainer className="hover2">
              <img height="400px" src={p7} alt="product" />
              <div className="border-show" style={{ fontWeight: "500" }}>
                In Two Minds Facial Cleanser
              </div>
              <div>A gel cleanser for combination skin</div>
            </StyledProductContainer>
          </StyledProductList>
          <StyledScrollButton
            onClick={rightSecondClick}
            className="rightin"
            hide={width >= 640 ? "80px" : "0px"}
            style={{
              pointerEvents: secondProduct === 4 ? "none" : "all",
              transform: secondProduct === 4 ? "translateX(80px)" : "",
              right: "0%",
            }}
            right
          >
            <IoIosArrowForward />
          </StyledScrollButton>
        </div>
        <StyledPagination>
          <StyledPaginationProgress
            left={`${secondProduct * 20}%`}
            part={`20%`}
          ></StyledPaginationProgress>
        </StyledPagination>
      </StyledProduct>
      <StyledContainer1>
        <img
          style={{
            height: "439px",
            paddingRight: "126px",
            display: width >= 640 ? "block" : "none",
          }}
          src={commitment}
          alt="commitment"
        />
        <img
          style={{ display: width <= 639 ? "block" : "none" }}
          src={commitment_mobile}
          alt="cleansing"
        />
        <StyledContainer1Text right>
          <StyledContainer1Tag>Beyond the bathroom</StyledContainer1Tag>
          <StyledContainer1Head>
            Our commitment to sustainability
          </StyledContainer1Head>
          <StyledContainer1Description>
            As a company founded on steadfast ethics, sustainability has always
            been at Aesop’s heart. We aim to continuously improve our practices
            with honesty, sincerity and transparency, and seek to be a
            progressive presence in the communities in which we operate.
          </StyledContainer1Description>
          <StyledButton background="#ffffff">
            Learn more about our approach{" "}
            <AiOutlineArrowRight style={{ paddingTop: "3px" }} />
          </StyledButton>
        </StyledContainer1Text>
      </StyledContainer1>
      <StyledContainer1
        style={{ paddingBottom: width <= 639 ? "0px" : "150px" }}
      >
        <StyledContainer1Text
          style={{
            paddingRight: width >= 640 ? "259px" : "0px",
            backgroundColor: "white",
            zIndex: "11",
          }}
        >
          <StyledContainer1Head>Store Locator</StyledContainer1Head>
          <StyledContainer1Description>
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
          </StyledContainer1Description>
          <StyledButton background="#ffffff">
            Find a nearby store{" "}
            <AiOutlineArrowRight style={{ paddingTop: "3px" }} />
          </StyledButton>
        </StyledContainer1Text>
        <StyledProduct className="hover">
          <div
            style={{
              display: "flex",
              paddingBottom: "50px",
              alignItems: "center",
            }}
          >
            <StyledScrollButton
              className="leftin"
              onClick={leftCarousel}
              hide={width <= 639 ? "0px" : "-80px"}
              style={{ left: "0%", marginLeft: width <= 639 ? "0%" : "42%" }}
            >
              <IoIosArrowBack />
            </StyledScrollButton>
            <StyledProductList
              onMouseEnter={() => setAutoScroll(false)}
              onMouseOut={() => setAutoScroll(true)}
              slide={
                width <= 639 ? `${carousel * -100}vw` : `${carousel * -885}px`
              }
              style={{ left: "0px" }}
            >
              <img
                height="498px"
                src={L1}
                alt="store"
                style={{
                  display: width >= 640 ? "block" : "none",
                }}
              />
              <img
                height="498px"
                src={L2}
                alt="store"
                style={{
                  display: width >= 640 ? "block" : "none",
                }}
              />
              <img
                height="498px"
                src={L3}
                alt="store"
                style={{
                  display: width >= 640 ? "block" : "none",
                }}
              />
              <img
                src={L2_mobile}
                alt="store"
                style={{
                  width: "100vw",
                  display: width <= 639 ? "block" : "none",
                }}
              />
              <img
                src={L1_mobile}
                alt="store"
                style={{
                  width: "100vw",
                  display: width <= 639 ? "block" : "none",
                }}
              />
              <img
                src={L3_mobile}
                alt="store"
                style={{
                  width: "100vw",
                  display: width <= 639 ? "block" : "none",
                }}
              />
            </StyledProductList>
            <StyledScrollButton
              className="rightin"
              hide={width <= 639 ? "0px" : "80px"}
              onClick={rightCarousel}
              style={{ right: "0%" }}
            >
              <IoIosArrowForward />
            </StyledScrollButton>
          </div>
          <StyledPagination style={{ width: "100%", margin: "0px" }}>
            <StyledPaginationProgress
              left={
                width <= 639
                  ? `${carousel * (100 / 3)}vw`
                  : `${carousel * (885 / 3)}px`
              }
              part={width <= 639 ? `${100 / 3}vw` : `${885 / 3}px`}
            ></StyledPaginationProgress>
          </StyledPagination>
          <div
            className="fade-in-out"
            style={{ padding: "5%", marginTop: "30px" }}
          >
            {ctitle[carousel]}
          </div>
        </StyledProduct>
      </StyledContainer1>
      <StyledDiv>
        <p style={{ fontSize: "30px", lineHeight: "39.9px" }}>
          'It is by acts and not by ideas that people live.'
        </p>
        <p style={{ fontWeight: "normal" }}>Anatole France</p>
      </StyledDiv>
      <StyledTopbar style={{ padding: "50px 5%", flexDirection: "column" }}>
        <StyledFooterbar>
          <StyledFootercard1
            style={{
              padding: "50px 5%",
              flexDirection: "column",
              minWidth: width <= 639 ? "90%" : "38%",
              width: "38%",
            }}
          >
            <div>
              <input
                className="email"
                type="email"
                placeholder="Email address"
              />
            </div>
            <StyledFootercardtext>
              <input type="checkbox" style={{ backgroundColor: "black" }} />{" "}
              Subscribe to receive communications from Aesop about our products
              and services. By subscribing, you confirm you have read and accept
              our privacy policy.
            </StyledFootercardtext>
          </StyledFootercard1>
          <StyledFootercard2>
            <StyledFootercardhead>Orders and support</StyledFootercardhead>
            <div
              style={{
                height: "1px",
                backgroundColor: "white",
                marginBottom: "15px",
                width: "100%",
              }}
            ></div>
            <StyledFootercardtext>
              Contact us
              <ImArrowUpRight2 />
            </StyledFootercardtext>
            <StyledFootercardtext>
              FAQs
              <ImArrowUpRight2 />
            </StyledFootercardtext>
            <StyledFootercardtext>
              Delivery and returns
              <ImArrowUpRight2 />
            </StyledFootercardtext>
            <StyledFootercardtext>Terms and conditions</StyledFootercardtext>
          </StyledFootercard2>
          <StyledFootercard2>
            <StyledFootercardhead>Services</StyledFootercardhead>
            <div
              style={{
                height: "1px",
                backgroundColor: "white",
                marginBottom: "15px",
                width: "100%",
              }}
            ></div>
            <StyledFootercardtext>Live assistance</StyledFootercardtext>
            <StyledFootercardtext>Corporate gifts</StyledFootercardtext>
            <StyledFootercardtext>Facial appointments</StyledFootercardtext>
          </StyledFootercard2>
          <StyledFootercard2>
            <StyledFootercardhead>Location preferences</StyledFootercardhead>
            <div
              style={{
                height: "1px",
                backgroundColor: "white",
                marginBottom: "15px",
                width: "100%",
              }}
            ></div>
            <StyledFootercardtext>
              Shipping:
              <div style={{ borderBottom: "1px solid white" }}>
                Hong Kong (S.A.R)
              </div>
            </StyledFootercardtext>
            <StyledFootercardtext>
              Language:
              <div style={{ borderBottom: "1px solid white" }}>English</div>
            </StyledFootercardtext>
          </StyledFootercard2>
        </StyledFooterbar>
        <StyledFooterbar>
          <StyledFootercard1>
            <StyledFootercardhead>Sustainability</StyledFootercardhead>
            <div
              style={{
                height: "1px",
                backgroundColor: "white",
                marginBottom: "15px",
                width: "100%",
              }}
            ></div>
            <StyledFootercardtext>
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn more
            </StyledFootercardtext>
          </StyledFootercard1>
          <StyledFootercard2>
            <StyledFootercardhead>About</StyledFootercardhead>
            <div
              style={{
                height: "1px",
                backgroundColor: "white",
                marginBottom: "15px",
                width: "100%",
              }}
            ></div>
            <StyledFootercardtext>Our story</StyledFootercardtext>
            <StyledFootercardtext>
              Foundation
              <ImArrowUpRight2 />
            </StyledFootercardtext>
            <StyledFootercardtext>Careers</StyledFootercardtext>
            <StyledFootercardtext>Privacy policy</StyledFootercardtext>
            <StyledFootercardtext>Accessibility</StyledFootercardtext>
          </StyledFootercard2>
          <StyledFootercard2
            style={{ display: width <= 639 ? "none" : "block" }}
          >
            <StyledFootercardhead>Social media</StyledFootercardhead>
            <div
              style={{
                height: "1px",
                backgroundColor: "white",
                marginBottom: "15px",
                width: "100%",
              }}
            ></div>
            <StyledFootercardtext>
              Instagram
              <ImArrowUpRight2 />
            </StyledFootercardtext>
            <StyledFootercardtext>
              Twitter
              <ImArrowUpRight2 />
            </StyledFootercardtext>
            <StyledFootercardtext>
              LinkedIn
              <ImArrowUpRight2 />
            </StyledFootercardtext>
            <StyledFootercardtext>WeChat</StyledFootercardtext>
            <StyledFootercardtext>
              Weibo
              <ImArrowUpRight2 />
            </StyledFootercardtext>
          </StyledFootercard2>
        </StyledFooterbar>
        <StyledFooterbar></StyledFooterbar>
      </StyledTopbar>
      <hr style={{ height: "1px", margin: "0px" }} />
      <StyledTopbar style={{ padding: "30px 40px" }} start>
        {"\u00a9  "}Aesop
      </StyledTopbar>
    </StyledApp>
  );
}

export default App;
