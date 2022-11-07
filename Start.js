import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  // StyleSheet,
  Fonts,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Start({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./logo.png")} />

      <StatusBar style="auto" />


      <TouchableOpacity style={styles.loginBtn}>
        <Button
          title="LOGIN"
          color="#FFFFFF"

          onPress={() => navigation.navigate("Login")}//SHOULD BE LOGIN
        />
        {/* <Text style={styles.loginText}>LOGIN</Text> */}
      </TouchableOpacity>

      <TouchableOpacity style={styles.createBtn}>
        <Button
          title="CREATE PROFILE"
          color="#FFFFFF"
          onPress={() => navigation.navigate("Create")}
          // titleStyle={{fontFamily: "Montserrat"}}
          // fontFamily= "Arial"
          // fontFamily={Fonts.Montserrat}
          // titleStyle={{
          //   color: "green",
          //   fontSize: 16,
          // }}
        />
        {/* <Text style={styles.loginText}>LOGIN</Text> */}
      </TouchableOpacity>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",//#FFC0CB
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    // fontFamily: "Arial",
    // fontFamily: "Times New Roman",
    // fontVariant:"Bold",

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    // fontSize:20
  },


  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f01e2c",
    // fontFamily: "Arial",
    // fontSize:20
  },

  createBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f01e2c",
    // fontFamily: "Arial"
  },
});