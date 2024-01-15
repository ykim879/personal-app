import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import { mobileApp1 } from "../data/ProjectsData";

// Dummy data for categories and projects
const categories = ["ALL", "WEBSITE", "MOBILE", "DESIGN"];
const projects = [
  mobileApp1
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
      <Image source= {item.image} style={styles.image}/>
    </TouchableOpacity>
  );

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
        columnWrapperStyle={styles.row} 
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
    width: 50,
    height: 50,
  },
  projectIcon: {
    // Style for the project icon
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10, // Adjust the space between rows
  },
  itemContainer: {
    
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ProjectDisplay;
