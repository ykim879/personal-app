import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PostView from './src/PostView';
import { firstADP, secondADP, internship } from './src/workexperience/WorkPostData';
import { LinearGradient } from 'expo-linear-gradient';
import colors from './themecolor';

export default function App() {
  return (
    <ScrollView style={styles.container}>
        <LinearGradient
        colors={[colors.darkPink, colors.white]} // Replace with the exact color codes you want
        style={styles.gradientBackground}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Beauty</Text>
      </View>
    <PostView post= {secondADP}/>
    <PostView post= {firstADP}/>
    <PostView post= {internship}/>
    </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gradientBackground: {
    flexGrow: 1,
  },
  header: {
    padding: 20,
    alignItems: "center",
    // Add additional styling for your header
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    // Add additional styling for your header text
  },
});
