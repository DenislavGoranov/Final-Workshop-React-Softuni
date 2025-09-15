import { useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
export default function Login() {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const submitFormHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3030/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.status == 403) {
                throw new Error('Invalid User');
            }

            if (!response.ok) {
                throw new Error('Login Failed');
            }

            console.log('Logged in: ', userData)
            navigate(`/`);
        } catch (err) {
            console.log(err.message);
        }
    }

    const onChange = (e) => {
        setUserData((oldValues) => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitFormHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" autoComplete="email" onChange={onChange} value={userData.email} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" autoComplete="current-password" onChange={onChange} value={userData.password} />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to='/register'>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}