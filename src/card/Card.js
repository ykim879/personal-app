import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import colors from "../../themecolor";
import { shadowStyle } from "../Styles";

function header(post) {
    return (
      <View style={styles.header}>
        <Text style={styles.cardTitle}>{post.headline}</Text>
        <Text style={styles.date}>
          {post.effectiveFrom} - {post.effectiveTo}
        </Text>
      </View>
    );
  }

const Card = ({ post }) => {
    const fallback = require("./../../assets/adp1.jpg");
    
  return (
    <View style={[styles.card, shadowStyle.shadow]}>
      <Image source={post.img ? post.img : fallback} style={styles.cardImage} />
      <FlatList
        style={styles.cardContent}
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
  header: {
    padding: 8,
    backgroundColor: colors.grey,
  },
  card: {
    marginHorizontal : 15,
    marginTop: 15,
    marginBottom: 80,
    borderRadius: 15,
    backgroundColor: colors.white,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    // Add additional styling for your card title
  },
  cardText: {
    padding: 15,
    fontSize: 14,
    color: colors.darkGrey,
    marginTop: 10,
    // Add additional styling for your card text
  },
  date: {
    fontSize: 12,
    color: colors.darkGrey,
    // Add additional styling for your card author
  },
});

export default Card;
