import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import './searchbar.scss';
import {Link} from 'react-router-dom';
import 'animate.css';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const logoutRef = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if(logoutRef.current.contains(e.target)) {
                return;
            }
            setShowLogout(false)
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }

    }, [showLogout])

    const onSubmit = (e) => {
        e.preventDefault()

        onFormSubmit(term)
    }

    const logMeOut =() => {
        localStorage.removeItem('trueUID')
        localStorage.removeItem('username')
        setShowModal(!showModal)
        window.location = "/"
    }

    const renderUser = () => {
        if(localStorage.getItem('username') !== null && localStorage.getItem('username') !== "") {
        return (
            <span onClick={() => {if(localStorage.getItem('username') !== null && localStorage.getItem('username') !== "") setShowLogout(!showLogout)}} 
                  className="btn btn-light">
                  {localStorage.getItem('username').slice(0, 12) + '...'}
            </span>
            )
        } else {
            return <Link className="btn btn-light" to="/login">Login</Link>
        }
    }

    return (

        <div className="head">
            <div className="d-flex">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1>Video Player</h1>
                <div ref={logoutRef} className="user-auth">
                    {localStorage.getItem('username') ? false : <Link className="btn btn-account" to="/create">Create Account</Link>}
                    {renderUser()}
                    <div className={showLogout ? "dropdown-settings d-block" : "dropdown-settings"} aria-labelledby="dropdownMenuButton">
                        <button onClick={() => {setShowModal(!showModal)}} className="dropdown-item">Logout</button>
                    </div>
                </div>
                <div className={showModal ? "modal animate__animated animate__fadeIn show d-block" : "modal"} id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">Log Out?</h5>
                        <button onClick={() => {setShowModal(!showModal)}} className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                        <button onClick={() => {setShowModal(!showModal)}} className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <button onClick={() => {logMeOut()}} className="btn btn-primary">Logout</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className=""> 
                <div className="field">
                    <label className="font-weight-bold">Search Video</label>
                    <input 
                    autoFocus
                    className="form-control mr-sm-2"
                    type="text"
                    value={term}
                    onChange={(e) => {setTerm(e.target.value)}} 
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;