import CatalogPage from "./components/catalog-page/CatalogPage";
import CreatePage from "./components/create-page/CreatePage";
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";
import Login from './components/login/Login';
import Register from './components/register/Register';

import { Route, Routes } from 'react-router-dom';

export default function App() {

    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='games' element={<CatalogPage />} />
                <Route path='create' element={<CreatePage />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Routes>

            <main id="main-content">
            </main>
        </div>
    )
}