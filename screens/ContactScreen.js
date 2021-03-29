import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { List, Title } from 'react-native-paper'

const contactsData = [
  {
    name: "Laurent Fourier",
    title: "CEO",
    company: "Assistance Business Line",
    pic: "https://media-exp1.licdn.com/dms/image/C4D03AQEWrRc23WJMlA/profile-displayphoto-shrink_800_800/0/1549213125235?e=1622073600&v=beta&t=ZRyqrVGR-PWM8EEdh4dZpp4DRA7IiC0n6sEHTLxiIzU",
  },
  {
    name: "Des Donnelly",
    title: "Senior Vice President",
    company: "Group Sales Distribution",
    pic: "https://media-exp1.licdn.com/dms/image/C4E03AQEzTJ_yXUUucQ/profile-displayphoto-shrink_800_800/0/1516283950182?e=1622073600&v=beta&t=aJbvI40d8Nai31rlcfPK-p7agh9CNj1QFL-D42-VtJg",
  },
  {
    name: "Lim Hui Ject",
    title: "Regional Group Director",
    company: "Asia Region",
    pic: "https://media-exp1.licdn.com/dms/image/C4D03AQFKSUHz42hJ1w/profile-displayphoto-shrink_800_800/0/1517502768817?e=1622073600&v=beta&t=1Hyq0y5SGv48JKMLCDq4gxGGzyzZwN2vqo1kb-A2kGo",
  },
  {
    name: "David Ball",
    title: "Regional Sales Director",
    company: "South East Asia",
    pic: "https://media-exp1.licdn.com/dms/image/C4D03AQH3rjCKqNDiFQ/profile-displayphoto-shrink_800_800/0/1516508778290?e=1622073600&v=beta&t=8s9tReMeE2TGkdX1btAQ4ey1P_gcQEl53IW4InO7cgQ",
  },
];

export default function ContactScreen() {
  return(
    <View style={styles.container}>
      <Title style={styles.title}> Contacts </Title>
      <View style={styles.list}>
        {contactsData.map((item) => {
          return (
            <List.Item
              title={item.name}
              description={item.company, item.title}
              left={props =>
                <Image {...props} style={styles.icon} source={{ uri: item.pic }} />}
            />)
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20, 
  },
  list: {
    marginTop: 20,
    marginLeft: 10, 
    marginRight: 10
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50
  }
})
