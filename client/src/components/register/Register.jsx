import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import { useState } from "react";

const initValues = {
    email: '',
    password: '',
    rePass: '',
};

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();


    const registerHandler = async ({ email, password, rePass }) => {
        if (password !== rePass) {
            return setError('Password missmatch');
        }

        try {
            await register(email, password)
            navigate('/');

        } catch (err) {
            setError(err.message)
            console.error(err.message);
        }
    }
    
    const { values, changeHandler, submitHandler } = useForm(initValues, registerHandler)

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePass"
                        id="confirm-password"
                        value={values.rePass}
                        onChange={changeHandler}
                    />

                    {error &&
                        (<h1 >
                            <span style={{ color: 'red' }}>{error}</span>
                        </h1>
                        )}

                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <a href="/login">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}