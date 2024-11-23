import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { Card, InputGroup,Form,Button } from 'react-bootstrap'
import { TbPasswordUser } from "react-icons/tb";


const AdminLogin = () => {
    const { setadminPassword ,handleAdminPwd} = useContext(DataContext);
  return (
    <div>
      <Card style={{ width: '18rem' }} className='loginCardprob' border="info">
      <Card.Header >
          <Card.Title>
            <TbPasswordUser className='h1' />            
            <p className='h1 fst-italic'>Password</p>
          </Card.Title>
        </Card.Header>
        <Card.Body>
            <Form onSubmit={handleAdminPwd}>
                <Form.Group>
                    <InputGroup>
                    <InputGroup.Text  className='passwordProb' > <i className="bi bi-eye-slash"></i>
                    </InputGroup.Text >
                    <Form.Control id = 'id 'type="password" placeholder="Password"  
                    className='passwordProb fst-italic' onChange={(e)=>setadminPassword(e.target.value)}/>   
             
                    </InputGroup>
                </Form.Group>
                <Button variant="warning" className='loginbtn fst-italic' type='submit'><b> Submit</b></Button>
          
            </Form>
        </Card.Body>

        </Card>
    </div>
  )
}

export default AdminLogin
