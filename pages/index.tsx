import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import PokemonsContainer from '../components/PokemonsContainer';

const Home: NextPage = () => {
  // const [endpoint, setEndpoint] = useState<string>('pokemon');
  const [targetSearchedPokemon, setTargetSearchedPokemon] = useState('');
  const { data, loading, error } = useFetch(`pokemon?limit=151` /*endpoint*/);
  const { results } = data || [];
  const [noMatches, setNoMatches] = useState<boolean>(false);

  useEffect(() => {
    results?.length &&
      window.localStorage.setItem('pokemons', JSON.stringify(results));
  }, []);

  function checkExistingPokemon(pokemon: string, listOfPokemons: Array<any>) {
    return listOfPokemons.some((p) => p.name === pokemon);
  }

  function getPokemonStorage(): any {
    return window.localStorage.getItem('pokemons');
  }

  const findPokemon = (pokemon: string, results: Array<any> = []): void => {
    setNoMatches(false);
    const listOfPokemons: Array<any> = JSON.parse(getPokemonStorage());
    if (checkExistingPokemon(pokemon, listOfPokemons)) {
      const [targetPokemon] = listOfPokemons.filter((p) => p.name === pokemon);
      const { url } = targetPokemon || {};
      setTargetSearchedPokemon(url ? url : '');
    } else if (pokemon === '') {
      setTargetSearchedPokemon('');
    } else if (
      pokemon.length > 1 &&
      !checkExistingPokemon(pokemon, listOfPokemons)
    ) {
      const closePokemon = listOfPokemons.find((p) => p.name.includes(pokemon));
      if (closePokemon) {
        setTargetSearchedPokemon(closePokemon.url ? closePokemon.url : '');
      } else {
        console.log('NO MATCHES!');
        setNoMatches(true);
      }
    }
  };

  if (loading) return <h1>Loading</h1>;
  if (error) return <h2>Error</h2>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon!</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pokemon finder</h1>

        <p className={styles.description}>
          El que quiere Pokemons, que los busque!
        </p>

        <SearchBar findPokemon={findPokemon} />

        <PokemonsContainer
          targetSearchedPokemon={targetSearchedPokemon}
          results={results}
          noMatches={noMatches}
        />
      </main>
    </div>
  );
};

export default Home;
