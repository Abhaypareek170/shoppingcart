import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
import './ProductDetail.css'
import { Button } from 'react-bootstrap';
const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const backHandler = ()=>{
        navigate('/home');
    }
  return( 
    <>
    <Navbar/>
    <Button onClick={backHandler}>Back to home</Button>
    <div>
    
    <div id='hero'>
     <div id='row'>
     <div id="col">
    <div className="product">
        
        <div className="img-container">
            <img id="imageBox" src={location.state.image} alt=''/>
        </div>
    </div>
    </div>
    <div id="col">

                 <div className="content">
                     <p id="p brand"><b>Description:</b>  {location.state.description}</p>
                     <h2 id='h2'>  {location.state.title}</h2>
                     <div id="rating">
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star-half-o"><b>Rating:</b>{location.state.rating.rate}</i>
                     </div>
                     <p id="p price"><b>Price:</b>{location.state.price}</p>
                     
                 </div>

             </div>
    </div>
</div>
</div>
</>
  )
}

export default ProductDetail