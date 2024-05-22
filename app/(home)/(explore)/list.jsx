import { Link } from 'expo-router';
import { View, Text, Image, FlatList, Platform, ScrollView, TextInput } from 'react-native';
import { styles } from '@/constants/Styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card';

export default function List() {
  const [text, setText] = useState('')
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://eu-central-1.data.tidbcloud.com/api/v1beta/app/dataapp-EHHkQDsw/endpoint/smoothies',
        headers: {
          'Authorization': `Basic ${process.env.REACT_APP_API_KEY}`
        }
      };
      let response = await axios.request(config)
      return response.data.data.rows
    } catch (err) {
      console.log(err, "<<<<<");
      return err
    }
  }
  useEffect(() => {
    fetchData()
      .then(result => setData(result))
  }, [setData])

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <FlatList
          data={data}
          numColumns={Platform.OS != 'web' ? 2 : 5}
          contentContainerStyle={{ gap: 20 }}
          columnWrapperStyle={{ gap: 15 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, idx }) => {
            return <Card el={item} key={idx} />
          }}
        />
      </View>
    </ScrollView>
  );
}

