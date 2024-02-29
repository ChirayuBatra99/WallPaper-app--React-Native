import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './views/Screen1';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (

    <View style={styles.container}>
      <RecoilRoot >
        <Screen1 />
      </RecoilRoot>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 30,
  },

  screen1: {
    // backgroundColor: 'blue',
    // marginTop: 200,
  },

});
