import {Navbar, Container, Nav } from 'react-bootstrap'
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.scss';
import Portfolio from './Portfolio';
import Home from './Home'


function Navigation() {
  return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href='/home'>Connors Home Page</Navbar.Brand>
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
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
