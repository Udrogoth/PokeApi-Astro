import { For, createSignal } from "solid-js";
import type { FavoritePokemon } from "src/interfaces/Favorites-pokemons";
import { FavoritePokemonCard } from "./favoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    );
    return favoritePokemons;
};

export const FavoritePokemons = () => {
    const [pokemon, setPokemon] = createSignal(getLocalStoragePokemons())
    return (<div class="grid grid-cols-2 sm:grid-cols-4">
        <For each={pokemon()}>{(pokemon) => (
            <FavoritePokemonCard pokemon={pokemon} />
        )}</For>
    </div>)

}



