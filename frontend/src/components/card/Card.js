import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import image from "../../assets/post images/img1.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { Fragment, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import classes from "./Card.module.css";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
const CardBox = ({ headingStyle, descStyle, data, user }) => {
  const [show, setShow] = useState(false);
  const [remove, setRemove] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successmessage, setsuccessmessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imageLink, setimageLink] = useState("");
  const [Author, setAuthor] = useState("");
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleRemoveClose = () => setRemove(false);
  const handleRemoveShow = () => setRemove(true);
  const handleClose = () => setShow(false);

  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const imageChangeHandler = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {
      // Convert the selected file to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const postEditHandler = async (e) => {
    e.preventDefault();

    try {
      const id = user.id;
      const response = await axios.post("http://localhost:5000/api/post", {
        title,
        description,
        imageLink,
        Author,
        id,
      });

      if (response.status === 200) {
        setsuccessmessage("Post created successfully");
        setTitle("");
        setDescription("");
        setSelectedImage("");
        setimageLink("");
        setErrorMessage("");
        // Additional logic or state updates if needed
      } else {
        setErrorMessage(response.data.message || "Unknown error occurred");
        setsuccessmessage("");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Network error");
      setsuccessmessage("");
    }
  };
  async function fetchPostData(id){

    try {
     
      const response = await axios.post(`http://localhost:5000/api/post/${id}`);

      if (response.status === 200) {
        setsuccessmessage("Post created successfully");
        setTitle("");
        setDescription("");
        setSelectedImage("");
        setimageLink("");
        setErrorMessage("");
        // Additional logic or state updates if needed
      } else {
        setErrorMessage(response.data.message || "Unknown error occurred");
        setsuccessmessage("");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Network error");
      setsuccessmessage("");
    }

  }

  const handleShow = (id) => {
    setShow(true);
    fetchPostData(id);
  };
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          {loggedIn ? (
            <Modal.Title>✍️Create Post with ❤️</Modal.Title>
          ) : (
            <Alert duration={5000} className="alert alert-danger">
              You need to login first
            </Alert>
          )}
        </Modal.Header>
        {loggedIn && successmessage && (
          <Alert
            duration={5000}
            className="alert alert-success d-flex flex-row justify-content-between"
            style={{ width: "100%", height: "auto" }}
          >
            {successmessage}
          </Alert>
        )}
        {loggedIn && errorMessage && (
          <Alert
            duration={5000}
            className="alert alert-danger d-flex flex-row justify-content-between"
            style={{ width: "100%", height: "auto" }}
          >
            {errorMessage}
          </Alert>
        )}
        <Modal.Body>
          <Form onSubmit={postEditHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                Post Title
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Title of the post"
                autoFocus
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  height: "auto",
                }}
                required
                value={title}
                onChange={handleTitleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                Post Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="auto"
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
                required
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Write the description of the post"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
              <Form.Label
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                Post Author
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Author of the post"
                autoFocus
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  height: "auto",
                }}
                required
                value={Author}
                onChange={handleAuthorChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput">
              <Form.Label
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                Image
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="post Image Link"
                autoFocus
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  height: "auto",
                }}
                required
                value={imageLink}
                onChange={(e) => {
                  setimageLink(e.target.value);
                }}
              />
            </Form.Group>

            <div className="d-flex flex-row justify-content-between">
              <input
                className="form-control"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => imageChangeHandler(e)}
                style={{ width: "200px", height: "50px" }}
                required
                placeholder="Choose file (Optional)"
              />
              {selectedImage && (
                <div className="d-flex flex-row">
                  {" "}
                  <p>Selected Image:</p>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{ maxWidth: "100%", height: "200px", margin: "5px" }}
                  />
                </div>
              )}
            </div>
            <div
              style={{
                width: "1000px",
                textAlign: "center",
                marginTop: 10,
                marginLeft: 140,
              }}
            >
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  width: "100px",
                  marginRight: 5,
                }}
              >
                cancel
              </Button>
              {loggedIn && (
                <Button
                  variant="primary"
                  style={{
                    fontFamily: "IBM Plex Sans",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    width: "100px",
                  }}
                  type="submit"
                >
                  Post
                </Button>
              )}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <div
        className=" d-flex flex-row justify-content-between flex-wrap  "
        style={{ height: "auto", overflow: "wrap" }}
      >
        {data.map((item) => (
          <Row key={item.id}>
            <Col>
              <Card
                className=" conatiner m-4"
                key={item.id}
                style={{ width: "100%" }}
              >
                <Link to={`/${123}`} style={{ textDecoration: "none" }}>
                  <Card.Img
                    variant="top"
                    src={item.postImage}
                    style={{ width: "100%", height: "300px" }}
                  />
                </Link>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "IBM Plex Sans",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    ✍️ Article
                  </Card.Title>
                  <div className="d-flex flex-row justify-content-between">
                    <Link to={`/${123}`} style={{ textDecoration: "none" }}>
                      <Card.Title style={headingStyle}>{item.title}</Card.Title>
                    </Link>

                    <Dropdown className="bg-light btn-sm ">
                      <Dropdown.Toggle className="bg-light btn-sm text-black"></Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleShow(item.id)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleRemoveShow}>
                          Delete{" "}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            to={`/${123}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            View{" "}
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Card.Text style={descStyle}>{item.description}</Card.Text>
                </Card.Body>

                <div className="d-flex flex-row  justify-content-between">
                  <div className="d-flex flex-row  align-items-center ">
                    <img
                      src="../../assets/users/user1.svg"
                      alt="img"
                      style={{
                        width: "48px",
                        height: "48px",
                        marginLeft: 10,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "IBM Plex Sans",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        color: "black",
                        marginTop: 15,
                        paddingLeft: 10,
                      }}
                    >
                      Sarthak Kamra
                    </p>
                  </div>
                  <div
                    className="d-flex flex-row  justify-content-between "
                    style={{ width: "150px", paddingRight: 10 }}
                  >
                    <p
                      style={{
                        marginTop: 15,
                        color: "#525252",
                        fontFamily: "IBM Plex Sans",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 500,
                      }}
                    >
                      <IoEyeOutline />
                      1.4k views{" "}
                    </p>
                    <p>
                      <FaHeart className={classes.likeIcon} />
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    </Fragment>
  );
};

export default CardBox;
