import GameLayoutCatalog from "./game-layout-catalog/GameLayoutCatalog";

export default function CatalogPage({ games }) {
    return (
        <section id="catalog-page">

            <h1>All Games</h1>
            {games.map((game) => <GameLayoutCatalog key={game._id} game={game} />)}
            {games.length == 0 && <h3 className="no-articles">No articles yet</h3>}
        </section>
    );
}