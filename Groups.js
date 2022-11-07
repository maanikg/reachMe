

import React from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DATA = [
  { label: 'Amy', value: '1' },
  { label: 'Alice', value: '2' },
  { label: 'Ben', value: '3' },
  { label: 'Barb', value: '4' },
  { label: 'Charles', value: '5' },
  { label: 'Devin', value: '6' },
  { label: 'Dan', value: '7' },
  { label: 'Evan', value: '8' },
  { label: 'Jackson', value: '8' },
  { label: 'James', value: '8' },
  { label: 'Maanik', value: '8' },
  { label: 'Matt', value: '8' },
  { label: 'Syna', value: '8' },
  { label: 'Tyler', value: '8' },
];
// const Groups = export default function Start() => {
export default function Groups({ navigation }) {
  const [selected, setSelected] = React.useState([]);

  const renderDataItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={DATA}
        labelField="label"
        valueField="value"
        placeholder="Create Study Group"
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
        renderItem={renderDataItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
              <AntDesign color="black" name="delete" size={17} />
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar />
      <TouchableOpacity style={styles.createBtn}>
        <Button
          title="CREATE GROUP"
          color="#FFFFFF"
          onPress={() => navigation.navigate("StudyGroup")}//SHOULD BE MAINMAP
        />
        {/* <Text style={styles.loginText}>LOGIN</Text> */}
      </TouchableOpacity>
      {/* </View>
      <View > */}

      {/* </View > */}
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    flex: 1
  },
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },

  createBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f01e2c",
  },

});

// export default App;

