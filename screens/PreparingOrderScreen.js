import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center '>
      {/*  */}
      {/* <Image source={require('../assets/delivery.gif')} className='w-full h-46' /> */}
      <Animatable.Image
        source={require('../assets/delivery.gif')}
        animation={'slideInUp'}
        iterationCount={1}
        className='w-full h-86'
      />

      <Animatable.Text
        animation={'slideInUp'}
        iterationCount={1}
        className='text-sm my-10 text-white font-bold text-center'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color={'white'} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
