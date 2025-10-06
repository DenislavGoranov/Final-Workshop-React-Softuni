import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useGetAllGames } from "./hooks/useGames";
import { AuthContext } from './contexts/AuthContext';

import CatalogPage from "./components/catalog-page/CatalogPage";
import CreatePage from "./components/create-page/CreatePage";
import DetailsPage from "./components/details-page/DetailsPage";
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";
import Login from './components/login/Login';
import Register from './components/register/Register';


export default function App() {
    const [authState, setAuthState] = useState({});
    const [games] = useGetAllGames();



    const changeAuthState = (state) => {
        setAuthState(state);
    }

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    }

    return (
        <div id="box">
            <AuthContext.Provider value={contextData}>
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
            </AuthContext.Provider>
        </div>
    )
}