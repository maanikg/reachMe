import MainMapScreen from "./MainMap.js";//3
import LoginScreen from "./Login.js";//1
import StartScreen from "./Start.js";//1
import GroupScreen from "./Groups.js";//4
import FriendScreen from "./Friends.js";//4

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
// import { getHeaderTitle } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

export default function TabBar() {
    // header: ({ navigation, route, options, back }) => {
    //     const title = getHeaderTitle(options, "Logout"); return (
    //         <MyHeader
    //             title={title}
    //             leftButton={
    //                 back ? <MyBackButton onPress={navigation.goBack} /> : undefined
    //             }
    //             style={options.headerStyle}
    //         />
    //     );
    // };
    return (
        // <NavigationContainer /*independent={true}*/>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Map') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Groups') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    } else if (route.name === "Friends") {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                // screenOptions={{ headerShown: false }},
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            {/* independent = {true} */}
            <Tab.Screen name="Map" component={MainMapScreen} />
            <Tab.Screen name="Friends" component={FriendScreen} />
            <Tab.Screen name="Groups" component={GroupScreen} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}