import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <h3>What is the difference between authentication and authorization?</h3>
            <p>
                While authentication and authorization are often used interchangeably, they are separate processes used to protect an organization from cyber-attacks. 

                In a word, authentication is done first and then authorization comes. Authentication is mainly done by user while authorization is controlled by developers
                Authentication verifies who the user is.	Authorization determines what resources a user can access.

                Verifying email address to take money from digital payment is an example of authentication.
                Giving someone permission to download a particular file on a server or <strong>making someone admin in a particular facebook page</strong> are good examples of authorization.
            </p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>
                Actually authentication requires password security to make secure connection with users. If user's password can be known from a system, that might harm to users because of being able to do anything with that password. Google provides <strong>firebase</strong> system to help us protecting the user information. There are many systems where we can store our user information, not just google. Also we can use our own authentication system using <strong> cryptographic algorithms</strong>. For reliability, firebase is a good choice to put our trust
            </p>
            <h3>What other services do firebase provide?</h3>
            <p>
                There are many services of firebase other than just authentication. Some of these are listed as follows:
                <ul>
                    <li>Cloud Firestore </li>
                    <li>Remote Config</li>
                    <li>Firebase ML</li>
                    <li>Cloud Messaging</li>
                    <li>Hosting</li>
                </ul>
            </p>
        </div >
    );
};

export default Blogs;