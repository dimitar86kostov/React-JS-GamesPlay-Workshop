import Catalog from "./components/catalog/Catalog"
import CreateGame from "./components/createGame/CreateGame"
import Details from "./components/details/Details"
import EditGame from "./components/editGame/EditGame"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/edit" element={<EditGame />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </main>
    </div>
  )
}

export default App
