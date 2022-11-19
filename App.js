import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

import Navigation from './src/navigation';

Amplify.configure(awsconfig)

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