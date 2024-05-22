import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  fruits: { height: '80%', width: '100%', objectFit: 'contain', paddingTop: 18 },
  extrabold: {
    fontSize: 36, color: "#4B4A4A", fontFamily: "Urbanist_800ExtraBold"
  },
  urbanist: {
    fontFamily: 'Urbanist_700Bold'
  },
  buttonnext: {
    fontFamily: 'Urbanist_700Bold',
    backgroundColor: "#A1BF34", width: 120, height: 36, borderRadius: 100, justifyContent: 'center', alignItems: 'center', fontSize: 16, color: "white"
  },
  input: {
    height: 38,
    width: '100%',
    maxWidth: 860,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
}); 