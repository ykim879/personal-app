import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from "react-native";

const Grid = (props) => {
    const {data, cols} = props;

    const renderItem = ({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate("ProjectDetails", { projectId: item.id })
          }
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <Image source= {item.image} style={styles.image}/>
        </TouchableOpacity>
      );
    return (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={cols}
      />
    )
}

const styles = StyleSheet.create({
    item: {
      flex: 1,
      margin: 10,
      width: 50,
      height: 50,
    },
    icon: {
      // Style for the project icon
    },
    row: {
      flex: 1,
      justifyContent: 'space-around',
      marginBottom: 10, // Adjust the space between rows
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });

  export default Grid;