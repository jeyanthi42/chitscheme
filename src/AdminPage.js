import React, { useContext } from 'react'
import Header from './Header'

import { Form, Collapse, ListGroup, Button, InputGroup } from 'react-bootstrap';
import DataContext from './context/DataContext'
import { Container, Card } from 'react-bootstrap'
import chitmembers from './api/chitmembers';


const AdminPage = () => {

    const { chitmemberDetails, handleChitMembersDetails,setPaymentReceived,paymentReceived,
        setOpen,open,itm, setItem,handleEnrolleExpand
     } = useContext(DataContext);
    const list = chitmemberDetails
    const loginMobileNo = sessionStorage.getItem("loginid");
     
    return (
        <div>
            {loginMobileNo.match('8754459104') ?
            (
            <Container>
                {chitmemberDetails.length ?
                    (
                        <Card className='loginCardprob  fst-italic' border={"warning"}>
                            <ListGroup>{list.length > 0 && list.map((item) =>
                                <ListGroup.Item key={item.id}>
                                    <Button  variant="info" onClick={()=>{handleEnrolleExpand(item.id)}}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={itm} > {item.enrolleName} 
                                    </Button>
                                    <Collapse in={itm==item.id&& open} dimension="width">
                                        <div id="example-collapse-text">
                                            <Card body style={{ width: '400px' }} className='futureCardprob fst-italic'>
                                                <Form onSubmit={(e)=>{handleChitMembersDetails(item.id,e)}}>
                                                    <Form.Group>
                                                        <InputGroup >
                                                            <InputGroup.Text > ID </InputGroup.Text>
                                                            <Form.Control className = 'fst-italic' id='id' type="number" placeholder={item.id} ></Form.Control>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Enrolled Name </InputGroup.Text>
                                                            <Form.Control  className = 'fst-italic'  id='id' type="text" placeholder={item.enrolleName} ></Form.Control>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Mobile Number </InputGroup.Text>
                                                            <Form.Control  className = 'fst-italic'  id='id' type="number" placeholder={item.mobileNO} ></Form.Control>
                                                        </InputGroup>
                                                        <InputGroup >
                                                            <InputGroup.Text > Paid Received </InputGroup.Text>
                                                            <InputGroup.Checkbox  className = 'fst-italic'  id='id' type="checkbox" checked= {paymentReceived}
                                                            onChange={(e)=>setPaymentReceived(e.currentTarget.checked)}></InputGroup.Checkbox >
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Button variant="warning" className='loginbtn fst-italic' type='submit' ><b> Submit</b></Button>
                                                    <Button variant="danger" className='loginbtn fst-italic' type='submit'><b> Cancel</b></Button>
                                                </Form>
                                            </Card>
                                        </div>
                                    </Collapse>

                                </ListGroup.Item >)
                            }
                            </ListGroup>
                        </Card>

                    )
                    :
                    (<p> List is Empty</p>)}
            </Container>
            ) :
            (<p>Check the Admin data</p>) }

        </div>
    )
}

export default AdminPage