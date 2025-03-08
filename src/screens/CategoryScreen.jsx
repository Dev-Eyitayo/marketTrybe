import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';

import CategoriesListing from '../components/CategoriesListing';
import { categories } from '../data/dummyData';

export default function CategoryScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 p-6">
      <TouchableOpacity onPress={() => navigation.navigate('Market')} className="mb-4 font-bold">
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <View className="mb-5 items-center">
        <Text className="text-lg font-semibold">All Available Categories</Text>
      </View>
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 20 }}
        keyExtractor={(item) => item.id}
        className="mb-2 p-2"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Products', { category: item.name })}>
            <CategoriesListing {...item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
