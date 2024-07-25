import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import { useState } from "react";

const initValues = {
    email: '',
    password: ''
};

export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();


    const submitLoginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate('/');

        } catch (err) {
            setError(err.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initValues, submitLoginHandler)

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Sokka@gmail.com"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    {error && (
                        <h1 >
                            <span style={{ color: 'red' }}>{error}</span>
                        </h1>
                    )}
                    <input
                        type="submit"
                        className="btn submit"
                        defaultValue="Login"
                    />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}