import { Card, Button } from 'react-bootstrap';
import { IPokemon, IPokemonIDandURL } from '../../types/ipokemon';
import { nanoid } from 'nanoid';
import Image from 'next/image';

interface PokemonProps {
  pokemon: any; // DUDA ACA -> Cómo resolver ésto? IPokemon | IPokemonIDandURL ?
  type: string;
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon, type }): any => {
  if (type === 'simple') {
    return (
      <Card key={nanoid()} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{pokemon?.name}</Card.Title>
          <Button variant="primary">Ver Pokemon</Button>
        </Card.Body>
      </Card>
    );
  }
  if (type === 'full') {
    return (
      <Card key={nanoid()} style={{ width: '18rem' }}>
        {' '}
        <img src={`${pokemon?.sprites?.front_shiny}`} alt={pokemon.name} />
        {/* <Image /> Not src not working :') */}
        <Card.Body>
          <Card.Title>
            <h2>{pokemon?.name?.toUpperCase()}</h2>
          </Card.Title>
          <Card.Text>{pokemon?.species?.name}</Card.Text>

          <div>
            <h6>Abilities</h6>
            <ul>
              {pokemon?.abilities?.map((ability: any) => {
                return (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                );
              })}
            </ul>
          </div>
          <Button variant="primary">Ver Pokemon</Button>
        </Card.Body>
      </Card>
    );
  }
};

export default Pokemon;
