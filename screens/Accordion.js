import * as React from "react";
import {Text, View} from "react-native"
import {List} from 'react-native-paper';

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Frequently Asked Questions">
      <List.Accordion
        title="What is this?"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Exactly what the title says." />
        <List.Item title="A Sales Acceleration Program" />
      </List.Accordion>

      <List.Accordion
        title="When will this be held?"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Check your calendar" />
        <List.Item title="Your calendar has been blocked out" />
      </List.Accordion>
    </List.Section>
  );
};

export default FAQ