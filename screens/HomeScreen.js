import React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List, Card, Paragraph, Title } from 'react-native-paper';
import { Container, Header, Left, Body, Right } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

function HomeScreen() {

  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>
          International SOS 
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title>International SOS Sales Acceleration Program</Title>
            <Title></Title>
            <Paragraph>Welcome to the program. We look forward to hosting you on your learning journing over the next 3 weeks.</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 50, height: 210}} source={{ uri: "https://upload.wikimedia.org/wikipedia/en/c/c7/International_SOS_logo_with_tagline.png"}}/>
          </Card>

        <List.Section title= "Frequently Asked Questions">
          <List.Accordion
            title="What is this for?">
              <List.Item title ="Learn more about International SOS solutions" />
          </List.Accordion>
          <List.Accordion
            title ="Will there be pre-work for completion?">
              <List.Item title ="Yes, there is pre-work"></List.Item>
              <List.Item title ="You can find them at Sales Learning Platform"></List.Item>
            </List.Accordion>
            <List.Accordion
            title ="Where can I find more information?">
              <List.Item title ="Ping IntlSOS Sales Guru Bot on Telegram"></List.Item>
            </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    marginTop: 20, 
    marginLeft: 15, 
    marginRight: 15,
  }
})

   
   
   