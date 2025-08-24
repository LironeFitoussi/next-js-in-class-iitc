import React from 'react';
import { notFound } from 'next/navigation';

interface PokemonPageProps {
    params: { name: string };
}

async function fetchPokemon(name: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) return null;
    return res.json();
}

export default async function PokemonPage({ params }: PokemonPageProps) {
    const { name } = await params;
    const pokemon = await fetchPokemon(name);

    if (!pokemon) {
        notFound();
    }

    return (
        <main>
            <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={200}
                height={200}
            />
            <ul>
                {pokemon.types.map((typeObj: any) => (
                    <li key={typeObj.type.name}>{typeObj.type.name}</li>
                ))}
            </ul>
        </main>
    );
}