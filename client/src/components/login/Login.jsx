export default function Login() {
    return (
        <section id="login-page" className="auth">
            <form id="login">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" autoComplete="email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" autoComplete="current-password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}