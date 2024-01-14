import { createStackNavigator } from "@react-navigation/stack";
import ProjectDisplay from "./ProjectDisplay";
import ProjectDetails from "./ProjectDetails";

const Stack = createStackNavigator();

const ProjectStack = () => (
  <Stack.Navigator initialRouteName="ChatList">
    <Stack.Screen name="Projects" component={ProjectDisplay} />
    <Stack.Screen name="ProjectDetails" component={ProjectDetails} />
  </Stack.Navigator>
);

export default ProjectStack;