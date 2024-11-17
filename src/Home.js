import React, { useContext } from 'react'
import {  useEffect,  } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const Home = () => {
  const {loginMemberInfo}= useContext(DataContext);  
   var loginMemInfo={}; var loginmember=[];
  loginMemInfo = sessionStorage.getItem("loginmemberDetail");    
  console.log(" This is home page Login Array",loginMemInfo);  
  if(loginMemInfo!=null){
      loginmember = JSON.parse(loginMemInfo);
      console.log("Log array", loginmember[0].enrolleName);        
  }
       
  return (
    <div>
      {
        loginmember != null ?
        <Container>   
        <div className='content'>
        <Card className='infocard  fst-italic' border="info">
          <Card.Header >
            <Card.Title as='h1'>
              Welcome {loginmember[0].enrolleName }
            </Card.Title>
            Congratulation! Your are enrolled the 'gold chit scheme' sucessfully. <br></br>
          </Card.Header>
          <Card.Body>
            <Card.Title as='h5'>Chit details</Card.Title>
            Scheme Name: <b> Gold Chit Scheme </b> <br></br>
            Chit Mode: <b>Weekly Mode  </b><br></br>
            Amount per Week: <b> $250  </b> <br></br>
            Chit Period: <b>46 Weeks </b><br></br>
            Maturity period: <b>52 Weeks</b><br></br>
            Maturity amount: <b>11500</b><br></br> <br></br>

          </Card.Body>
          <Card.Footer>
            <Card.Title as='h5'>Member details</Card.Title>
            Name :  <b className='text-danger'> {loginmember[0].enrolleName }<br></br> </b>
            Mobile Number :  <b className='text-danger'> {loginmember[0].mobileNO }<br></br> </b>
            Number of chits: <b className='text-danger'>{loginmember[0].chitCount } <br></br> </b> <br>
            </br>
            <i className='text-bg-warning'> You can verfify your payment in <b><Link  className = 'NavProb text-dark' to ='/Paydetail'> PaymentDetails</Link></b> </i>
          </Card.Footer>
        </Card>
        </div>
      </Container>
      :
      <p>
        fgfg
      </p>

      }
      

    </div>
  )
}

export default Home
