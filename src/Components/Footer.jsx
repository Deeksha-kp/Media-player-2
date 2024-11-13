import React from 'react'
// import Footer from 'react-bootstrap/Footer';
import History from './../pages/History';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';





function Footer() {
  return (
    <div className='container mt-5 w-100' style={{height:'300px'}}>

      <div className='row'>
        <div className='col-md-5'>
            
          <div className='d-flex mb-2'>
            <i class="fa-regular fa-circle-play" style={{fontSize:"30px"}}></i>

            <h4 className='ms-1 mb-1'>MediaPlayer</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi, tempore ipsum natus ea soluta quaerat officiis eaque perspiciatis mollitia debitis autem repellendus neque deserunt voluptate suscipit accusamus deleniti hic?
          </p>

        </div>
        <div className='col-md-2 px-5'>
          <h3>Guides</h3>
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing</Link></div>
          <div><Link to={'home'} style={{textDecoration:'none',color:'white'}}>Home</Link></div>
          <div><Link to={'history'} style={{textDecoration:'none',color:'white'}}>History</Link></div>

        </div>
        <div className='col-md-2'>
          <h3>
            Guide
          </h3>
         
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link></div>
          <div><Link to={'home'} style={{textDecoration:'none',color:'white'}}>React Router</Link></div>
          <div><Link to={'history'} style={{textDecoration:'none',color:'white'}}>React bootstsrap</Link></div>
        </div>
        <div className='col-md-2'>
        
          <h4>
            Contact Us
          </h4>



          <div class='d-flex'>
          <input type="text" className='me-2 rounded' placeholder='     enter your email'/>
          <Button variant="info" ><i class="fa-solid fa-arrow-right "></i> </Button>{' '}
         
          </div>


          {/* logos */}
          <div className='mt-1 d-flex '  >
            <div className='p-2'><i class="fa-brands fa-facebook"></i></div>
            <div className='p-2'><i class="fa-brands fa-twitter"></i></div>
            <div className='p-2'><i class="fa-brands fa-instagram"></i></div>
            <div className='p-2'><i class="fa-brands fa-linkedin"></i></div>
            <div className='p-2'><i class="fa-brands fa-github"></i></div>
            <div className='p-2'><i class="fa-solid fa-phone"></i></div>
          </div>
          
          
        </div>
        
      </div>

{/* copyright */}
<div className='d-flex  align-items-center justify-content-center mt-5'><p>Copyright &copy; july 2024 Batch,Media Player, Built with </p></div>

    </div>
  )
}

export default Footer