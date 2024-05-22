import { View, Text, Image } from 'react-native';
import { styles } from '@/constants/Styles';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useLocalSearchParams } from 'expo-router'

export default function Smoothie() {
  const { id } = useLocalSearchParams()
  const [data, setData] = useState({})
  const fetchData = async () => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://eu-central-1.data.tidbcloud.com/api/v1beta/app/dataapp-EHHkQDsw/endpoint/smoothies/id',
        headers: {
          'Authorization': `Basic ${process.env.EXPO_PUBLIC_API_KEY}`
        },
        data: { id }
      }
      let response = await axios.request(config)
      return response.data.data.rows[0]
    } catch (err) {
      return err
    }
  }
  useEffect(() => {
    fetchData()
      .then(result => setData(result))
  }, [setData])

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.imageurl }} style={{ width: '100%', height: 200, objectFit: "cover" }} />
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
