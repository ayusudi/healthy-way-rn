import { Link, router } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

export default function Card({ el }) {
  return (
    <Shadow distance={4}>
      <TouchableOpacity onPress={() => router.replace("(home)/(explore)/" + el.id)} style={{
        overflow: 'hidden',
        borderRadius: 10,
        width: 160, height: 150,
      }}>
        <Image source={{ uri: el.imageurl }} style={{ width: 160, height: 100, objectFit: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
        <View style={{ padding: 6 }}>
          <Text>{el.recipe}</Text>
        </View>
      </TouchableOpacity>
    </Shadow>
  )
}