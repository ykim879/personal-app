import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from "react-native";

// Dummy data for categories and projects
const categories = ["ALL", "WEBSITE", "MOBILE", "DESIGN"];
const projects = [
  { id: "1", icon: "🌂", category: "DESIGN" },
  { id: "2", icon: "🔑", category: "MOBILE" },
  // ...add all your projects here
];

const ProjectDisplay = ({ navigation }) => {
  const img = require("./../../assets/adp1.jpg");
  
  //Todo: include image
  const renderProjectItem = ({ item }) => (
    <TouchableOpacity
      style={styles.projectItem}
      onPress={() =>
        navigation.navigate("ProjectDetails", { projectId: item.id })
      }
    >
      <Text style={styles.projectIcon}>{item.icon}</Text>
    </TouchableOpacity>
  );
  const adp1 = require("./../../assets/adp1.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        initialNumToRender = {projects.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "white",
  },
  categoryItem: {
    // Style for category item
  },
  categoryText: {
    // Style for category text
  },
  projectItem: {
    flex: 1,
    margin: 10,
    maxHeight: 20,
    // Style for the project item like height, width, etc.
  },
  projectIcon: {
    // Style for the project icon
  },
});
export default ProjectDisplay;
