import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../themecolor";
import Icon from "react-native-vector-icons/Feather"; // Choose an icon library
import PostView from "./PostView";
import { works } from "./data/WorkPostData";

const Tab = createBottomTabNavigator();

function AppTab() {
  return (
    <Tab.Navigator
      initialRouteName="Work"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.brown },
        paddingVertical: 30, // Add vertical padding
      }}
    >
      <Tab.Screen
        name="Work"
        component={() => <PostView posts={works}/>}
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
        name="SecondTab"
        component={PostView}
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
    </Tab.Navigator>
  );
}

export default AppTab;
