import { ScrollView, View, Text } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import { useRestaurants } from '../hooks/useRestaurants';

const FeaturedRow = ({ id, title, description }) => {
  const { restaurants } = useRestaurants(id);

  return (
    <View className='bg-gray-50'>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={20} color={'#00CCBB'} />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurant Cards */}
        {restaurants.map((rest) => (
          <RestaurantCard
            id={rest._id}
            key={rest._id}
            imgUrl={rest.image}
            title={rest.name}
            rating={rest.rating}
            genre={rest.type?.name}
            address={rest.address}
            short_description={rest.short_description}
            dishes={rest.dishes}
            long={rest.long}
            lat={rest.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
