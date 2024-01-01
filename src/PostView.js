import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import colors from "../themecolor";
import { LinearGradient } from 'expo-linear-gradient';
//Todo: do glassmorphism in css
const PostView = ({post}) => {

  return (
    <ScrollView style={styles.container}>
        <LinearGradient
        colors={[colors.darkPink, colors.white]} // Replace with the exact color codes you want
        style={styles.gradientBackground}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Beauty</Text>
      </View>
      <View style={styles.card}>
        <Image source={post.img} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{post.headline}</Text>
          <Text style={styles.date}>
            {post.effectiveFrom} - {post.effectiveTo}
          </Text>
          <FlatList
            data={post.body}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.cardText}>{`\u2022 ${item}`}</Text>
              </View>
            )}
          />
        </View>
      </View>
      {/* Additional cards and content would go here */}
      </LinearGradient>
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
    alignItems: "center",
    // Add additional styling for your header
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    // Add additional styling for your header text
  },
  card: {
    margin: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Reduced transparency
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255)',
    // React Native does not support boxShadow in the same way as CSS.
    // You can approximate it using elevation for Android, and shadow properties for iOS.
    elevation: 20, // Increased elevation for a more pronounced shadow on Android
    shadowColor: 'rgba(31, 38, 135, 0.5)', // Darker shadow color for iOS
    shadowOffset: { width: 0, height: 8 }, // Shadow offset for iOS
    shadowOpacity: 0.5, // Increased shadow opacity for iOS
    shadowRadius: 32, // Shadow radius for iOS
    overflow: "hidden",
    // Add shadows and other styling to match the screenshot
  },
  cardImage: {
    width: "100%",
    height: 200,
    // Adjust as necessary to fit the card
  },
  cardContent: {
    padding: 15,
    // Add additional styling for your card content
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    // Add additional styling for your card title
  },
  cardText: {
    fontSize: 14,
    color: colors.darkGrey,
    marginTop: 10,
    // Add additional styling for your card text
  },
  date: {
    fontSize: 12,
    color: "#6D6D6D",
    // Add additional styling for your card author
  },
  gradientBackground: {
    flexGrow: 1,
  }
});

export default PostView;
