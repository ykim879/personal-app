import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WorkExperienceView from './src/PostView';
import colors from './themecolor';
import AppTab from './src/AppTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Work Experience</Text>
      </View>
    <WorkExperienceView />
    <AppTab/>
    </ScrollView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 25,
    alignItems: "center",
    backgroundColor: colors.brown,
    marginBottom: 15,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15
    // Add additional styling for your header text
  },
});
