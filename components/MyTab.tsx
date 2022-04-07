import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={styles.Screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Store() {
  return (
    <View style={styles.Screen}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function Booking() {
  return (
    <View style={styles.Screen}>
      <Text>Booking Screen</Text>
    </View>
  );
}

function MobileOrder() {
  return (
    <View style={styles.Screen}>
      <Text>Mobile Order Screen</Text>
    </View>
  );
}

function My() {
  return (
    <View style={styles.Screen}>
      <Text>MY Screen</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="스토어" component={Store} />
      <Tab.Screen name="예매" component={Booking} />
      <Tab.Screen name="모바일오더" component={MobileOrder} />
      <Tab.Screen name="MY" component={My} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Screen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default MyTabs;
