import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainDraw from './Routes/MainDraw';
import OtherDraw from './Routes/OtherDraw';
import FirstStack from './Routes/FirstStack';
import MainPage from './Pages/MainPage';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <MainPage />
    // </View>
    <NavigationContainer>
      <FirstStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
