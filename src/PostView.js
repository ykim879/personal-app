import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import colors from '../themecolor';
const PostView = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Beauty</Text>
      </View>
      <View style={styles.card}>
        <Image source={{ uri: 'your-image-url' }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Focus On Learning and Creating Rather Than Entertainment and Distraction</Text>
          <Text style={styles.cardText}>
            They've distracted you. They've played with where you put your attention. 
            But you can take back control. You can focus on creating rather than consuming, and here's why...
          </Text>
        </View>
      </View>
      {/* Additional cards and content would go here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    // Add additional styling for your header
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    // Add additional styling for your header text
  },
  card: {
    margin: 15,
    borderRadius: 15,
    backgroundColor: colors.pink,
    overflow: 'hidden',
    // Add shadows and other styling to match the screenshot
  },
  cardImage: {
    width: '100%',
    height: 200,
    // Adjust as necessary to fit the card
  },
  cardContent: {
    padding: 15,
    // Add additional styling for your card content
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // Add additional styling for your card title
  },
  cardText: {
    fontSize: 14,
    color: colors.darkGrey,
    marginTop: 10,
    // Add additional styling for your card text
  },
});

export default PostView;