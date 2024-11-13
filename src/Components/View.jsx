import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { getAllvideos } from '../services/allAPI';


function View({addResponse}) {
  const [deleteResponse, setDeleteResponse]=useState()   
  // deleting card without refreshing
  
    const [allVideos,setAllVideos]=useState([])
    // adding card without refreshing
    useEffect(()=>{
      getallvideo()

    },[addResponse,deleteResponse])
    console.log(allVideos);

    const getallvideo=async()=>{
      try{
        const result=await getAllvideos()
        console.log(result);

        if(result.status>=200 & result.status<=300){
          setAllVideos(result.data)
        }
      }
      catch(err){
        console.log(err);
      }
    }
  return (
    <>
    <Row className='border border-3 p-3' >
      {
        allVideos.length>0?
        allVideos?.map(video=>(
      <Col key={video?.id} lg={4} md={6} sm={12}  >
     <VideoCard displayData={video} setDeleteResponse={setDeleteResponse}/>
       
      

    
     </Col>
        ))
    :
    <div className='text-danger fw-bold fs-3'>nothing to display</div>
    
    }

    </Row>
    
    </>
    
  )
}

export default View