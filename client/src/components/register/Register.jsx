import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";

export default function Register() {
    const registerHandler = useRegister();
    const { values, onChange, submitHandler } = useForm(
        { email: '', password: '', "confirm-password": '' },
        async ({ email, password }) => {
            await registerHandler(email, password);
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('email', result.email)
        },
    );

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        autoComplete="email"
                        onChange={onChange}
                        value={values.email}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={onChange}
                        value={values.password}
                    />

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        autoComplete="new-password"
                        onChange={onChange}
                        value={values["confirm-password"]}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}