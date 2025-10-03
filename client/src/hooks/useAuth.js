import { useNavigate } from "react-router-dom";
import { login, register } from "../api/auth-api";

export const useLogin = () => {
    const navigate = useNavigate();
    const loginHandler = async (email, password) => {
        try {
            await login(email, password);
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