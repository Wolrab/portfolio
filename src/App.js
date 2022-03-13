import {Navbar, Container, Nav } from 'react-bootstrap'
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.scss';
import Portfolio from './Portfolio';

import Home from './Home'


function Navigation() {
  return (
  <Navbar bg="dark" variant="dark">
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

function App() {
  return (
  <Router>
    <Navigation/>
  <div className='background'>
    <Container className='content'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
      </Routes>
    </Container>
  </div>

  <footer className='bg-dark text-white'>
    <div>Background Image: svetlana57 <a href="https://www.istockphoto.com/portfolio/svetlana57?mediatype=photography">link</a></div>
  </footer>
  </Router>
  );
}

export default App;
