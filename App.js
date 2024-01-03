import { StyleSheet, Text, View, ScrollView } from 'react-native';
import WorkExperienceView from './src/PostView';
import colors from './themecolor';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Beauty</Text>
      </View>
    <WorkExperienceView />
    </ScrollView>
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
    // Add additional styling for your header text
  },
});
