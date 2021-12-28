import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const DataContext = createContext();
const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
  const { data, loading, error } = useFetch(`pokemon?limit=151`);

  return <Provider value={{ data, loading, error }}>{children}</Provider>;
};
