// PostBox.js
import React, { Fragment } from 'react';
import CardBox from '../components/card/Card';
import { Container } from 'react-bootstrap';

import  "./post.css"
import { PiTelegramLogo } from "react-icons/pi";
const PostBox = () => {
  // Use the useParams hook to get the id from the route


  return (
    <Fragment>
      <Container className="d-flex flex-row justify-content-between mt-3 mb-3 position-relative">
        <CardBox descStyle={{fontFamily: 'IBM Plex Sans', fontSize: '19px', fontStyle: 'normal', fontWeight: 400,color:"#5C5C5C", width:"100%", height:"auto", overflow:'hidden'}}
        headingStyle={{fontFamily: 'IBM Plex Sans', fontSize: '22px', fontStyle: 'normal', fontWeight: 600,lineHeight:"30px",width:"100%", height:"auto", overflow:'hidden'}} />
        <div className="border rounded mt-4" style={{ width: '30%', height: '415px', border: '1px solid red' }}>
            <p className="heading" style={{fontSize:20}}> All Comments</p>
           <div className='commentContainer' style={{width:"100%",height:320}}>
            <div className='  p-1' style={{width:"100%",height:'auto'}}>
            <p className='author'>Author:</p>
            <p className='comment'>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment'>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment'>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
            </div>
            <div className='  p-1'>
            <p className='author'>Author:</p>
            <p  className='comment'>sjbjsjfdajndjakbgadnfkgnvkfnbkgfnkbnfgnbkfgnbsknbngkjbfnsnbsngnf</p>
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
