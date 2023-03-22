import React from "react";

import './Register.css'

export const Register = () => {

    return (
        <div className={"register"}>
            <div className="card">
                <div className="left">
                    <h1>Your place on the internet!</h1>
                    <br/>

                    <p>

                        Connect with us to stay up-to-date on our latest products, promotions, and events.<br/><br/>
                        Engage with our community by sharing your thoughts, ideas, and feedback with us.<br/><br/>

                    </p>
                    <span>Do you have an account?</span>
                    <button>Login</button>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type={"text"} placeholder={"Username"}/>
                        <input type={"email"} placeholder={"Email"}/>
                        <input type={"text"} placeholder={"Name"}/>
                        <input type={"password"} placeholder={"Password"}/>
                        <br/><br/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


