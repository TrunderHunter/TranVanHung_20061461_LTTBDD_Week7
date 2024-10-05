import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TaskList from "./src/screens/TaskList";
import AddJobScreen from "./src/screens/AddJobScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            background: "white",
            primary: "",
            card: "",
            text: "",
            border: "",
            notification: "",
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TaskList" component={TaskList} />
          <Stack.Screen name="AddJob" component={AddJobScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
