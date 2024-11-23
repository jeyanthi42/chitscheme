import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import { Row,Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DataContext from './context/DataContext'

const Paydetail = () => {
  const {chitInfo,dueDate,loginmember} = useContext(DataContext);
  var getFutureWeeks =0;  var getFutureAmt =0 ;var getCurrentWeekNumber =0;var getCurrentDueAmt=0;
  //console.log(" This is home page Login Array",loginMemInfo);  
  if(loginmember.length>0){
      getFutureWeeks = chitInfo.chitPeriod - (loginmember[0].paidweeks + loginmember[0].inProgress + loginmember[0].overDueWeek)
      getFutureAmt = getFutureWeeks*chitInfo.chit_due*loginmember[0].chitCount;     
      getCurrentWeekNumber = loginmember[0].paidweeks + loginmember[0].overDueWeek + 1   
      getCurrentDueAmt = chitInfo.chit_due*loginmember[0].chitCount;     
  }  

  return (
    <div>
      {
        loginmember.length >0 ?
        <Container>
      <div className='content'>        
      <Row>
      <Col className='mt-3'> 
      <Card className='currentCardprob  fst-italic' border={"warning"} > 
      <Button variant="warning fst-italic fs-4"><b>Current Period</b></Button>
<Card.Body >
<Card.Header>
  Your Payment is pending for current week.Please pay on due...
    <b>Make It Happen Success.</b>
    </Card.Header>
  <Card.Title>
    Week # : {getCurrentWeekNumber} <h6> Due on : {dueDate}</h6>
  </Card.Title>       
</Card.Body>
<Button variant="warning  fst-italic fs-4">Due Amount <br></br> <b>Rs.{getCurrentDueAmt}</b></Button>

        </Card>
        </Col>
        <Col className='mt-3' > 
        <Card className='successCardprob fst-italic' border="success" text={"dark"}>
              <Button variant="success  fst-italic fs-4"><b>Success Payment</b></Button>
              <Card.Body >
                  <Card.Header>
                  Your paid amount got Received Successfully.Keep continue, trust and save money.
                  <b>Thank You So Much!!</b>
                  </Card.Header>
                <Card.Title>
                  Total Paid Weeks: {loginmember[0].paidweeks}
                </Card.Title>
                <Card.Text>
                </Card.Text>

              </Card.Body>
              <Button variant="success  fst-italic fs-4">Total Paid Amt <br></br> Rs.{loginmember[0].paidweeks * loginmember[0].chitCount * chitInfo.chit_due }</Button>

            </Card>
        
        </Col>
        <Col className='mt-3' > 
        <Card className='dangerCardprob fst-italic' border="danger" text={"dark"}>
              <Button variant="danger  fst-italic fs-4"><b>Overdue Payment</b></Button>
              <Card.Body >
                  <Card.Header>
                  Your payment is on overdue.. Due to this, you might not get whole benefits.
                  <b>Please Pay the due amount ASAP!!</b>
                  </Card.Header>
                <Card.Title>
                  Pending Weeks: {loginmember[0].overDueWeek}  </Card.Title>
                <Card.Text>
                </Card.Text>

              </Card.Body>
              <Button variant="danger  fst-italic fs-4">Total Overdue Amt <br></br> Rs. {loginmember[0].overDueWeek * loginmember[0].chitCount * chitInfo.chit_due }</Button>

            </Card>       
        
        </Col>
        <Col className='mt-3' > 
        <Card className='futureCardprob fst-italic' border="secondary" text={"dark"}>
              <Button variant="secondary  fst-italic fs-4"><b>Upcoming Payment</b></Button>
              <Card.Body >
                  <Card.Header>
                   Your future payment detail is here for upcoming weeks.Thanks for your passions.
                  <b>This Is For Your Future.</b>
                  </Card.Header>
                <Card.Title>
                  Future Weeks: {getFutureWeeks}
                </Card.Title>
                <Card.Text>
                </Card.Text>

              </Card.Body>
              <Button variant="secondary  fst-italic fs-4">Remaining Amt <br></br> Rs. {getFutureAmt}</Button>

            </Card>
            </Col>
      </Row>


      </div>

     </Container>
        :
        <p>Something went wrong. Please reach your admin</p>
      }
      

       </div>
  )
}

export default Paydetail
