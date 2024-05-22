import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';
import { styles } from '@/constants/Styles';

export default function Root() {
  return <View style={{ ...styles.container, flex: 1, flexGrow: 1, justifyContent: 'flex-end' }}>
    <View style={{ paddingHorizontal: 20, gap: 12, paddingTop: 20 }}>
      <Text style={styles.extrabold}>Healthy Way</Text>
      <Link href="(home)/(explore)/list">
        <View style={styles.buttonnext}>
          <Text style={{ color: "white" }}>NEXT</Text>
        </View>
      </Link>
    </View>
    <Image style={styles.fruits} source={require('@/assets/images/fruits.png')} />
  </View>;
}
