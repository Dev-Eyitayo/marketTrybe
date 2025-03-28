//user profile icon
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import React, { memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const CustomProfileOption = memo(({ title, onPress, iconName, iconType = 'MaterialIcons' }) => {
  // Function to select the correct icon component
  const renderIcon = () => {
    switch (iconType) {
      case 'FontAwesome':
        return <FontAwesome name={iconName} size={20} color="black" />;
      case 'Fontisto':
        return <Fontisto name={iconName} size={20} color="black" />;
      case 'MaterialIcons':
      default:
        return <MaterialIcons name={iconName} size={20} color="black" />;
    }
  };

  return (
    <View className="mb-2 mt-2 w-full">
      <TouchableOpacity onPress={onPress} className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          {renderIcon()}
          <Text className="text-base">{title}</Text>
        </View>
        <MaterialIcons name="chevron-right" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
});

export default CustomProfileOption;
