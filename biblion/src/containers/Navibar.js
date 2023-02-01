import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Home from '../components/Home';
import BookList from '../components/BookList';
import ReviewForm from '../components/ReviewForm';
import Contact from '../components/Contact';

const Navibar = ({books}) => {
    return (
        <>
        <BrowserRouter>
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Biblion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        {/* <Nav.Link as={Link} to={"/home"} href="#home">Home</Nav.Link> */}
                        <Nav.Link as={Link} to={"/books"} href="#books">Books</Nav.Link>
                        <Nav.Link as={Link} to={"/add-review"} href="#add-review">Add Review</Nav.Link>
                        {/* <Nav.Link as={Link} to={"/login"} href="#login">Login</Nav.Link> */}
                        <Nav.Link as={Link} to={"/contact"} href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </div>
        <div>
            <Routes>
                {/* <Route path="/home" element={<Home/>} /> */}
                <Route path="/books" element={<BookList books={books}/>}/>
                <Route path="/add-review" element={<ReviewForm/>}/>
                {/* <Route path="/login"></Route> */}
                <Route path="/contact" element={<Contact/>}/>
            </Routes>    
            
        </div>
        </BrowserRouter>
        </>
        
     );
}
 
export default Navibar;