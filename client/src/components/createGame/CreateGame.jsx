import { useState } from "react";
import gamesAPI from "../../api/games-api";
import { useNavigate } from "react-router-dom";

export default function CreateGame() {
    const [formValues, setFormValues] = useState({
        "title": '',
        "category": '',
        "maxLevel": '',
        "imageUrl": '',
        "summary": '',
    });

    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();

        await gamesAPI.createGame(formValues);

        navigate('/');
    }

    const changeHandler = (e) => {

        setFormValues((oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        })))
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        onChange={changeHandler}
                        value={formValues.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={changeHandler}
                        value={formValues.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        onChange={changeHandler}
                        value={formValues.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={changeHandler}
                        value={formValues.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={changeHandler}
                        value={formValues.summary}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    );
}