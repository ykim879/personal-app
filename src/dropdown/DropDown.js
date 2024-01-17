import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const members = [
  { id: "1", name: "Robert Johnson", color: "pink" },
  { id: "2", name: "Emily Davis", color: "grey" },
  { id: "3", name: "Michael Thompson", color: "green" },
  { id: "4", name: "Olivia Martinez", color: "blue" },
  { id: "5", name: "William Brown", color: "yellow" },
];

const DropDown = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const toggleMember = (member) => {
    if (selectedMembers.includes(member.id)) {
      setSelectedMembers(selectedMembers.filter((id) => id !== member.id));
    } else {
      setSelectedMembers([...selectedMembers, member.id]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => toggleMember(item)}>
      <View style={[styles.colorIndicator, { backgroundColor: item.color }]} />
      <Text style={styles.name}>{item.name}</Text>
      {selectedMembers.includes(item.id) && (
        <Text style={styles.checkmark}>✓</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(!modalVisible)}
      >
        {modalVisible ? (
          <Text>Selected {selectedMembers.length} members </Text>
        ) : (
          <Text>Articles</Text>
        )}
      </TouchableOpacity>

      {modalVisible && (
        <FlatList
          data={members}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  dropdown: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
  },
  modalView: {
    // Style for the modal background
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  colorIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  name: {
    flex: 1,
    // Style for the member name
  },
  checkmark: {
    // Style for the checkmark
  },
});

export default DropDown;
