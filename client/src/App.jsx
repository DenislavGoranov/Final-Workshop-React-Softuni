import { Route, Routes } from 'react-router-dom';

import CatalogPage from "./components/catalog-page/CatalogPage";
import CreatePage from "./components/create-page/CreatePage";
import DetailsPage from "./components/details-page/DetailsPage";
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";
import Login from './components/login/Login';
import Register from './components/register/Register';

import { useGetAllGames } from "./hooks/useGames";

export default function App() {
    const [games] = useGetAllGames();

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