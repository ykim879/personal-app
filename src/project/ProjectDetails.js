import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Dummy data for a project detail
// You will need to replace this with your actual project data
const projectDetail = {
  title: "Mobile design clean",
  date: "Jul 29, 202X",
  description:
    "A ten-year collection of works, representing a lifetime of dedication to craftsmanship and design. Every stroke, every curve, every touch is a part of an individual's soul.",
  imageUrl: "path-to-your-image", // Replace with your image path or URL
};

const ProjectDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: projectDetail.imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{projectDetail.title}</Text>
        <Text style={styles.date}>{projectDetail.date}</Text>
        <Text style={styles.description}>{projectDetail.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>READ MORE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200, // Adjust the height according to your image aspect ratio
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: "grey",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000", // Use your app's theme color here
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ProjectDetails;
