// PostBox.js
import React, { Fragment, useState,useEffect } from 'react';

import { Alert, Container } from 'react-bootstrap';
import axios from 'axios';

import  "./post.css"
import { PiTelegramLogo } from "react-icons/pi";
import Card2 from '../components/card/Card2';
import { useParams } from 'react-router-dom';
const PostBox = ({user}) => {
  // Use the useParams hook to get the id from the route
const[comments,setcomments]=useState([])
const[commentmsg,setcommentmsg]=useState("")
const[errormsg,seterrormsg]=useState("")
const{id}=useParams();
  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const response = await axios.get('https://atq-assignment-backend.onrender.com/api/comments',{id});
  
        if (response.status === 200) {
          setcomments(response.data);
        }
      } catch (error) {
        throw new Error("Unable to fetch data");
      }
    };
  
    fetchAllComments(); // Call the function when the component mounts
  }, [Comment]);
  
  console.log(comments)
const commentHandler=async(id)=>{
  try {
    const response = await axios.get('https://atq-assignment-backend.onrender.com/api/comments',{
      id,commentmsg,user
    });

    if (response.status === 200) {
      setcomments(response.data);
    }
  } catch (error) {
    seterrormsg(error.message);
  }
  
}
// console.log(comments)
  return (
    <Fragment>
      <Container className="box" >
        <Card2 descStyle={{fontFamily: 'IBM Plex Sans', fontSize: '19px', fontStyle: 'normal', fontWeight: 400,color:"#5C5C5C", width:"100%", height:"auto", overflow:'hidden'}}
        headingStyle={{fontFamily: 'IBM Plex Sans', fontSize: '22px', fontStyle: 'normal', fontWeight: 600,lineHeight:"30px",width:"100%", height:"auto", overflow:'hidden'}} />
        <div className="comment border" style={{height:"350px"}} >
            <p className="heading" style={{fontSize:20}}> All Comments</p>
           
         {errormsg && ( <Alert duration={5000} className="alert alert-danger d-flex flex-row justify-content-between" style={{width:"100%",height:"auto"}} >
            {errormsg}
         
          
          </Alert>)}
           <div className='commentContainer' style={{width:"100%",height:"300px"}}>
          
           {comments.length > 0 ? (
  <div className="chat" style={{ width: "100%", height: "auto" }}>
    {comments.map((comment, index) => (
      <div key={index} style={{ marginBottom: "15px" }}>
        <p className="author">Author: {comment.user}</p>
        <p className="comment" style={{ width: "100%", marginTop: "-15px" }}>
          {comment.description}
        </p>
      </div>
    ))}
  </div>
) : (
  <h3 style={{textAlign:"center"}}>No comments available</h3>
)}
            
            
           </div>
           <form  className='d-flex flex-row m-1 mt-1' onSubmit={(e)=>{
            e.preventDefault();
            commentHandler();
           }}>
            <input placeholder='write comment' className='form-control'  value={commentmsg} onChange={(e)=>setcommentmsg(e.target.value)}/>
            <button type='submit' className='btn btn-primary'><PiTelegramLogo/></button>
           </form>
        
        </div>
      </Container>
    </Fragment>
  );
};

export default PostBox;
