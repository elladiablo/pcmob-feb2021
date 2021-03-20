import * as React from "react";
import {Text, View,Button} from "react-native"
import {createStackNavigator} from "@react-navigation/stack";


function EventsHomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Events!</Text>
        <Button
            onPress={() =>navigation.navigate ("EventsSecond")}
            title ="Second SCreen"
        ></Button>
      </View>
    );
  }

  function EventsSecondScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Events Second Page!</Text>
        </View>
    );
 }
  const Stack = createStackNavigator ();

  export default function EventsStack() {
      return (
          <Stack.Navigator>
              <Stack.Screen name="EventsHome" component ={EventsHomeScreen}/>
              <Stack.Screen name="EventsSecond" component ={EventsSecondScreen}/>
          </Stack.Navigator>
      )
  }