import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Product from "../components/Product"
import {listProducts} from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
const Homescreen = () => {
    const dispatch = useDispatch()
     const productList= useSelector(state=>state.productList)
     const {products,loading,error}=productList

    useEffect(() => {
         dispatch(listProducts())
    }, [dispatch])
    return (
        <div>
         <h1>LATEST PRODUCTS</h1>
         {loading?<h2><Loader /> </h2>:error?<Message variant='danger' children={error}></Message>:
         <Row >
            {products.map(product=>( <Col xl={3} key={product._id}><Product  product={product} /></Col>))}
               
            </Row>
         }
           
        </div>
    )
}

export default Homescreen
