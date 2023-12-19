// PostBox.js
import React, { Fragment } from 'react';

import { Container } from 'react-bootstrap';

import  "./post.css"
import { PiTelegramLogo } from "react-icons/pi";
import Card2 from '../components/card/Card2';
const PostBox = () => {
  // Use the useParams hook to get the id from the route


  return (
    <Fragment>
      <Container className="box" >
        <Card2 descStyle={{fontFamily: 'IBM Plex Sans', fontSize: '19px', fontStyle: 'normal', fontWeight: 400,color:"#5C5C5C", width:"100%", height:"auto", overflow:'hidden'}}
        headingStyle={{fontFamily: 'IBM Plex Sans', fontSize: '22px', fontStyle: 'normal', fontWeight: 600,lineHeight:"30px",width:"100%", height:"auto", overflow:'hidden'}} />
        <div className="comment border" style={{height:"350px"}} >
            <p className="heading" style={{fontSize:20}}> All Comments</p>
           <div className='commentContainer' style={{width:"100%",height:"300px"}}>
            <div className='chat' style={{width:"100%",height:'auto'}}>
            <p className='author'>Author:</p>
            <p className='comment'style={{width:"100%",marginTop:-15}}>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment' style={{width:"100%",marginTop:-15}}>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment' style={{width:"100%", marginTop:-15}}>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment' style={{width:"100%", marginTop:-15}}>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
           </div>
           <form  className='d-flex flex-row m-1 mt-1'>
            <input placeholder='write comment' className='form-control'/>
            <button type='button' className='btn btn-primary'><PiTelegramLogo/></button>
           </form>
        
        </div>
      </Container>
    </Fragment>
  );
};

export default PostBox;
