import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { PokedexBackgorund } from './components/PokedexBackgorund';

export interface Pokemon {
  type: any,
  bio?: string,
  id: number,
  image?: string
  stats: PokemonStats,
  name: string,
  prevPokemon?: any,
  nextPokemon?: any,
  searchPokemon?: any
};

export interface PokemonStats {
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number,

}

function App() {
  const [pokemonData, setPokemondata] = useState<Pokemon>();
  const [searchPokemonValue, setSearchPokemonValue] = useState<number | string>(1);
  const [pokemonDescription, setPokemonDescription] = useState<string>('');


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchPokemonValue}`)
      .then((result) => {
        setSearchPokemonValue(result.data.id);
        setPokemondata({
          name: result.data.name,
          image: result.data.sprites.other["official-artwork"].front_default,
          type: result.data.types,
          id: result.data.id,
          stats: {
            hp: result.data.stats[0].base_stat,
            attack: result.data.stats[1].base_stat,
            defense: result.data.stats[2].base_stat,
            specialAttack: result.data.stats[3].base_stat,
            specialDefense: result.data.stats[4].base_stat,
            speed: result.data.stats[5].base_stat,
          }
        })
        getDescription();
      });
  }, [searchPokemonValue]);

  async function getDescription()  {
    let description: string = '';
    let englishDescriptionObject;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${searchPokemonValue}`);

    englishDescriptionObject = response.data.flavor_text_entries.filter((item: any) => item.language.name == 'en');
    description = englishDescriptionObject[0].flavor_text
    setPokemonDescription(description);
  }

  function nextPokemon() {
    setSearchPokemonValue(Number(searchPokemonValue) + 1);

  }

  function prevPokemon() {

    if (searchPokemonValue > 1) {
      setSearchPokemonValue(Number(searchPokemonValue) - 1);
    }
  }

  function searchPokemon(event: HTMLInputElement) {
    if (event.value == '') {
      setSearchPokemonValue(1);
    } else {
      setSearchPokemonValue(event.value);
    }
  }

  if (!pokemonData) {
    return (<h1>Abelha</h1>)
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-[#6ab7f5]  to-[#fff]'>
      <PokedexBackgorund
        name={pokemonData.name}
        id={pokemonData.id}
        image={pokemonData.image}
        bio={pokemonDescription}
        stats={pokemonData.stats}
        type={pokemonData.type}
        prevPokemon={prevPokemon}
        nextPokemon={nextPokemon}
        searchPokemon={searchPokemon}
      />
    </div>
  );
}

export default App;
