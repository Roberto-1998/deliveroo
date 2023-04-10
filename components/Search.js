import { View, TextInput } from 'react-native';
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';

import React from 'react';

const Search = () => {
  return (
    <View className='flex-row items-center space-x-2 pb-2 mx-4'>
      <View className='flex-row items-center space-x-2 flex-1  bg-gray-200 p-3'>
        <MagnifyingGlassIcon size={20} color={'gray'} />
        <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
      </View>
      <AdjustmentsVerticalIcon color={'#00CCBB'} />
    </View>
  );
};

export default Search;
