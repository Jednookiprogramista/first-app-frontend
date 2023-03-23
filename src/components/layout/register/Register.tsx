import React, {useEffect} from "react";

import './Register.css'
import {Link} from "react-router-dom";

export const Register = () => {

    useEffect(() => {
        document.title = "Welcome on MyWall";
    }, []);

    return (
        <div className={"register"}>
            <div className="card2">
                <div className="left2">
                    <h2 className={'right-h2'}>Your place on the internet!</h2>
                    <br/>

                    <p className={"right-text"}>

                        Connect with us to stay up-to-date on our latest products, promotions, and events.<br/><br/>
                        Engage with our community by sharing your thoughts, ideas, and feedback with us.<br/><br/>

                    </p>
                    <span className={'right-span'}>Do you have an account?</span>
                    <Link to={'/login'}>
                    <button className={'right-button'}>Login</button>
                    </Link>
                </div>
                <div className="right2">
                    <h2>Register</h2>
                    <form className={'left-form'}>
                        <input type={"text"} placeholder={"Username"} className={'left-input'}/>
                        <input type={"email"} placeholder={"Email"} className={'left-input'}/>
                        <input type={"text"} placeholder={"Name"} className={'left-input'}/>
                        <input type={"password"} placeholder={"Password"} className={'left-input'}/>
                        <br/><br/>
                        <button className={'register-button'}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


