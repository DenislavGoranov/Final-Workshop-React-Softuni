import { getAll } from "./api/games-api";
import CatalogPage from "./components/catalog-page/CatalogPage";
import CreatePage from "./components/create-page/CreatePage";
import DetailsPage from "./components/details-page/DetailsPage";
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";
import Login from './components/login/Login';
import Register from './components/register/Register';

import { useEffect, useState } from "react";

import { Route, Routes } from 'react-router-dom';

export default function App() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const gamesData = await getAll();

                setGames(gamesData);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path='/' element={<HomePage games={games} />} />
                <Route path='games' element={<CatalogPage games={games} />} />
                <Route path='games/:gameId' element={<DetailsPage />} />
                <Route path='create' element={<CreatePage />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Routes>

            <main id="main-content">
            </main>
        </div>
    )
}