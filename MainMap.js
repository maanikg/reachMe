import StartScreen from "./Start.js";//0
// import LoginScreen from "Login.js";//1
// import CreateScreen from "Create.js";//2
// // import MainMapScreen from "./Screens/MainMap.js";//3
// import GroupsScreen from "Groups.js";//4
// import ProfileScreen from "Profile.js";//5

import * as React from 'react';
// import MapView from 'react-native-maps';
// import 'react-native';
import { Image, StyleSheet, Text, View, Dimensions, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import MapView, { Callout, Circle, Marker } from "react-native-maps";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Ionicons from '@expo/vector-icons/Ionicons';
//import type { Region } from 'react-native-maps';


// const Tab = createMaterialBottomTabNavigator();


export default function MainMap({ navigation }) {



  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.65982018605648,
          longitude: -79.39706027726659,
          latitudeDelta: 0.035,
          longitudeDelta: 0.02
        }}
        position="relative"

        provider="google"
      // >
      >

        <Marker
          coordinate={{ latitude: 43.66003753671341, longitude: -79.39679205396095 }} //User
          pinColor="blue"
        >
          <Callout>
            <Text>You are here!</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{ latitude: 43.6602, longitude: -79.3949 }} //Amy
          //pinColor="green"
        >
          <Image source={require('./amy.png')} style={{height: 100, width:80}} />

          <Callout>
            <Text>Amy</Text>
          </Callout>

        </Marker>

        <Marker
          coordinate={{ latitude: 43.666566349948305, longitude: -79.39141474602694 }} //Alice
          
          //pinColor="red"
        >
          <Image source={require('./alice.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Alice</Text>
          </Callout>
        </Marker>


        <Marker
          coordinate={{ latitude: 43.66099137613968, longitude: -79.39368176627154 }} //Ben
          //pinColor="green"
        //image={require("Screens/personIcon.png")} //uses relative file path.
        >
          <Image source={require('./dywane.png')} style={{height: 100, width:80}} />

          <Callout>
            <Text>Ben</Text>
          </Callout>

        </Marker>



        <Marker
          coordinate={{ latitude: 43.66547743690504, longitude: -79.39875650591607 }} //Barb
          //pinColor="red"
          
        >
          <Image source={require('./barb.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Barb</Text>
          </Callout>
        </Marker>




        <Marker
          coordinate={{ latitude: 43.66302604153585, longitude: -79.39518102177587 }} //Charles
         // pinColor="red"
        >
          <Image source={require('./charles.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Charles</Text>
          </Callout>

        </Marker>

        <Marker
          coordinate={{ latitude: 43.6645, longitude: -79.3997 }} //Devin
          //pinColor="red"
        >
          <Image source={require('./devin.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Devin</Text>
          </Callout>

        </Marker>

        <Marker
          coordinate={{ latitude: 43.66090951652634, longitude: -79.39675167671382 }} //Dan
          //pinColor="red"
        >
          <Image source={require('./dan.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Dan</Text>
          </Callout>

        </Marker>

        <Marker
          coordinate={{ latitude: 43.66103018433007, longitude: -79.39875650597735 }} //Evan
          //pinColor="green"

        >
          <Image source={require('./evan.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Evan</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{ latitude: 43.66252931131791, longitude: -79.39393647673174 }} //Jackson
          //pinColor="red"

        >
          <Image source={require('./jackson.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Jackson</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{ latitude: 43.66720036763543, longitude: -79.39721155344749 }} //James
          //pinColor="green"
        >
          <Image source={require('./james.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>James</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{ latitude: 43.666020708689736, longitude: -79.39528036286175 }} //Maanik
          //pinColor="green"
        >
          <Image source={require('./maanik.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Maanik</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{ latitude: 43.66413087773943, longitude: -79.39897644692631 }} //Matt
         // pinColor="red"
        >
          <Image source={require('./matt.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Matt</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{ latitude: 43.65469259403811, longitude: -79.38072392756511 }} //Syna
          //pinColor="green"
        >
          <Image source={require('./syna.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Syna</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{ latitude: 43.65907045898956, longitude: -79.39720341967237 }} //Tyler
          //pinColor="green"
          
        >
          <Image source={require('./tyler.png')} style={{height: 100, width:80}} />
          <Callout>
            <Text>Tyler</Text>
          </Callout>

        </Marker>

      </MapView>
      <View
        style={{
          position: 'absolute',//use absolute position to show button on top of the map
          top: '90%', //for center align
          alignSelf: 'flex-end' //for align to right
        }}
      >
        {/* <TouchableOpacity style={styles.createBtn}>
          <Button
            title="Log off"
            onPress={() => navigation.navigate("Login")}
          />
        </TouchableOpacity> */}
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});






// class def
/*class user {

  constructor(firstName, latitude, longitude, calendar) {
    // invokes the setter
    this.first = firstName;

    this.lat = latitude;
    this.long = longitude;
    this.calendar = calendar;

  }

  getElementAtIndex(index) {
    return this.calendar[index];
  }

  get firstName() {
    return this.firstName;
  }



  get lat() {
    return this.lat;
  }

  get long() {
    return this.long;
  } */

/*set name(value) {
  if (value.length < 4) {
    alert("Name is too short.");
    return;
  }
  this._name = value;
}
}*/

/*
const calendar_Amy = ["Sleep", "Sleep", "Sleep", "Sleep", "Sleep" ,"Sleep", "Sleep", "Sleep", "Sleep", "MAT291", "MAT290", "Free", "Free", "ECE212", "ECE241", "ECE244", "MAT290", "Free", "Free", "QuizPrep", "QuizPrep", "LabWork", "Free", "Sleep"];
const Friend_1 = new user("Amy", 43.6602, -79.3949, calendar_Amy);

const calendar_John = ["Sleep", "Sleep", "Sleep", "Sleep", "Sleep" ,"Sleep", "Sleep", "Sleep", "Sleep", "MAT290", "Free", "Free", "Free", "Lab", "ECE241", "LabWork", "Free", "Free", "Free", "QuizPrep", "QuizPrep", "Free", "Free", "Free"];
const Friend_2 = new user("John", 43.6645, -79.3997, calendar_John);

const calendar_Sarah = ["Sleep", "Sleep", "Sleep", "Sleep", "Sleep" ,"Sleep", "Sleep", "Sleep", "Sleep", "Free", "MAT290", "LabWork", "ECE212", "Free", "Free", "MAT291", "MAT290", "Free", "Free", "QuizPrep", "QuizPrep", "LabWork", "Free", "Sleep"];
const Friend_3 = new user("Sarah", 43.66090951652634, -79.39675167671382, calendar_Sarah);

*/
