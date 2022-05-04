import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.jpg'
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img width={140} height={35} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navs">
                            <Nav.Link href="home#places" className='text-white'>Tourist Spots</Nav.Link>
                            <Nav.Link href="home#vehicles" className='text-white'>Vehicles</Nav.Link>
                            {/* <Nav.Link as={Link} to="checkout" className='text-white'>Checkout</Nav.Link> */}
                            <Nav.Link as={Link} to="blogs" className='text-white'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about" className='text-white'>About</Nav.Link>
                            {
                                user ?
                                    <div className='d-flex align-items-baseline justify-content-center'>
                                        <Nav.Link as={Link} to="add" className='text-white'>Choose Places</Nav.Link>
                                        <Nav.Link as={Link} to="manage" className='text-white'>Manage Places</Nav.Link>
                                        <span className='rounded bg-light py-1 px-2'>{user?.displayName}</span>
                                        <button className='btn btn-link bg-white mx-2 text-decoration-none text-danger' onClick={handleSignOut}>sign out</button>

                                    </div>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;