import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../themecolor';
import Icon from 'react-native-vector-icons/FontAwesome'; // Choose an icon library
import WorkExperienceView from './PostView';
const Tab = createBottomTabNavigator();

function AppTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.brown}
      }}>
      <Tab.Screen name="Home" component={WorkExperienceView} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="fa-duotone fa-briefcase" size={24} color={focused ? colors.darkGrey : colors.grey}/>          
            ),
        }} 
      />
      <Tab.Screen name="SecondTab" component={WorkExperienceView} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={24} color={focused ? colors.darkGrey : colors.grey} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default AppTab;
