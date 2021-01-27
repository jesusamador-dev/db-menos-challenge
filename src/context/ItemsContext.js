  
import { createContext } from 'react';

const ItemsContext=createContext({
  items: {},
  setItems: () => { },
  isLoading: Boolean,
  setLoading: () => { }
});

export default ItemsContext;