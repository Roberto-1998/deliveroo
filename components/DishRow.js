import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { Image } from 'react-native';
import { MinusCircleIcon } from 'react-native-heroicons/solid';
import { useState } from 'react';
import { PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRow = ({ id, description, price, image, name }) => {
  const [isPress, setIsPress] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPress(!isPress)}
        className={`bg-white border p-4 border-gray-200 ${isPress && 'border-b-0'}`}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>
              <Currency quantity={price} currency='EUR' />
            </Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
              source={{ uri: urlFor(image).url() }}
              className='h-20 w-20 bg-gray-300 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPress && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity>
              <MinusCircleIcon /* color={items.length > 0 ? '#00CCBB' : 'gray'} */ color={'#00CCBB'} size={40} />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon /* color={items.length > 0 ? '#00CCBB' : 'gray'} */ color={'#00CCBB'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
