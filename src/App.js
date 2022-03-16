import {Navbar, Container, Nav, Stack} from 'react-bootstrap'
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';

import Portfolio from './Portfolio';
import Home from './Home'

import './App.scss';

function Navigation() {
  return (
  <Navbar bg="dark" variant="dark" className='sticky-top'>
    <Container>
      <Navbar.Brand href='/home'>Connor's Home Page</Navbar.Brand>
      <Nav className="me-auto">
        <Link to='/home' className='nav-link'>Home</Link>
        <Link to='/portfolio' className='nav-link'>Porfolio</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

function Footer() {
  return (
  <footer className='bg-dark text-white' style={{padding: "1rem"}}>
  <div style={{display: 'flex'}}><div style={{margin: "auto"}}>
    <Stack direction='horizontal' gap={3}>
    <div>
    <div><i className='bi-house me-3'></i>16907 SE 256th Street</div>
    <div><i className='bi-envelope me-3'></i>conn.barlow.r@gmail.com</div>
    </div>
    <div>
    Image Source : svetlana57 (<a href="https://www.istockphoto.com/portfolio/svetlana57?mediatype=photography">link</a>)
    </div>
    </Stack>
    <div className='text-center mt-3'>Copyright Connor Barlow 2022</div>
  </div></div>
  </footer>
  )
}

function App() {
  return (
  <Router>
    <div className='page'>
      <Navigation/>
      <div className='background'>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/portfolio' element={<Portfolio/>}></Route>
          </Routes>
        </div>
        <div className='buffer'/>
      </div>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
