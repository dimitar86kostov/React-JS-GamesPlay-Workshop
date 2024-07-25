import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useCreateGame } from "../../hooks/useGames";
import { useState } from "react";

const initValues = {
    "title": '',
    "category": '',
    "maxLevel": '',
    "imageUrl": '',
    "summary": '',
};

export default function CreateGame() {
    const [error, setError] = useState('');
    const create = useCreateGame();
    const navigate = useNavigate();

    const createHandler = async (values) => {
        try {
            const result = await create(values);
            navigate(`/catalog/${result._id}/details`)

        } catch (err) {
            setError(err.message)
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initValues, createHandler)


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
                        value={values.title}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        onChange={changeHandler}
                        value={values.category}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        onChange={changeHandler}
                        value={values.maxLevel}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        onChange={changeHandler}
                        value={values.imageUrl}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={changeHandler}
                        value={values.summary}
                    />
                    {error && (
                        <h1 >
                            <span style={{ color: 'red' }}>{error}</span>
                        </h1>
                    )}
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