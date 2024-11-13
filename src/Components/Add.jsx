import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { addVideo } from '../services/allAPI';
  



function Add({setAddResponse}) {
  const [videoDetails,setVideoDetails]=useState({caption:" ",imageurl:" ",youtubeurl:""})
  console.log(videoDetails);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isinvalidurl,setisinvalidurl]=useState(false)
  console.log(videoDetails);

  const getEmbedurl=(link)=>{

    if(link.includes('v=')){

      let videoId=link.split('v=')[1].slice(0,11)
      console.log(videoId);
      setVideoDetails({...videoDetails,youtubeurl:`https://www.youtube.com/embed/${videoId}`})
      setisinvalidurl(false)


    }
    else{
      setVideoDetails({...videoDetails,youtubeurl:""})
      setisinvalidurl(true)
    }
  }

const handleUpload=async()=>{
   const {caption,imageurl,youtubeurl}=videoDetails
   if(caption && imageurl && youtubeurl){
   
    // console.log("api call");

    // api call
    try{
     const result=await addVideo(videoDetails)
     console.log(result);
     setAddResponse(result.data)
     toast.success(`${result.data.caption} is added to your collection`)
     handleClose()
    }
    catch(err){
      console.log(err);
    }

    
    
   }
   else{
    // alert("please enter the field")
    toast.warning("enter the field completely")
   }
}





  return (
    <>
    <div className="d-flex align-items-center">
      <h4 className='text-warning'>upload new video</h4>
      <button onClick={handleShow} className='ms-3 btn btn-warning fs-5 fw-bold rounded-circle'>+</button>

    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the folowing details</p>
          <div className=" border border-3 border-info p-3">
          <FloatingLabel
        controlId="floatingInput"
        label="video caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="image url" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="image url"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageurl:e.target.value})} type="text" placeholder="youtube url" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="youtube url"
        className="mb-3"
      >
        <Form.Control onChange={e=>getEmbedurl(e.target.value)} type="text" placeholder="video caption" />
      </FloatingLabel>



    
       
        {
          isinvalidurl  && <div className='text-danger fw-bold'>invalid input</div>
          }

</div>
       
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload} >Upload</Button>
        </Modal.Footer>
      </Modal>

      
      <ToastContainer position="top-right" autoClose={5000} theme="colored"/>
      
    </>
  )
}

export default Add