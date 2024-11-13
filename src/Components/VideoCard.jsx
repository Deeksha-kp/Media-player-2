import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { saveHistory, deleteVideo } from '../services/allAPI';

function VideoCard({displayData,setDeleteResponse}) {
  console.log(displayData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
 const {caption,youtubeurl}=displayData

const localTime=new Date()
console.log(localTime)
const formatedDate=localTime.toLocaleString()
console.log(formatedDate);
const historyData={caption,youtubeurl,formatedDate}
console.log(historyData);
try{
  await saveHistory(historyData)
}
catch(err){
  console.log(err);
}

 setShow(true)}

  const handleRemoveVideo=async(videoId)=>{
    try {
      
      const result= await deleteVideo(videoId)
      setDeleteResponse(result.data)
      console.log(result);
      
    } catch (err) {
      console.log(err);
      
    }
  }
  return (
    <>
    <Card style={{backgroundColor:'black'}}>
      <Card.Img  style={{height:'240px',width:'200px'}}  onClick={handleShow} variant="top" src={displayData?.imageurl} />
      <Card.Body style={{width:'200px'}}>
        <Card.Title className='d-flex justify-content-between'>
          <p className='mt-2'>{displayData?.caption}</p>
          <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn ' style={{color:'red',fontSize:'20px'}}><i class="fa-solid fa-trash"></i></button>
        </Card.Title>
        
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title >{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${displayData?.youtubeurl}?autoplay=1`} title="AAVESHAM Official Teaser | Jithu Madhavan | Fahadh Faasil | Sushin Shyam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard