import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // User error and loading from the firebase-react-hook
    if (loading || sending) return <Loading></Loading>
    
    if (user)navigate(from, { replace: true });    

    if (error) errorElement = <p className='text-danger'>Error: {error?.message}</p>

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Please check your email, check spam folder also');
        }
        else{
            toast('Please enter Email address in the form to reset your password');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="info w-50 mx-auto d-block mb-2" type="submit">
                    Sign In
                </Button>
            </Form>
            {errorElement}
            <p className='App'><Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Sign Up for New User</Link> </p>
            <p className='App'><button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Forgot Password</button> </p>
            <SocialLogin from={from}></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;