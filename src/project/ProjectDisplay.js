import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { projectLayout } from "../data/ProjectsData";
import CategoryTab from "../categorytab/CategoryTab";
import Grid from "../grid/Grid";

const ProjectDisplay = ({ navigation }) => {
  //Todo: passing state
  const [category, setCategory] = useState("ALL");
  //Todo: image as a square and resize

  return (
    <View style={styles.container}>
      <CategoryTab category= {category} setCategory= {setCategory}/>
      <Grid
        data={projectLayout[category]}
        cols={2}
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
