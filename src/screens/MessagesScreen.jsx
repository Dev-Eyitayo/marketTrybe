import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { messages } from '../data/dummyData';
import CustomHeader from '../components/CustomHeader';
import UserProfile from '../components/UserProfile';
export default function MessagesScreen() {
  const [chats, setChats] = useState(messages);
  const navigation = useNavigation();
  // useEffect(() => {
  //   setChats(messages);
  // }, []);
  // console.log(chats);

  return (
    <SafeAreaView className="flex-1 bg-white p-2">
      <CustomHeader title="Messages" screenName="Messages" extraComponent={<UserProfile />} />
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        className="p-4"
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center border-b border-gray-200 py-5"
            onPress={() =>
              navigation.navigate('ChatScreen', { user: item.user, product: item.product })
            }>
            {/* Product Image */}
            <Image source={{ uri: item.product.image }} className="h-12 w-12 rounded-lg" />

            {/* Chat Details */}
            <View className="ml-4 flex-1">
              <Text className="text-md font-bold">{item.product.name}</Text>
              <Text className="text-gray-500">
                {item.user}: {item.lastMessage}
              </Text>
            </View>

            {/* Timestamp & Unread Indicator */}
            <View className="items-end">
              <Text className="text-gray-400">{item.timestamp}</Text>
              {item.unread && <View className="mt-1 h-3 w-3 rounded-full bg-blue-500" />}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
