import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Navigation from './src/navigation';
import TabNavigator from './src/navigation/TabNavigator';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation>
      </Navigation>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC' // e5e5e5
  }
});

export default App; 