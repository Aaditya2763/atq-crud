import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import image from "../../assets/post images/img1.svg"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React,{Fragment,useState} from 'react'
import { IoEyeOutline } from "react-icons/io5";
import Form from 'react-bootstrap/Form';


import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import classes from './Card.module.css';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
const CardBox = ({headingStyle,descStyle}) => {
     const [show, setShow] = useState(false);
    const [remove, setRemove] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleRemoveClose = () => setRemove(false);
    const handleRemoveShow = () => setRemove(true);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const loggedIn = useSelector((state) => state.auth.loggedIn);
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
  
  return (
    <Fragment>
        {/* edit modal */}
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
       {loggedIn ? <Modal.Title >✍️Create Post with ❤️</Modal.Title>: <Alert duration={500000}>
            <div className="alert alert-danger" role="alert" style={{textAlign:"center"}}>
              You need to login first
            </div>
          </Alert>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                {" "}
                Post Title
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Title of the post"
                autoFocus
                style={{
                    fontFamily: "IBM Plex Sans",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,height:'auto'
                  }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label  style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}>Post Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="auto"
                style={{
                    fontFamily: "IBM Plex Sans",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                  }}
                placeholder="Write the description of the post"
              />
            </Form.Group>
            
        <div className="d-flex flex-row justify-content-between">
              <input className="form-control"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => imageChangeHandler(e)}
            style={{width:"200px",height:"50px"}}
    placeholder="Choose file"/>
    {selectedImage && (
         <div > <p>Selected Image:</p>
         <img src={selectedImage} alt="Selected" style={{ width: '100%',height:"200px" ,margin:"5px" }} /></div>
          )}
        </div>
     
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}  style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}>
            cancel
          </Button>
         {loggedIn && ( <Button variant="primary" onClick={handleClose} style={{
                  fontFamily: "IBM Plex Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}>
            Post
          </Button>)}
        </Modal.Footer>
      </Modal>
        {/* delete modal */}
        <Modal show={remove} onHide={handleRemoveClose}>
        <Modal.Header closeButton>
         {loggedIn ? <Modal.Title className='text-warning'>Warning ! </Modal.Title>:  <Modal.Title className='text-danger'>You need to login First</Modal.Title>}
        </Modal.Header>
       {loggedIn &&( <Modal.Body>Are you sure you want to delete this Post.You will not be able to retrieve it in future </Modal.Body>)}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRemoveClose}>
            Close
          </Button>
         {loggedIn &&( <Button variant="danger" onClick={handleRemoveClose}>
            Save Changes
          </Button>)}
        </Modal.Footer>
      </Modal>
        <Row  style={{width:"60%",}}>
      
      <Col >
     
        <Card className='m-4' >
        <Link to={`/${123}`} style={{textDecoration:'none'}}>
          <Card.Img variant="top" src={image} />
          </Link>
          <Card.Body>
            <Card.Title style={{fontFamily: 'IBM Plex Sans', fontSize: '18px', fontStyle: 'normal', fontWeight: 500,color:'black'}}>✍️ Article</Card.Title>
            <div  className="d-flex flex-row justify-content-between" >
            <Link to={`/${123}`} style={{textDecoration:'none'}}>
            <Card.Title style={headingStyle}  >What if famous brands had regular fonts? Meet RegulaBrands!I’ve worked in UX for the better part of a decade. From now on, I plan to reijfdbdjbfjbbbbjbvdkjnvioe
            bsjdbdjbfjbdzjfbjadbfkjbdskjnkaendkjvn
                    dfvnioedfvafodjvfdovjefdjobvofdbofnkjdsgnvoindr…</Card.Title>
            </Link>
           
            <Dropdown className='bg-light btn-sm ' >
    <Dropdown.Toggle className='bg-light btn-sm text-black' >
  
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
      <Dropdown.Item onClick={handleRemoveShow}>Delete </Dropdown.Item>
      <Dropdown.Item ><Link to={`/${123}`}style={{textDecoration:"none",color:'black'}}>View </Link></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
            </div>
            <Card.Text style={descStyle}>
            I’ve worked in UX for the better part of a decade. From now on, I plan to reijfdbdjbfjbbbbjbvdkjnvioe
            bsjdbdjbfjbdzjfbjadbfkjbdskjnkaendkjvnI’ve worked in UX for the better part of a decade. From now on, I plan to reijfdbdjbfjbbbbjbvdkjnvioe
            bsjdbdjbfjbdzjfbjadbfkjbdskjnkaendkjvn
                    dfvnioedfvafodjvfdovjefdjobvofdbofnkjdsgnvoindr…
                    dfvnioedfvafodjvfdovjefdjobvofdbofnkjdsgnvoindr…
            </Card.Text>
            
          </Card.Body>
         
           
          <div className="d-flex flex-row  justify-content-between">
              <div  className="d-flex flex-row  align-items-center ">
                  <img src="../../assets/users/user1.svg"
                  alt='img'
                  style={{
                      width:"48px",
                      height:"48px",
                      marginLeft:10
                     
                  }}
                  />
                  <p style={{fontFamily: 'IBM Plex Sans', fontSize: '18px', fontStyle: 'normal', fontWeight: 600,color:"black",marginTop:15,paddingLeft:10}}>Sarthak Kamra</p>

              </div>
              <div className="d-flex flex-row align-items-center justify-content-between " style={{width:"150px", paddingRight:10}}>
              <p style={{marginTop:15, color:'#525252',fontFamily: 'IBM Plex Sans', fontSize: '14px', fontStyle: 'normal', fontWeight: 500,}}><IoEyeOutline   />1.4k views </p> 
              <p><FaHeart className={classes.likeIcon} /></p>

              </div>
          </div>
        </Card>
      </Col>
    
  </Row>
    </Fragment>
  )
}

export default CardBox