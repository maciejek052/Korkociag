import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import awsconfig from './src/aws-exports'
import Navigation from './src/navigation';
import { store } from './src/redux/store'

Amplify.configure(awsconfig)

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <Navigation>
        </Navigation>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC' // e5e5e5
  }
});

export default App; 