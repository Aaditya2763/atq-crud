import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaRegUser } from "react-icons/fa";
import image from "../../assets/authlogo.svg";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/slices/authSlice';
import { FaFacebook } from "react-icons/fa";
const NavbarBox = () => {
  const [show, setShow] = useState(false);
 
  const [signinPage, setSigninPage] = useState(false);
  const [signupPage, setSignupPage] = useState(true);
  const [forget, setForget] = useState(false);
  const showsignInHabandler = () => {
    setSigninPage(true);
    setSignupPage(false);
    setForget(false);
   
  };
  const hideSigninPage = () => {
    setSignupPage(true);
    setSigninPage(false);
  };

  const forgotPasswordPageHandler = () => {
    setForget(true);
    setSigninPage(false);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const loggedIn = useSelector((state) => state.auth.loggedIn);
 
  const dispatch = useDispatch();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img 
            src="/assets/logo.svg"
            width="162"
            height="24"
            className=""
            alt="logo"
          />
        </Navbar.Brand>

        <div className="d-flex flex-row align-items-center">
          <AiOutlineSearch
            style={{
              color: "#56595c",
              fontSize: "16px",
              position: "absolute",
              marginLeft: 10,
            }}
          />
          <input
            className="form-control rounded-pill "
            placeholder="Search for your favorite groups in ATG"
            style={{
              width: "340px",
              height: "42px",
              flexShrink: 0,
              background: "#F2F2F2",
              fontFamily: "IBM Plex Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              paddingLeft: 30,
            }}
          />
        </div>

        <div onClick={handleShow}>
          {loggedIn && (
            <div className="d-flex flex-row align-items-center">
               <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" style={{background:"white",border:"none",color:"black"}}>
      <FaRegUser style={{width:"25px",height:"25px",marginRight:5}}/>
      Hello, user
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => dispatch(logout())} >Logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
            </div>
          )}
          {!loggedIn && (
            <p
              className="text-dark mt-3"
              style={{
                color: "#2E2E2E",
                fontFamily: "IBM Plex Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Create account.
              <span
                className="text-primary"
                style={{
                  color: "#2E2E2E",
                  fontFamily: "IBM Plex Sans",
                  fontStyle: "normal",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {" "}
                It’s free!
              </span>
              <IoMdArrowDropdown />
            </p>
          )}
        </div>
      </Container>
      {!loggedIn && handleShow && signupPage && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-lg"
          aria-labelledby="example-custom-modal-styling-title"
          style={{ marginTop: 100, marginLeft: 1 }}
        >
          <Modal.Header
            style={{ backgroundColor: "#EFFFF4", textAlign: "center" }}
          >
            <Modal.Title
              id="example-custom-modal-styling-title"
              className="text-center fs-6 px-3 text-success"
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="d-flex flex-row  justify-content-between ">
              <div style={{ width: "100%" }}>
                <h5
                  style={{
                    fontFamily: "IBM Plex Sans",
                    fontStyle: "normal",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  {" "}
                  Create Account
                </h5>
                <Container className="container">
                  <Form>
                    <input
                      style={{
                        width: "50%",
                        height: 46,
                        marginLeft: -10,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="First Name"
                    />
                    <input
                      style={{
                        width: "50%",
                        height: 46,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="Last Name"
                    />
                    <br />
                    <input
                      style={{
                        width: "100%",
                        height: 46,
                        marginLeft: -10,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="Email"
                    />
                    <input
                      style={{
                        width: "100%",
                        height: 46,
                        marginLeft: -10,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="Password"
                    />
                    <input
                      style={{
                        width: "100%",
                        height: 46,
                        marginLeft: -10,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="Confirm Password"
                    />
                    <button
                      className="container btn btn-primary rounded-pill"
                      style={{ marginLeft: -10, marginTop: 10, height: 40 }}
                      type="button"
                      onClick={() => dispatch(login())}
                    >
                      Create Account
                    </button>
                    <button
                      className="container btn "
                      style={{
                        marginLeft: -10,
                        marginTop: 10,
                        border: "1px solid lightgray",
                      }}
                      type="button"
                      onClick={() => dispatch(login())}
                    >
                      <FaFacebook
                        style={{ color: "#0000ff", width: 20, height: 20 }}
                      />
                      <span
                        style={{
                          marginTop: 10,
                          marginLeft: 10,
                          fontFamily: "IBM Plex Sans",
                          fontStyle: "normal",
                          fontSize: "15px",
                          fontWeight: 500,
                        }}
                      >
                        Sign in with Facebook
                      </span>
                    </button>
                    <button
                      className="container btn"
                      style={{
                        marginLeft: -10,
                        marginTop: 10,
                        border: "1px solid lightgray",
                        marginBottom: 20,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      <FcGoogle
                        style={{
                          color: "#0000ff",
                          width: 20,
                          height: 20,
                          marginRight: 10,
                        }}
                        type="button"
                        onClick={() => dispatch(login())}
                      />
                      Sign in with Google
                    </button>
                  </Form>
                </Container>
              </div>
              <div>
                <Container className="d-flex flex-column align-items-between">
                  <p
                    style={{
                      textAlign: "right",
                      fontFamily: "IBM Plex Sans",
                      fontStyle: "normal",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    Already have an account?
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={showsignInHabandler}
                    >
                      {" "}
                      Sign In
                    </span>
                  </p>
                  <img alt="img" src={image} style={{ height: 320 }} />
                  <p
                    style={{
                      fontFamily: "IBM Plex Sans",
                      fontStyle: "normal",
                      fontSize: "11px",
                      fontWeight: 400,
                      marginTop: -10,
                    }}
                  >
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </Container>
              </div>
            </Container>
          </Modal.Body>
        </Modal>
      )}

      {!loggedIn && signinPage && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-lg"
          aria-labelledby="example-custom-modal-styling-title"
          style={{ marginTop: 100 }}
        >
          <Modal.Header
            style={{ backgroundColor: "#EFFFF4", textAlign: "center" }}
          >
            <Modal.Title
              id="example-custom-modal-styling-title"
              className="text-center fs-6 px-3 text-success"
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="d-flex flex-row  justify-content-between ">
              <div style={{ width: "100%" }}>
                <h5
                  style={{
                    fontFamily: "IBM Plex Sans",
                    fontStyle: "normal",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  Sign In
                </h5>
                <Container className="container">
                  <Form style={{ marginTop: 20 }}>
                    <input
                      style={{
                        width: "100%",
                        height: 46,
                        marginLeft: -10,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="Email"
                    />
                    <input
                      style={{
                        width: "100%",
                        height: 46,
                        marginLeft: -10,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="Password"
                    />
                    <button
                      className="container btn btn-primary rounded-pill"
                      style={{ marginLeft: -10, marginTop: 10, height: 50 }}
                      type="button"
                      onClick={() => dispatch(login())}
                    >
                      Sign in
                    </button>
                    <button
                      className="container btn "
                      style={{
                        marginLeft: -10,
                        marginTop: 10,
                        border: "1px solid lightgray",
                      }}
                      type="button"
                      onClick={() => dispatch(login())}
                    >
                      <FaFacebook
                        style={{ color: "#0000ff", width: 20, height: 20 }}
                      />
                      <span
                        style={{
                          marginTop: 10,
                          marginLeft: 10,
                          fontFamily: "IBM Plex Sans",
                          fontStyle: "normal",
                          fontSize: "15px",
                          fontWeight: 500,
                        }}
                      >
                        Sign in with Facebook
                      </span>
                    </button>
                    <button
                      className="container btn"
                      style={{
                        marginLeft: -10,
                        marginTop: 10,
                        border: "1px solid lightgray",
                        marginBottom: 20,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      <FcGoogle
                        style={{
                          color: "#0000ff",
                          width: 20,
                          height: 20,
                          marginRight: 10,
                        }}
                        type="button"
                        onClick={() => dispatch(login())}
                      />
                      Sign in with Google
                    </button>
                    <button
                      className="container btn"
                      style={{
                        marginLeft: -10,
                        marginBottom: 20,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                      type="button"
                      onClick={forgotPasswordPageHandler}
                    >
                      Forget Password
                    </button>
                  </Form>
                </Container>
              </div>
              <div>
                <Container className="d-flex flex-column align-items-between">
                  <p
                    style={{
                      textAlign: "right",
                      fontFamily: "IBM Plex Sans",
                      fontStyle: "normal",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    Don't have an account yet?
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={hideSigninPage}
                    >
                      {" "}
                      Create Account
                    </span>
                  </p>
                  <img alt="img" src={image} style={{ height: 320 }} />
                  <p
                    style={{
                      fontFamily: "IBM Plex Sans",
                      fontStyle: "normal",
                      fontSize: "11px",
                      fontWeight: 400,
                      marginTop: -10,
                    }}
                  >
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </Container>
              </div>
            </Container>
          </Modal.Body>
        </Modal>
      )}

      {!loggedIn && forget && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-lg"
          aria-labelledby="example-custom-modal-styling-title"
          style={{ marginTop: 100 }}
        >
          <Modal.Header
            style={{ backgroundColor: "#EFFFF4", textAlign: "center" }}
          >
            <Modal.Title
              id="example-custom-modal-styling-title"
              className="text-center fs-6 px-3 text-success"
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="d-flex flex-row  justify-content-between ">
              <div style={{ width: "100%" }}>
                <h5
                  style={{
                    fontFamily: "IBM Plex Sans",
                    fontStyle: "normal",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  Forgot Password
                </h5>
                <Container className="container">
                  <Form style={{ marginTop: 70 }}>
                    <input
                      style={{
                        width: "100%",
                        height: 46,
                        marginLeft: -10,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="Email"
                    />
                    <input
                      style={{
                        width: "100%",
                        height: 46,
                        marginLeft: -10,
                        fontFamily: "IBM Plex Sans",
                        fontStyle: "normal",
                        fontSize: "15px",
                        fontWeight: 500,
                        paddingLeft: 10,
                      }}
                      placeholder="Password"
                    />
                    <button
                      className="container btn btn-primary rounded-pill"
                      style={{ marginLeft: -10, marginTop: 20, height: 50 }}
                      type="button"
                      onClick={() => dispatch(login())}
                    >
                      change Password
                    </button>
                  </Form>
                </Container>
              </div>
              <div>
                <Container className="d-flex flex-column align-items-between">
                  <p
                    style={{
                      textAlign: "right",
                      fontFamily: "IBM Plex Sans",
                      fontStyle: "normal",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    Don't have an account yet?
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={showsignInHabandler}
                    >
                      {" "}
                      Sign In
                    </span>
                  </p>
                  <img alt="img" src={image} style={{ height: 320 }} />
                  <p
                    style={{
                      fontFamily: "IBM Plex Sans",
                      fontStyle: "normal",
                      fontSize: "11px",
                      fontWeight: 400,
                      marginTop: -10,
                    }}
                  >
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </Container>
              </div>
            </Container>
          </Modal.Body>
        </Modal>
      )}
    </Navbar>
  );
};

export default NavbarBox;
