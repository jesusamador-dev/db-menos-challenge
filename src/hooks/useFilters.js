

import { useState, useEffect } from 'react';
import FILTERS_ENDPOINT from '../utils/FiltersEndpoint';

const useFilters=(radio = "") => {
  const [filters, setFilters] = useState(false);

  const change = () => {
    switch (radio) {
      case 'films':
        setFilters(FILTERS_ENDPOINT.films);
        break;
      case 'people':
        setFilters(FILTERS_ENDPOINT.people);
        break;
      case 'locations':
        setFilters(FILTERS_ENDPOINT.locations);
        break;
      case 'species':
        setFilters(FILTERS_ENDPOINT.species);
        break;
      case 'vehicles':
        setFilters(FILTERS_ENDPOINT.vehicles);
        break;
      default:
        setFilters(false);
        break;
    }
  }
  useEffect(() => {
    change()
  }, [radio]);

  return filters;
};

export default useFilters;