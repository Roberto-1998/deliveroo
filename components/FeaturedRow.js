import { View, Text } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { ScrollView } from 'react-native';

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text>{title}</Text>
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
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
