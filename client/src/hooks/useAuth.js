import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        try {
            const {password: _, ...authData} = await login(email, password);

            changeAuthState(authData);

            return authData;
        } catch (err) {
            console.log(err.message);
        }
    }
    return loginHandler;
}

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        try {
            const {password: _, ...authData} = await register(email,password);

            changeAuthState(authData);

            return authData;
        } catch (err) {
            console.log(err.message);
        }
    }

    return registerHandler;
}