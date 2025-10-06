import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const navigate = useNavigate();

    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        try {
            const result = await login(email, password);

            changeAuthState(result);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }

    return loginHandler;
}

export const useRegister = () => {
    const navigate = useNavigate();
    const registerHandler = async (email, password) => {
        try {
            await register(email,password)
            navigate('/')
        } catch (err) {
            console.log(err.message);
        }
    }

    return registerHandler;
}