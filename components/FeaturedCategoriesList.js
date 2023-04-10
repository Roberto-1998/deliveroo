import React from 'react';
import { useFeaturedCategories } from '../hooks/useFeaturedcCategories';
import FeaturedRow from './FeaturedRow';

const FeaturedCategoriesList = () => {
  const { featuredCategories } = useFeaturedCategories();

  return (
    <>
      {featuredCategories.map((cat) => (
        <FeaturedRow key={cat._id} id={cat._id} title={cat.name} description={cat.short_description} />
      ))}
    </>
  );
};

export default FeaturedCategoriesList;
