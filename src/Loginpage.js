import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const Loginpage = () => {
  const { handleLoginChit } = useContext(DataContext);
  const { setLoginnumber } = useContext(DataContext);

  return (
    <div>

      <Card style={{ width: '18rem' }} className='loginCardprob' border="info" >
        <Card.Header >
          <Card.Title>
            <i className="bi bi-person-circle h1"></i>
            <p className='h1 fst-italic'>Login</p>
          </Card.Title>
        </Card.Header>

        <Card.Body>
            <Form onSubmit={handleLoginChit}>
              <Form.Group>
              <InputGroup >
              <InputGroup.Text className='phoneProb'> <i className="bi bi-telephone h2"></i></InputGroup.Text>
              <Form.Control id = 'id 'type="number" placeholder="Mobile Number"  className='phoneProb fst-italic' 
              onChange={(e)=>setLoginnumber(e.target.value)} />   
              </InputGroup>  
              </Form.Group>
              <Button variant="warning" className='loginbtn fst-italic' type='submit'><b> Submit</b></Button>
           </Form>

        </Card.Body>

       </Card>
    </div>
  )
}

export default Loginpage
