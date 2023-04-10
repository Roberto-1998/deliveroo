import { ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';
import { urlFor } from '../sanity';
import { useCategories } from '../hooks/useCategories';

const Categories = () => {
  const { categories } = useCategories();

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
