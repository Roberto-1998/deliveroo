import React from 'react';
import { SafeAreaView } from 'react-native';
import { BodyContent, Search, Header } from '../components';

const HomeScreen = () => {
  return (
    <SafeAreaView className='mt-9 pt-5 pb-5 bg-white'>
      {/* Header */}
      <Header />

      {/* Search */}
      <Search />

      {/* Body */}
      <BodyContent />
    </SafeAreaView>
  );
};

export default HomeScreen;
