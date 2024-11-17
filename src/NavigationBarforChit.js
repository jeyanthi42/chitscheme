import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavigationBarforChit = () => {

  const inputRef= useRef();
  return (


    <div>

       <Container>
      <Navbar bg="dark" data-bs-theme='dark' >
       
        <Nav className="me-auto">
        <Link   className = 'NavProb' to='/Home'  ref={inputRef}> Home </Link> | 
        <Link  className = 'NavProb' to ='/Paydetail' onClick={()=>inputRef.current.focus()}> PaymentDetails</Link>                    
        </Nav>  
      </Navbar>
      </Container>

          
         
      </div>
  )
}

export default NavigationBarforChit