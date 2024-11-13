import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteHistory, getAllHistory, getHistory} from '../services/allAPI';




function History() {

  const[videoHistory, setVideoHistory]=useState([])
  console.log(videoHistory);

  const getHistory =async()=>{
    try {
      const result=await getAllHistory()
      setVideoHistory(result.data)
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getHistory()
  },[])

  const ClickRemoveHistory=async(videoId)=>{
    try{
      const result=await deleteHistory(videoId)
      getHistory()
      console.log(result);
    }
    catch(err){
      console.log(err);
    }

  }

  
  return (
   <>
   <div className="container w-100">
    <div className='table mt-5 border border-hover border-white'>
    <table className='table'>
      <thead>
        <tr>
          <th>#id</th>
          <th>Name</th>
          <th>URL</th>
          <th>Date and time</th>
          <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
        </tr>
      </thead>
      <tbody>
       {
        videoHistory?.map((id,index)=>{
          return(
            <>
             <tr key={index}>
          <td>{index +1}</td>
          <td>{id.caption}</td>
          <td> <a href={id.youtubeurl}>{id.youtubeurl}</a></td>
          <td>{id.formatedDate}</td>
          <td> 
            <button onClick={()=>ClickRemoveHistory(id?.id)} ><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
        <tr></tr>
            </>
          )
        })
       }
      </tbody>
    </table>
    </div>

   </div>
   </>
  )
}

export default History