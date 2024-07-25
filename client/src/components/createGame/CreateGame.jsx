import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import gamesAPI from "../../api/games-api";

export default function CreateGame() {
    const initValues = {
        "title": '',
        "category": '',
        "maxLevel": '',
        "imageUrl": '',
        "summary": '',
    };
    const navigate = useNavigate();

    const submitFormHandler = async (values) => {
        const result = await gamesAPI.createGame(values)
        navigate(`/catalog/${result._id}/details`)
    };

    const { values, changeHandler, submitHandler } = useForm(initValues, submitFormHandler)


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