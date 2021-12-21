import { useReducer, useEffect, useCallback } from 'react';
import { axiosReducer, initialState } from '../reducers/axiosReducer';

import { pokeApi } from '../pokeapi';

export const useFetch = (url: string) => {
  const [state, dispatch] = useReducer(axiosReducer, initialState);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await pokeApi.get(`/${url}`);
      dispatch({ type: 'SET_DATA', payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'SET_ERROR' });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return state;
};
