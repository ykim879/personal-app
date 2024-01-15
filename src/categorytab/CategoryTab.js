import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import colors from "../../themecolor";

const categories = ["ALL", "WEBSITE", "MOBILE", "DESIGN"];

const CategoryTab = (props) => {
    console.log(props.category)
    return (
        <View style={styles.categoryContainer}>
        {categories.map((c) => (
          <TouchableOpacity key={c} style={styles.categoryItem} onPress = {props.setCategory}>
            <Text style={c === props.category ? styles.currentCategory : styles.categories}>{c}</Text>
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