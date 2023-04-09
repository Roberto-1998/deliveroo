import { View, SafeAreaView, Image, Text } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { useState } from 'react';
import sanityClient from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'featured']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className='mt-9 pt-5 pb-5 bg-white'>
      {/* Header */}
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

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row items-center space-x-2 flex-1  bg-gray-200 p-3'>
          <MagnifyingGlassIcon size={20} color={'gray'} />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color={'#00CCBB'} />
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories.map((cat) => (
          <FeaturedRow key={cat._id} id={cat._id} title={cat.name} description={cat.short_description} />
        ))}
        {/*   <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements from our partners'
          featuredCategory='featured'
        />
        <FeaturedRow
          id='1234'
          title='Tasty Discounts'
          description="Everyone's been enjoying these juicy discounts!"
          featuredCategory='discounts'
        />
        <FeaturedRow
          id='12345'
          title='Offers near you!'
          description='Why not support your local restaurants tonight!'
          featuredCategory='offers'
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
