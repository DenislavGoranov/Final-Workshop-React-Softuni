// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../api/games-api";
import useForm from "../../hooks/useForm";

const initialValues = {
    title: '',
    category: '',
    maxLevel: '',
    imageUrl: '',
}

export default function CreatePage() {
    const navigate = useNavigate();

    const { values, onChange, submitHandler } = useForm(
        initialValues,
        async () => {
            try {
                const { _id: gameId } = await create(values);
                navigate(`/games/${gameId}/details`);
            } catch (err) {
                console.log(err.message);
            }
        });

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." onChange={onChange} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." onChange={onChange} />

                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" onChange={onChange} />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." onChange={onChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" onChange={onChange}></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}