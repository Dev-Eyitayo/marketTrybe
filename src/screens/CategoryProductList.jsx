import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ListingCards from '../components/ListingCards';
import TestHeader from '../components/TestHeader';
import UserProfile from '../components/UserProfile';
import { categories, listings } from '../data/dummyData';

function CategoryProductList() {
  const route = useRoute();
  const categoryID = route.params?.categoryID;

  // Find category name from categories array catName= CategoryName
  const selectedCategory = categories.find((catName) => catName.id === categoryID)?.name;

  // Filter listings based on category name
  const filteredProducts = selectedCategory
    ? listings.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : [];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <TestHeader title={selectedCategory} extraComponent=<UserProfile /> />

      <View className="flex-1 px-4 py-3">
        {/* Checks if filteredProducts is empty and display appropriate UI */}
        {filteredProducts.length > 0 ? (
          <ListingCards key={categoryID} data={filteredProducts} />
        ) : (
          <Text className="mt-5 text-center text-lg">No products found in this category.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default CategoryProductList;
