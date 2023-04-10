import { useState, useEffect } from 'react';
import sanityClient from '../sanity';

export const useFeaturedCategories = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'featured']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  return {
    featuredCategories,
  };
};
