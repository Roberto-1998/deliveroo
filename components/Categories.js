import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from '../sanity';
import { useState } from 'react';
import { useEffect } from 'react';

const Categories = () => {
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

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCard */}
      {categories.map((cat) => (
        <CategoryCard key={cat._id} imgUrl={urlFor(cat.image).url()} title={cat.name} />
      ))}
    </ScrollView>
  );
};

export default Categories;
