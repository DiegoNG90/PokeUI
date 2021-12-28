import { useContext } from 'react';
import { DataContext } from '../context/dataContext';

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be wrapped with SearchProvider');
  return context;
};
