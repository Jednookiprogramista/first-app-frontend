import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import './Register.css';
import { Link } from "react-router-dom";
import axios from "axios";

interface Inputs {
    username: string;
    email: string;
    name: string;
    password: string;
}

export const Register: React.FC = () => {
    useEffect(() => {
        document.title = "Welcome on MyWall";
    }, []);

    const [inputs, setInputs] = useState<Inputs>({
        username: "",
        email: "",
        name: "",
        password: "",
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await axios.post(" http://localhost:3001/api/authentication/registration", inputs);
        } catch (error : any) {
            if (error.response) {
                setError(error.response.data);
            } else {
                setError("An error has occurred ");
            }
        }
    };


    console.log(error);

    return (
        <div className={"register"}>
            <div className="card2">
                <div className="left2">
                    <h2 className={"right-h2"}>Your place on the internet!</h2>
                    <br />

                    <p className={"right-text"}>
                        Connect with us to stay up-to-date on our latest products, promotions, and events.
                        <br />
                        <br />
                        Engage with our community by sharing your thoughts, ideas, and feedback with us.
                        <br />
                        <br />
                    </p>
                    <span className={"right-span"}>Do you have an account?</span>
                    <Link to={"/login"}>
                        <button className={"right-button"}>Login</button>
                    </Link>
                </div>
                <div className="right2">
                    <h2>Register</h2>
                    <form className={"left-form"}>
                        <input type={"text"} placeholder={"Username"} className={"left-input"} name={"username"} onChange={handleChange} />
                        <input type={"email"} placeholder={"Email"} className={"left-input"} name={"email"} onChange={handleChange} />
                        <input type={"text"} placeholder={"Name"} className={"left-input"} name={"name"} onChange={handleChange} />
                        <input type={"password"} placeholder={"Password"} className={"left-input"} name={"password"} onChange={handleChange} />
                        <br />
                        <br />
                        {error && (error as string)}
                        <button className={"register-button"} onClick={handleClick}>
                            Register
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};
