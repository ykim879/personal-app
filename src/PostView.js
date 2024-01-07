import React, { useState } from "react";
import { StyleSheet,ScrollView, View, Text, TouchableOpacity } from "react-native";
import colors from "../themecolor";
import Card from "./card/Card";
import { shadowStyle } from "./Styles";

//Todo: do glassmorphism in css
const PostView = (props) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const diplayPosts = props.posts;
  // Function to handle pressing the left button
  const handleLeftPress = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  // Function to handle pressing the right button
  const handleRightPress = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < 2 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Work Experience</Text>
      </View>
      <View style={styles.container}>
        <Card post={diplayPosts.at(currentCardIndex)} />
        <View style={[styles.buttonContainer]}>
          <TouchableOpacity
            onPress={handleLeftPress}
            style={[styles.button, shadowStyle.shadow]}
          >
            <Text style={styles.buttonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRightPress}
            style={[styles.button, shadowStyle.shadow]}
          >
            <Text style={styles.buttonText}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollcontainer: {
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
    padding: 15,
    // Add additional styling for your header text
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.brown,
  },
});

export default PostView;
