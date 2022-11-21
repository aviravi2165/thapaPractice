import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { productReducer } from '../reducers/productReducer';

const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products';
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleProductLoading: false,
  isSingleProductError: false,
  singleProduct: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    productReducer,
    initialState
  );

  const getProducts = async (url) => {
    dispatch({ type: 'API_LOADING' });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: 'GET_PRODUCTS', payload: products });
    } catch (error) {
      dispatch({ type: 'API_ERROR' });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({
        type: 'SET_SINGLE_PRODUCT',
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: 'SET_SINGLE_ERROR' });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, getSingleProduct }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
