import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const getRandomNumber = (most) => {
  var num = Math.floor(Math.random() * most) + 1;
  console.log(num);
};

const getName = (id) => {
	return 
}

const items = [
	{id: 1, name: '5-star'},
	{id: 2, name: 'dairy-milk'},
	{id: 3, name: 'kitkat'},
	{id: 4, name: 'perk'},
	{id: 5, name: 'snickers'},
	{id: 6, name: 'milky-bar'}
  ];

export default function App() {
	
  return (
	<View style={styles.screen}>

	
    
      <View style={styles.heading}>
        <Text style={styles.headingText} onTouchEnd={getRandomNumber(5)}>
          CYPHER MAINS
        </Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.main}>
        <View style={styles.row}>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/5-star.png")} />
            <Text style={styles.num}>1</Text>
          </View>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/dairy-milk.png")} />
            <Text style={styles.num}>2</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/kitkat.png")} />
            <Text style={styles.num}>3</Text>
          </View>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/perk.png")} />
            <Text style={styles.num}>4</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/snickers.png")} />
            <Text style={styles.num}>5</Text>
          </View>
          <View style={styles.item}>
		  <Image style={styles.img} source={require("./Images/milky-bar.png")} />
            <Text style={styles.num}>6</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    backgroundColor: "#BFFFF0",
    width: "100%",
    height: "100%",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
  },
  heading: {
    // something
  },
  headingText: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "700",
  },
  main: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
	paddingTop: 30
  },
  row: {
    flexDirection: "row",
    height: 100,
    margin: 30,
  },
  num: {
    marginHorizontal: 60,
  },
  item: {
	flexDirection: 'column'
  },
  img: {
	  width: 100, 
	  height: 100,
	  marginLeft: 10
  }
});
