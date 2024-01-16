import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import colors from "../../themecolor";
import { categories } from "../data/ProjectsData";

const CategoryTab = (props) => {
    console.log(props.category)
    return (
        <View style={styles.categoryContainer}>
        { Object.entries(categories).map(([k,v]) => (
          <TouchableOpacity key={v} style={styles.categoryItem} onPress = {() => props.setCategory(k)}>
            <Text style={k === props.category ? styles.currentCategory : styles.categories}>{k}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
} 

const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
      backgroundColor: "white",
    },
    categoryItem: {
      // Style for category item
    },
    categories: {
        color: colors.brown,
    },
    currentCategory: {
      color: colors.brown,
      fontWeight: "bold",
      textDecorationLine: "underline"
    },
})

export default CategoryTab;