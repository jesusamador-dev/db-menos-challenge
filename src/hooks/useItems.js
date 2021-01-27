import { useState, useEffect } from 'react';
import config from '../config/config';

const useItems=({ endpoint, filters, image }) => {
  const [items, setItems]=useState(false);
  const generateUrl = () => {
    if (!filters&&!endpoint) return false;
    let url;
    if (filters) {
      url = endpoint + "?fields=" + filters.join(',');
    } else {
      url = endpoint;
    }
    return url;
  }

  const getItems = async () => {
    const url=generateUrl();
    if (!url) {
      setItems([]);
      return false;
    }
    let res = await fetch(`${config.apiUrl}${url}`);
    let data=await res.json();
    data.endpoint = endpoint;
    data.isImage = image;
    setItems(data);
  }
  useEffect(() => {
    getItems()
  }, [endpoint, filters]);

  return items;
 };

export default useItems;