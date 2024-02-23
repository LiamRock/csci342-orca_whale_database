import React, { useState } from 'react';
//import {Link} from 'react-router-dom';
import './Form.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        setEmail("");
        setPassword("");
    }
    return (
        <>
            {/* Nav Goes here */}
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <h2 className='title'>PNW TRACKER</h2>
                    <p className="or"><span></span></p>
                    <div >
                        <h2 className='title'>Welcome Back!</h2>
                    </div>
                    <div className="email-login">
                        <input type="text" placeholder="Email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <input type="password" placeholder="Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <button className="cta-btn">Sign in</button>
                    <p>Dont have an account? <a>Sign up</a></p>
                </form>
            </div>
        </>
    )
}
export default Login