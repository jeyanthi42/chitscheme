import React, { useContext} from 'react'
import { Card, Container } from 'react-bootstrap';
import { Form, Collapse, ListGroup, Button, InputGroup } from 'react-bootstrap';
import DataContext from './context/DataContext'


export const AdminViewPage = () => {

    const { chitmemberDetails,handleEnrolleExpand,open,itm,handleCollapseChitmember }  = useContext(DataContext);
    const list = chitmemberDetails
    const loginMobileNo = sessionStorage.getItem("loginid");
  return (
    <div>
        {loginMobileNo.match('8754459104') ?(
        <Container>
        {chitmemberDetails.length ? (
            <Card className='loginCardprob' border="info">
                <ListGroup>{list.length > 0 && list.map((item) =>
                                <ListGroup.Item key={item.id}>
                                    <Button variant="info" className='fst-italic'  onClick={()=>{handleEnrolleExpand(item.id)}}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={itm} > {item.enrolleName} 
                                    </Button>
                                    <Collapse in={itm==item.id&& open} dimension="width">
                                        {/* <div id="example-collapse-text"> */}
                                            <Card body style={{ width: '400px' }} className='loginCardprob fst-italic' >
                                                <Form onSubmit={(e)=>{handleCollapseChitmember(item.id,e)}}>
                                                    <Form.Group>
                                                        <InputGroup >
                                                            <InputGroup.Text > ID </InputGroup.Text>
                                                            <InputGroup.Text > {item.id} </InputGroup.Text>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Enrolled Name </InputGroup.Text>
                                                            <InputGroup.Text > {item.enrolleName} </InputGroup.Text>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Mobile Number </InputGroup.Text>
                                                            <InputGroup.Text > {item.mobileNO} </InputGroup.Text>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Chit Count</InputGroup.Text>
                                                            <InputGroup.Text > {item.chitCount} </InputGroup.Text>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Paid Weeks : {item.paidweeks} </InputGroup.Text>
                                                            <InputGroup.Text > Amount :   Rs.{item.paidweeks * item.chitCount * 250} </InputGroup.Text>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Current Week : {item.inProgress}  </InputGroup.Text>
                                                            <InputGroup.Text > Due Amount  : Rs.{item.inProgress * item.chitCount * 250}  </InputGroup.Text>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Over Due Weeks: {item.overDueWeek} </InputGroup.Text>
                                                            <InputGroup.Text >  Amount :  Rs. {item.overDueWeek * item.chitCount * 250}</InputGroup.Text>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Feature Weeks : {item.futureWeek}  </InputGroup.Text>
                                                            <InputGroup.Text > Pending Amt :Rs. {item.futureWeek * item.chitCount * 250}   </InputGroup.Text>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Button variant="warning" className='loginbtn fst-italic' type='submit' ><b> OK</b></Button>
                                                </Form>
                                            </Card>
                                        {/* </div> */}
                                    </Collapse>

                                </ListGroup.Item >)
                            }
                            </ListGroup>

            </Card>
        ) : (<p> Chit members List is empty </p>) }

        </Container> ) :
        (<p>Check the admin</p>)}
    </div>
  )
}
