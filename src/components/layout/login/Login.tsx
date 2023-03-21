import React from "react";

import './Login.css'

export const Login = () => {

    return (
        <div className={"login"}>
            <div className="card">
            <div className="left">
                <h1>Welcome on <strong>MyWall</strong></h1>

                <p>
                    Hello everyone! <br/><br/>
                    Welcome to my social media page. <br/>I am thrilled to have you all here with me.<br/>
                    This platform is a
                    place where we can connect, share ideas, and support each other. Let's build a positive and engaging community together. <br/>
                    Feel free to comment,
                    like and share your thoughts. I am excited to get to know each and every one of you.<br/><br/>
                    Thank you for being here, and let's have some fun!
                </p>
                <span>Don't you have an account?</span>
                <button>Register</button>
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