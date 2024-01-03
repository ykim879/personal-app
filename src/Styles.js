import { StyleSheet } from "react-native";

export const shadowStyle = StyleSheet.create({
    shadow: {
      shadowOpacity: 0.3, // for iOS
      shadowRadius: 5, // for iOS
      shadowColor: "#000", // for iOS
      shadowOffset: { height: 3, width: 0 }, // for iOS
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 6,
      shadowOpacity: 0.3,
      elevation: 8, // This adds a shadow on Android
    },
  });
  
