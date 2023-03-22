import React from "react";

import './Login.css'
import {Link} from "react-router-dom";

export const Login = () => {

    return (
        <div className={"login"}>
            <div className="card">
            <div className="left">
                <h1>Welcome on <strong>MyWall</strong></h1>
                <br/>

                <p>
                    Hello everyone! <br/><br/>
                    Welcome to my social media page.I am thrilled to have you all here with me.<br/>
                    This platform is a
                    place where we can connect, share ideas, and support each other.<br/>
                    Let's build a positive and engaging community together.<br/>
                </p>
                <span>Don't you have an account?</span>
                <Link to={'/register'}>
                <button>Register</button>
                </Link>
            </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type={"text"} placeholder={"Username"}/>
                        <input type={"password"} placeholder={"Password"}/>
                        <br/><br/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


