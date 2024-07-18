import Catalog from "./components/catalog/Catalog"
import CreateGame from "./components/createGame/CreateGame"
import Details from "./components/details/Details"
import EditGame from "./components/editGame/EditGame"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

function App() {
  return (
    <>
      <Header />
      <main id="main-content">

        <Home />
        <Catalog />
        <CreateGame />
        <EditGame />
        <Details />
        <Login />
        <Register />
      </main>
    </>
  )
}

export default App
