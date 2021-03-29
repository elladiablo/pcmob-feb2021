import * as React from "react";
import {Text, View,Button} from "react-native"
import {createStackNavigator} from "@react-navigation/stack";


function EventsHomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Day One Schedule</Text>
        <Text></Text>
        <Button
            onPress={() =>navigation.navigate ("Events Second")}
            title ="Second Screen"
        ></Button>
      </View>
    );
  }

  function EventsSecondScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Day Two Schedule</Text>
            <Button
            onPress={() =>navigation.navigate ("Events Third")}
            title ="Third Screen"
        ></Button>
        </View>
    );
 }

 function EventsThirdScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Day Three Schedule</Text>
            <Button
            onPress = {() => navigation.popToTop()}
            title = "Back to top"
            ></Button>
        </View>
    );
 }
  const Stack = createStackNavigator ();

  export default function EventsStack() {
      return (
          <Stack.Navigator>
              <Stack.Screen name="Events Home" component ={EventsHomeScreen}/>
              <Stack.Screen name="Events Second" component ={EventsSecondScreen}/>
              <Stack.Screen name="Events Third" component ={EventsThirdScreen}/>
          </Stack.Navigator>
      )
  }