import React from 'react'
import { Link } from 'react-router-dom';
 import LandingImg from '../assets/music.gif'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Landing() {
  return (
   <>
   <div className='container mt-5 mb-5'>
    <div className='row'>
      <div className='col-md-6'>
        <h3>Welcome to <span className='text-warning'>Media Player </span></h3>
        <p className='mt-4' style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum rerum aperiam earum unde dolore est adipisci enim. Illo est error earum magnam inventore molestias mollitia sunt explicabo optio quos. </p>
        <Link to={'/Home'} className='btn btn-info mt-3'>Get Started</Link>
      </div>
      <div className='col-md-6 mb-5'>
<div className='ms-5'>
        <img src={LandingImg} alt="" />
  
</div>    </div>

    </div>

   </div>
   


   {/* cards */}
<div className='d-flex  '>
 <Card style={{ width: '20rem',marginLeft:'160px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVPRVBJAlsifIAuut0gbJ4cFnvoPJs5hkYL9fay2nX-T6y-F0ASvMLDinm-EEhL4LsNg4&usqp=CAU" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          User can Upload ,View and Remove the Videos.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      
    </Card>
{/* card2 */}
<Card style={{ width: '20rem',marginLeft:'160px'  }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg" />
      <Card.Body>
        <Card.Title>Categorize videos</Card.Title>
        <Card.Text>
          User can Categorize the video by drag and Drop
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      
    </Card>
{/* card3 */}

<Card style={{ width: '20rem',marginLeft:'160px'  }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-vector/computer-shape-logo-template_1072992-634.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      
    </Card>


</div>




<br /><br /><br />
{/* -------------------------------------------- */}

<div className='container  mt-5 mb-5 border border-white rounded border-3 p-5'>
    <div className="row">
      <div className='col-lg-6'>

        <p><span className='fw-boldm fs-5'>Play Everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas assumenda mollitia veritatis porro tempore recusandae blanditiis earum! Voluptatibus at neque vitae hic ab deserunt soluta officiis eum quas blanditiis </p>
        
        <p><span className='fw-boldm fs-5'>Categorize Video</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas assumenda mollitia veritatis porro tempore recusandae blanditiis earum! Voluptatibus at neque vitae hic ab deserunt soluta officiis eum quas blanditiis </p>

        <p><span className='fw-boldm fs-5'>Managec History</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas assumenda mollitia veritatis porro tempore recusandae blanditiis earum! Voluptatibus at neque vitae hic ab deserunt soluta officiis eum quas blanditiis </p>

        {/* <h3 style={{width:"600px",marginLeft:"50px"}}> <span className='text-warning'>Simple,Fast and Powerful </span ></h3> */}
        {/* <p className='mt-4' style={{textAlign:'justify',marginLeft:"50px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum rerum aperiam earum unde dolore est adipisci enim. Illo est error earum magnam inventore molestias mollitia sunt explicabo optio quos. </p> */}
        {/* <Link to={'/Home'} className='btn btn-info mt-3'>Get Started</Link> */}
      </div>






      <div className='col-md-6 p-4'>
      <iframe style={{marginTop:"30px"}} width="560" height="315" src="https://www.youtube.com/embed/itnqEauWQZM?si=3GMEisNsFJ0CGHT_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    </div>

   </div>
   

<br /><br /><br /><br /><br /><br />  
   </>
  )
}

export default Landing