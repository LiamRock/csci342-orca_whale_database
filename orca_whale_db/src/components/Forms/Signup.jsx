import React, { useState } from 'react';

import './Form.css'
import { Link } from 'react-router-dom';
function Signup() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        setEmail("");
        setPassword("");
    }
    return (
        <div className='text-black'>
            <br />
            <h2 className='text-7xl text-center pt-20'>PNW TRACKER</h2>
            <h2 className='text-5xl text-center py-10'>Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
                <div className="container flex flex-col items-center">
                    <input className='box-border rounded-lg pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5' type="text" placeholder="Username" name="userName" value={userName} onChange={(event) => setUserName(event.target.value)} />
                    <input className='box-border rounded-lg pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5' type="text" placeholder="Email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input className='box-border rounded-lg pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5' type="password" placeholder="Password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button className="text-white pt-2 pr-2 pl-2 pb-2 mt-0 mb-3.5">Register</button>
                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                </div>
                <br />
            </form>
        </div>
    )
}
export default Signup