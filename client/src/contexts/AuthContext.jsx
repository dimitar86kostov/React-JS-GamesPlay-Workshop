import { useContext } from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  userId: '',
  username: '',
  email: '',
  accessToken: '',
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
  logout: () => null,
});

export function AuthContextProvider(props) {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state)
  };

  const logout = () => {
    setAuthState(null);
  }

  const contextData = {
    userId: authState?._id,
    email: authState?.email,
    accessToken: authState?.accessToken,
    isAuthenticated: !!authState?.email,
    changeAuthState,
    logout
  }


  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {

  const authData = useContext(AuthContext);

  return authData;
}