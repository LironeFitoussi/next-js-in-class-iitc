import Link from "next/link";

async function getPokemonList() {
    // await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate network delay
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  if (!res.ok) throw new Error('Failed to fetch Pokémon');
  return res.json();
}

interface Pokemon {
  name: string;
    url: string; 
}

interface PokemonListResponse {
    counbt: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

export default async function PokemonPage() {
  const data = await getPokemonList();
    console.log(data);
    
  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {data.results.map((pokemon: Pokemon, index: number) => (
          <li key={index}>
            <Link href={`/pokemon/${pokemon.name}`}>
                {index + 1}. {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
