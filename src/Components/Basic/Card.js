import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    let product = props.product;
    const productDetailHandler=()=>{
        const produ = product;
        navigate(`/home/${props.product.id}`,{state:produ});
       }
  return (
    <>
     <div className="card" key={product.id} onClick={productDetailHandler}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <Button onClick={() => props.handleAdd(product)} className="btn">
                        Add to cart
                    </Button>
                </div>
    </>
  )
}

export default Card