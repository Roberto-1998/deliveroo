import React from 'react';
import { ScrollView } from 'react-native';
import Categories from './Categories';
import FeaturedCategoriesList from './FeaturedCategoriesList';

const BodyContent = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      {/* Categories */}
      <Categories />

      {/* Featured Rows */}
      <FeaturedCategoriesList />
    </ScrollView>
  );
};

export default BodyContent;
