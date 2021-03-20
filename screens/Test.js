import * as React from "react";
import {Text, View} from "react-native"
import {List} from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="For more information:">
      <List.Accordion
        title="If you are from Asia Pacific"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Contact Lynn Hee" />
        <List.Item title="Contact Maria Burgos" />
      </List.Accordion>

      <List.Accordion
        title="If you are from Rest of the World"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Contact Jerome Barthe" />
        <List.Item title="Contact Coenraad" />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent

//export default function Test() {
//    return (
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        <Text>The awesome Sales Enablement Team</Text>
//        <Text></Text>
 //       <Text>Jerome Barthe</Text>
 //       <Text>Lynn Hee</Text>
 //       <Text>Maria Burgos</Text>
//      </View>
//    );
 // }
