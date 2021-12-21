export const SET_DATA: string = 'SET_DATA';
export const SET_LOADING: string = 'SET_LOADING';
export const SET_ERROR: string = 'SET_ERROR';

export const initialState: any = {
  data: [],
  loading: true,
  error: false,
};

export const axiosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
