import { createSignal, Show, type Component } from "solid-js"
import type { FavoritePokemon } from "../../interfaces/Favorites-pokemons"

interface Props {
    pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {

    const [isVisible, setIsVisible] = createSignal(true);
    const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favorites = JSON.parse(
            localStorage.getItem('favorites') ?? '[]'
        ) as FavoritePokemon[]

        const newFavorites = favorites.filter(p => p.id !== pokemon.id);
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        setIsVisible(false);
    }
    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemons/${pokemon.name}`}>
                    <img
                        src={urlImg}
                        alt={pokemon.name}
                        width="96"
                        height="96"
                        style={`view-transition-name: ${pokemon.name}-image`}
                    />
                </a>


                <p class="capitalize">#{pokemon.id} {pokemon.name}</p>
                <button
                    class="text-blue-400"
                    onClick={deleteFavorite}
                >
                    Borrar
                </button>
            </div>
        </Show>
    );
}