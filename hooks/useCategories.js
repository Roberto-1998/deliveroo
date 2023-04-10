import { useEffect, useState } from 'react';
import sanityClient from '../sanity';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=='category']
    `
      )
      .then((data) => setCategories(data));
  }, []);

  return {
    categories,
  };
};
