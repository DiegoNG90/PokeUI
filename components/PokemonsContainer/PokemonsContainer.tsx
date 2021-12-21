import { IPokemon, IPokemonIDandURL } from '../../types/ipokemon';
import { useFetch } from '../../hooks/useFetch';
import { nanoid } from 'nanoid';
import { extractIDfromUrl } from '../../utils';

import Pokemon from '../Pokemon';

interface PokemonsContainerProps {
  targetSearchedPokemon: string;
  results: Array<IPokemon> | any;
  noMatches: boolean;
}

const PokemonsContainer: React.FC<PokemonsContainerProps> = ({
  targetSearchedPokemon,
  results,
  noMatches,
}): JSX.Element => {
  const {
    data: searchedPokemon,
    loading,
    error,
  } = useFetch(`pokemon/${extractIDfromUrl(targetSearchedPokemon)}`);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="pokemons-container">
      {noMatches && (
        <h1 style={{ border: '2px solid green' }}>
          Sorry, there was no close match to searched Pokemon
        </h1>
      )}
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
