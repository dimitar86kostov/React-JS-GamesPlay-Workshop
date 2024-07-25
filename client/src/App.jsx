import { useState } from "react";

import Catalog from "./components/catalog/Catalog"
import CreateGame from "./components/createGame/CreateGame"
// import DeleteGame from "./components/details/delete/DeleteGame"
import Details from "./components/details/Details"
import EditGame from "./components/editGame/EditGame"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Route, Routes } from 'react-router-dom'
import AuthContext from "./contexts/AuthContext"

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state)
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  }

  return (
    <AuthContext.Provider value={contextData}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/create" element={<CreateGame />} />
            <Route path="/edit" element={<EditGame />} />
            <Route path="/catalog/:gameId/details" element={<Details />} />
            {/* <Route path="/:gameId/delete" element={<DeleteGame />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  )
}

export default App
