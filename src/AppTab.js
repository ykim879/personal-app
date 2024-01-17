import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../themecolor";
import Icon from "react-native-vector-icons/Feather"; // Choose an icon library
import PostView from "./PostView";
import { works } from "./data/WorkPostData";
import { universityLife } from "./data/CollegeLifeData";
import ProjectStack from "./project/ProjectStack";
import ArticleScreen from "./article/ArticleScreen";
const Tab = createBottomTabNavigator();

function AppTab() {
  const WorkScreen = () => <PostView posts = {works}/>
  const UniversityScreen = () => <PostView posts = {universityLife}/>
  return (
    <Tab.Navigator
      initialRouteName="Work"
      screenOptions={{
        headerShown: false,
        activeColor: colors.grey,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.brown },
        paddingVertical: 30, // Add vertical padding
      }}
    >
      <Tab.Screen
        name="Work"
        component={WorkScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="briefcase"
              size={35}
              color={focused ? colors.darkGrey : colors.grey}
            />
          ),
          backgroundColor: colors.background,
          background: colors.background,
          title: "Work Experience",
          headerStyle: {
            backgroundColor: colors.brown,
            height: 90,
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            padding: 15,
          },
        }}
      />
      <Tab.Screen
        name="University"
        component={UniversityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="edit-2"
              size={35}
              color={focused ? colors.darkGrey : colors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="paperclip"
              size={35}
              color={focused ? colors.darkGrey : colors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Articles"
        component={ArticleScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="file-text"
              size={35}
              color={focused ? colors.darkGrey : colors.grey}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTab;
