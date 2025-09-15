import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {

    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        "confirm-password": '',
    });

    const submitFormHandler = async (e) => {
        e.preventDefault();

        try {
            if (userData.password !== userData['confirm-password']) {
                throw new Error('Passwords doesn\'t match!');
            }
            const response = await fetch(`http://localhost:3030/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Register Failed');
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
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitFormHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com" autoComplete="email" onChange={onChange} value={userData.email} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" autoComplete="new-password" onChange={onChange} value={userData.password} />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" autoComplete="new-password" onChange={onChange} value={userData["confirm-password"]} />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}