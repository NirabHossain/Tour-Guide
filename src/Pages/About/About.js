import React from 'react';
import './About.css';
import nirab from './../../images/nirab.png';

const About = () => {
    return (
        <div className='App'>
            <h2>Md. Nirab Hossain</h2>
            <img id='nirab' height={300} src={nirab} alt="" /><br />


            <p className='bg-info w-50 mx-auto p-5'>

                I am currently finishing my Master's degree and most probably try to go abroad to take a PHD degree from an university. Beside pursuing the degree I want myself to be a web developer so that I can earn remotely. And my future goal is to make a company to make some job sector for the juveniles of our country as much as I can. For this reason I am working hard. I am quite good in mathematics which helps me to program finely. That ignites me to do even more. By this year, I want to see myself as a full-stack developer. And by 5 years I want to level up as a owner. 

                I am a frontend web developer. I use <strong>reactJS</strong> to develop a website. If you want to hire me, please check my profile through the following links:<br /><br />

                <a target="blank" href="https://github.com/NirabHossain" className='text-decoration-none text-dark'>Github: <code>github.com/NirabHossain</code></a><br />
                <a target="blank" href="https://linkedin.com/in/md-nirab-hossain-2382a6210" className='text-decoration-none text-dark'>Linked In: <code>linkedin.com/in/md-nirab-hossain-2382a6210</code></a>
            </p>





            <a style={{ textDecoration: 'none', background: 'blue', color: 'white', margin: '5px', padding: '10px 30px', borderRadius: '50px' }} target="blank" href="https://pdfhost.io/v/cwyY7CCfY_cv"> Download CV</a>
        </div>
    );
};

export default About;