import { useContext } from "react";
import { login, register } from "../api/auth-api";
import AuthContext from "../contexts/AuthContext";

export function useLogin() {
    const { changeAuthState } = useContext(AuthContext)

    const loginHandler = async (email, password) => {

        const { password: _, ...authData  } = await login(email, password);

        changeAuthState(authData);

        return authData;
    }

    return loginHandler
}

export function useRegister() {
    const { changeAuthState } = useContext(AuthContext)

    const registerHandler = async (email, password) => {

        const { password: _, ...authData  } = await register(email, password);

        changeAuthState(authData);

        return authData;
    }

    return registerHandler
}