import { View, Text, Image } from 'react-native';
import React from 'react';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View className='flex-row pb-3 mx-4 items-center gap-2 px-4'>
      <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />

      <View className='flex-1'>
        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
        <View className='flex-row items-center'>
          <Text className='font-bold text-xl flex-row items-center'>Current Location</Text>
          <ChevronDownIcon size={20} color={'#00CCBB'} />
        </View>
      </View>

      <UserIcon size={35} color={'#00CCBB'} />
    </View>
  );
};

export default Header;
