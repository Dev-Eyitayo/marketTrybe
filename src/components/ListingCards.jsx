//rendered product listing item
import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import ListingCard from './ListingCard';

const ListingCards = memo(({ data, buttomPad = 100 }) => {
  const navigation = useNavigation();

  return (
    // Listings - 2 Columns
    <View style={{ flex: 1, paddingBottom: buttomPad, paddingHorizontal: '3px' }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2} // Ensure two columns
        columnWrapperStyle={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }} // Add spacing between items
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ListingDetails', { itemId: item.id })}
            className="mb-4 w-[48%]">
            <ListingCard {...item} btnName="view" />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

export default ListingCards;
