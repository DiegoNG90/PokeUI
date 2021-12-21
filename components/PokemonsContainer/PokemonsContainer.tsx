import { IPokemon, IPokemonIDandURL } from '../../types/ipokemon';
import { useFetch } from '../../hooks/useFetch';
import { nanoid } from 'nanoid';
import { extractIDfromUrl } from '../../utils';

import Pokemon from '../Pokemon';

interface PokemonsContainerProps {
  targetSearchedPokemon: string;
  results: Array<IPokemon> | any;
}

const PokemonsContainer: React.FC<PokemonsContainerProps> = ({
  targetSearchedPokemon,
  results,
}): JSX.Element => {
  const {
    data: searchedPokemon,
    loading,
    error,
  } = useFetch(`pokemon/${extractIDfromUrl(targetSearchedPokemon)}`);
  console.log(`searchedPokemon`, searchedPokemon);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="pokemons-container">
      {!searchedPokemon.count && (
        <Pokemon key={nanoid()} pokemon={searchedPokemon} type="full" />
      )}
      {results.length &&
        results?.map((pokemon: IPokemonIDandURL) => {
          return <Pokemon key={nanoid()} pokemon={pokemon} type="simple" />;
        })}
    </div>
  );
};

export default PokemonsContainer;
