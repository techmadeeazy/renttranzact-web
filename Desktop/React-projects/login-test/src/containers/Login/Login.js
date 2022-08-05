import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";
import axios from "axios";

import './Login.css';

const Login = ( props ) => {
    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])


const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pwd);
    axios.post( 'https://react-my-burger-19609-default-rtdb.firebaseio.com/login.json',
     {email: email, password: pwd} )
    .then( response => {
        setAuth({ email, pwd});
        setEmail('');
        setPwd('');
        setSuccess(true);
        alert('Successfully sent the login data to the backend')
        console.log(JSON.stringify(response));
    })
    .catch( error => {
            console.log(error)
        errRef.current.focus();
    });

    // try {
    //     const res = await axios.post('https://react-my-burger-19609-default-rtdb.firebaseio.com/login.json',
    //      JSON.stringify({email: email, password: pwd}), 
    //      {
    //         headers: { 'Content-Type': 'application/json'},
    //         withCredentials: true
    //     });

    //     console.log(JSON.stringify(res));
    //     // const accessToken = res?.data?.accessToken;
    //     setAuth({ email, pwd});
    //     setEmail('');
    //     setPwd('');
    //     setSuccess(true);
    // } catch (err) {
    //    console.log(err)
    //     errRef.current.focus();
    // }
}

        return(
            <div>
                <section className="section-login">
                <div className="container">
                    <p ref={errRef} 
                    className={errMsg ? "errmsg": "offscreen"} 
                    aria-live="assertive">{errMsg}</p>
                    <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-control">
                        <input type="email" 
                        className="input username" 
                        ref={emailRef}
                        autoComplete="off"
                        placeholder="YourEmail@domain.app"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required/>
                        </div>

                        <div className="form-control">
                        <input type="password" 
                        className="input password" 
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required/>
                        </div>
                        <button className="btn btn-login">Log In</button>
                    </form>

                    <div className="sign-up">
                        <h2 className="text">Don't have an Account?</h2>
                        <NavLink to="/signup"><button className="btn btn-sign-up">Sign Up</button></NavLink>
                    </div>

                    </div>
                </div>
                </section>
            </div>
        )
    }

export default Login;