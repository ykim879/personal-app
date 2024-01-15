import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import { mobileApp1, mobileProject } from "../data/ProjectsData";
import CategoryTab from "../categorytab/CategoryTab";


const ProjectDisplay = ({ navigation }) => {
  //Todo: passing state
  const [category, setCategory] = useState("ALL");
  //Todo: image as a square and resize
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
      <CategoryTab category= {category} setCategory= {setCategory}/>
      <FlatList
        data={mobileProject}
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
