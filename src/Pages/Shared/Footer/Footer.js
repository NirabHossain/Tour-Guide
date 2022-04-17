import React from 'react';
import facebook from './../../../images/social/facebook.png'
import google from './../../../images/social/google.png'
import insta from './../../../images/social/insta.png'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='text-center mt-5 bg-dark text-light  footer'>
            Contact me: +880-152-203-30XX
            <p className=' pt-1 w-20 d-flex justify-content-center'>
                <img className='mx-1' width={20} src={google} alt="" />
                <img className='mx-1' width={20} src={insta} alt="" />
                <img className='mx-1' width={20} src={facebook} alt="" />
            </p>
        </footer>
    );
};

export default Footer;