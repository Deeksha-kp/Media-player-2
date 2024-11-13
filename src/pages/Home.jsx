import React,{ useState}from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'

Link

function Home() {
  const [addResponse,setAddResponse]=useState()
  
  return (
    <>
      <div className="container d-flex justify-content-between my-5">


        <Add setAddResponse={setAddResponse}/>
        {/* <Link className='text-warning fw-bold fs-5' style={{ textDecoration: 'none' }} to={'/history'}> Watch History</Link> */}
        <Link className='text-warning fw-bold fs-5'    to={'/History' } style={{textDecoration:'None'}}> Watch history</Link>


      </div>

      <div className="row container my-5" >
        <div className="col-lg-6">
          <View  addResponse={addResponse}/>
        </div>



        <div className="col-lg-6">
          <Category />
        </div>


      </div>












    </>
  )
}

export default Home