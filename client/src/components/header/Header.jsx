import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
    const { isAuthenticated } = useAuthContext(); 
    
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
                        <Link to="/logout">Logout</Link >
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