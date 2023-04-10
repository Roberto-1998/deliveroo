import { useState, useEffect } from 'react';
import sanityClient from '../sanity';

export const useRestaurants = (id) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type =="featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  return {
    restaurants,
  };
};
