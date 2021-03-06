import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../../styles/SearchBar.module.css';

interface SearchBarProps {
  findPokemon: (pokemon: string, results: Array<any>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ findPokemon }): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    findPokemon(search ? search.toLowerCase() : '', []);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3 d-flex justify-content-start"
        controlId="formBasicEmail"
      >
        <Form.Control
          className={styles.searchbar_input}
          type="text"
          placeholder="Ingrese el nombre a buscar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          className={styles.searchbar_button}
          variant="outline-dark"
          type="submit"
        >
          Buscar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
