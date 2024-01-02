import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import colors from "../themecolor";

function header(post) {
    return (
        <View>
            <Text style={styles.cardTitle}>{post.headline}</Text>
        <Text style={styles.date}>
          {post.effectiveFrom} - {post.effectiveTo}
        </Text>
        </View>
    );
} 
//Todo: do glassmorphism in css
const PostView = ({ post }) => {
  //Todo make it only do once
  const fallback = require("./../assets/adp1.jpg");

  return (
    <View style={styles.card}>
      <Image source={post.img ? post.img : fallback} style={styles.cardImage} />        
        <FlatList style={styles.cardContent}
          data={post.body}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.cardText}>{`\u2022 ${item}`}</Text>
            </View>
          )}
          ListHeaderComponent={header(post)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 15,
    borderRadius: 15,
    backgroundColor: colors.white, 
    // React Native does not support boxShadow in the same way as CSS.
    // You can approximate it using elevation for Android, and shadow properties for iOS.
    // elevation: 20,  Increased elevation for a more pronounced shadow on Android
    shadowColor: 'black', // Darker shadow color for iOS
    shadowOffset: { width: 10, height: 10 }, // Shadow offset for iOS
    shadowOpacity: 0.56, // Increased shadow opacity for iOS
    shadowRadius: 15, // Shadow radius for iOS
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
});

export default PostView;
