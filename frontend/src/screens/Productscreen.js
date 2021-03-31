
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,Image,ListGroup,Card,Button, Form} from "react-bootstrap"
import Rating from "../components/Rating"
import {productDetails} from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const Productscreen = ({history,match}) => {
    const [qty,setQty] = useState(1)
    const  dispatch = useDispatch()
    const {loading,product,error}=useSelector(state=>state.productDetails)
   
    useEffect(() => {
        dispatch(productDetails(match.params.id))
    },[dispatch,match])
   const addToCartHandler=()=>{
     history.push(`/cart/${match.params.id}?qty=${qty}`)
   }
    return (
        
        <>
           <Link className='btn btn-ligtht my-3' to='/'>
               Go Back
           </Link>
           {loading?<h2><Loader /> </h2>:error?<Message variant='danger' children={error}></Message>:
           <Row>
               <Col md={6}>
              <Image src={product.image} alt={product.name} fluid/>
               </Col>
               <Col md={3}>
               <ListGroup varient='flush'>
                   <ListGroup.Item><h3>{product.name}</h3>
                   </ListGroup.Item>
                   <ListGroup.Item>
                   <Rating value={product.rating} text={`${product.numReviews}reviews`} />
                   </ListGroup.Item>
                  <ListGroup.Item>
                  Price:${product.price}
                   </ListGroup.Item> 
                   Description:{product.description}  
               </ListGroup>   
              </Col>
              <Col md={3}>
                  <Card>
                      <ListGroup varient='flush'>
                          <ListGroup.Item>
                              <Row>
                                  <Col>
                                   Price:   
                                  </Col>
                                  <Col>
                                     <strong>${product.price}</strong> 
                                  </Col>
                                  
                              </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <Row>
                              <ListGroup.Item>
                              <Row>
                                  <Col>
                                   Status:   
                                  </Col>
                                  <Col>
                                     {product.countInStock>0?'In Stock':'Out of Stock'} 
                                  </Col>
                              </Row>
                          </ListGroup.Item>
                             </Row>
                          </ListGroup.Item>
                          
                          {product.countInStock>0 &&
                          <ListGroup.Item>
                              <Row>
                                  <Col>Qty</Col>
                                  <Col>
                                      <Form.Control as='select' value={qty} onChange={(e)=>setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map(x=>{
                                            return <option value={x+1}>{x+1}</option>
                                        })}    
                                      </Form.Control>
                                  </Col>
                              </Row>
                          </ListGroup.Item>}

                          <ListGroup.Item>
                              <Button className="btn-block" type='button' disabled={product.countInStock===0}
                                  onClick={addToCartHandler}>
                                  Add To cart
                              </Button>
                          </ListGroup.Item>
                      </ListGroup>
                  </Card>
              </Col>
           </Row>
           }
        </>
        
    )
}

export default Productscreen
