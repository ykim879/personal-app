import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PostView from './src/PostView';
import secondADP from './src/workexperience/WorkPostData';
export default function App() {
  return (
    <PostView post= {secondADP}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
