import React from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap'
const NavbarComp = () => {
  return (
    <>
      <Navbar variant={'dark'} expand="sm" style={{fontFamily:"QuickSand",zIndex:100}}>
            <Container className='rb text-dark'>
            <Navbar.Brand href='/' className='text-white mt-2'>
                <video src={require('../Assets/teamflow.mp4')} className="logo" autoPlay loop muted style={{mixBlendMode:"multiply"}}></video>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle> 
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <Nav.Item style={{cursor:"pointer",fontWeight:500}} className={`text-white  m-2`}>Sign Up</Nav.Item>
                    <Nav.Item style={{cursor:"pointer",fontWeight:500}} className={`text-white  m-2`}>Login</Nav.Item>
                    <Nav.Item style={{cursor:"pointer",fontWeight:500}} className={`text-white  m-2`}>About Us</Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
    </>
  )
}

export default NavbarComp


