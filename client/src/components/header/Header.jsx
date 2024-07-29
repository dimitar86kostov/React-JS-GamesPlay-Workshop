import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link to="/" className="home">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/catalog">All games</Link>
                {isAuthenticated
                    ? <div id="user">
                        <Link to="/create">Create Game</Link >
                        <Link to="#">Logout</Link >
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link >
                        <Link to="/register">Register</Link >
                    </div>

                }


            </nav>
        </header>
    );
}