import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/screens/navigation';
import { Provider } from 'react-redux';
import { store } from './src/Store';

export default function App() {
  return (
    <Provider store={store}>
 <Navigation/>
 
    <StatusBar style="auto" />
      </Provider>
  );
}


