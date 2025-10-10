import { Link, useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

export default function Login() {
    const navigate = useNavigate();
    const loginHandler = useLogin();
    const { values, onChange, submitHandler } = useForm(
        { email: '', password: '' },
        async ({ email, password }) => {
            try {
                const result = await loginHandler(email, password);
                localStorage.setItem('accessToken', result.accessToken);
                localStorage.setItem('email', result.email)

                navigate('/');
            } catch (err) {
                console.log(err.message);
            }
        },
    );

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        autoComplete="email"
                        onChange={onChange}
                        value={values.email}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        onChange={onChange}
                        value={values.password}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to='/register'>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}