import StartScreen from "./Screens/Start.js";//0
import LoginScreen from "./Screens/Login.js";//1
import CreateScreen from "./Screens/Create.js";//2
import MainMapScreen from "./Screens/MainMap.js";//3
import GroupsScreen from "./Screens/Groups.js";//4
import FriendsScreen from "./Screens/Friends.js";//4
import ProfileScreen from "./Screens/Profile.js";//5
import StudyGroupScreen from "./Screens/StudyGroup.js";//4
import ChatScreen from "./Screens/Chat.js";//4
import TabBar from "./Screens/TabBar.js";//4


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { getHeaderTitle } from '@react-navigation/elements';

// ..



const mainStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <mainStack.Navigator>
        <mainStack.Screen
          name="Start"
          component={StartScreen}
        // options={{ title: "MAIN PAGE" }}//CHANGE
        />
        <mainStack.Screen
          name="MainMap"
          component={MainMapScreen}
          options={{ headerShown: false }}//footer?
        />
        <mainStack.Screen
          name="Login"
          component={LoginScreen}//SHOULD BE LOGIN
        />
        <mainStack.Screen
          name="Create"
          component={CreateScreen}//SHOULD BE CREATE
        />
        <mainStack.Screen
          name="Groups"
          component={GroupsScreen}//SHOULD BE CREATE
        />
        <mainStack.Screen
          name="StudyGroup"
          component={StudyGroupScreen}//SHOULD BE CREATE
          options = {{title: "Study Group"}}
        />
        <mainStack.Screen
          name="TabBar"
          component={TabBar}
          options={{ headerTitle: "reachMe" }}
        // options={{ headerShown: false }}
        />
        <mainStack.Screen
          name="Friends"
          component={FriendsScreen}
        />
        {/* <mainStack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ headerShown: false }}
        /> */}
      </mainStack.Navigator>


    </NavigationContainer>
  )
}