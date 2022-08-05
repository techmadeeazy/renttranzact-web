import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
import { NavLink } from "react-router-dom";

import './Signup.css';

const Signup = ( props ) => {
    const { setAuth } = useContext(AuthContext);
    const nameRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const addressRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmpwd, setCofirmpwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        nameRef.current.focus();
        emailRef.current.focus();
        contactRef.current.focus();
        addressRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [name, email, contact, address, pwd, confirmpwd])

    const signHandleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, contact, address, pwd, confirmpwd);
        axios.post('https://react-my-burger-19609-default-rtdb.firebaseio.com/signup.json', 
        {name: name, 
        email: email, 
        contact: contact, 
        address: address, 
        password: pwd, 
        confirmPassword: confirmpwd})
        .then( response => {
            setAuth({ name, email, contact, address, pwd, confirmpwd });
            setName('');
            setEmail('');
            setContact('');
            setAddress('');
            setPwd('');
            setCofirmpwd('');
            setSuccess(true);
            alert('Successfully sent the signup data to the backend')
            console.log(JSON.stringify(response));
        })
        .catch(error => {
        console.log(error)
        errRef.current.focus();
        })
    }

        return (
            <div>
                <section className="section-login">
                <div className="container">
                    <p ref={errRef} 
                    className={errMsg ? "errmsg": "offscreen"} 
                    aria-live="assertive">{errMsg}</p>
                    <div className="form-container">
                    <form className="form" onSubmit={signHandleSubmit}>
                        <div className="form-control">
                        <input type="text" 
                        className="input username"
                        ref={nameRef} 
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        value={name}
                        required/>
                        </div>

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
                        <input type="text" 
                        className="input username" 
                        ref={contactRef}
                        autoComplete="off"
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Your Contact"
                        value={contact}
                        required/>
                        </div>

                        <div className="form-control">
                        <input type="text" 
                        className="input username" 
                        ref={addressRef}
                        autoComplete="off"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        placeholder="Your Address"
                        required/>
                        </div>

                        <div className="form-control">
                        <input type="password" 
                        className="input password" 
                        placeholder="Minimum of 8 characters"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required/>
                        </div>

                        <div className="form-control">
                        <input type="password" 
                        className="input password" 
                        placeholder="********"
                        onChange={(e) => setCofirmpwd(e.target.value)}
                        value={confirmpwd}
                        required/>
                        </div>
                        <button className="btn btn-login">Sign Up</button>
                    </form>

                    <div className="sign-up">
                        <h2 className="text">Already have an Account?</h2>
                        <NavLink to="/"><button className="btn btn-sign-up">Sign In</button></NavLink>
                    </div>

                    </div>
                </div>
                </section>
            </div>
        )
    }

export default Signup;