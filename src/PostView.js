import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../themecolor";
import Card from "./card/Card";
import { firstADP, works } from "./workexperience/WorkPostData";
import { shadowStyle } from "./Styles";

//Todo: do glassmorphism in css
const WorkExperienceView = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    // Function to handle pressing the left button
    const handleLeftPress = () => {
      setCurrentCardIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    };
  
    // Function to handle pressing the right button
    const handleRightPress = () => {
      setCurrentCardIndex(prevIndex => prevIndex < 2 ? prevIndex + 1 : prevIndex);
    };

  return (
    <View style={styles.container}>
      <Card post={works.at(currentCardIndex)} />
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity onPress={handleLeftPress} style={[styles.button, shadowStyle.shadow]}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRightPress} style={[styles.button, shadowStyle.shadow]}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between', 
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
    fontWeight: 'bold',
    color: colors.brown,
  },
});

export default WorkExperienceView;
