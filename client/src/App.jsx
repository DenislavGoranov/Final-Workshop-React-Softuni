import CatalogPage from "./components/catalog-page/CatalogPage";
import DetailsPage from "./components/details-page/DetailsPage";
import Header from "./components/header/Header";
import HomePage from "./components/home-page/HomePage";

export default function App() {

    return (
        <div id="box">
            <Header />

            <main id="main-content">
            </main>

            <HomePage />

            <DetailsPage />

            <CatalogPage />
        </div>
    )
}