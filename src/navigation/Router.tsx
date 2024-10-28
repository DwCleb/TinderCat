import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/Home.tsx';
import ChatScreen from '../views/Chat.tsx';
import ProfileScreen from '../views/Profile.tsx';
import {TouchableOpacity, View} from "react-native";
import Message from "../assets/Message.tsx";
import Paw from "../assets/Paw.tsx";
import User from "../assets/User.tsx";
import {colors} from "../utils.ts";

const Tab = createBottomTabNavigator();

const TinderCatBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 44,
        backgroundColor: colors.white,
        borderRadius: 36,
        padding: 8,
        alignItems: 'center',
        paddingBottom: 16,
        bottom: 50,
        marginBottom: 50,
        width: 156,
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name }, {});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const styleTab = { flex: 1, alignSelf: 'center', alignItems: 'center' };

        const routeMap = {
          Home: <Paw color={ isFocused ? colors.pink : colors.black_text}/> ,
          Chat:  <Message color={ isFocused ? colors.pink : colors.black_text}/>,
          Profile: <User color={ isFocused ? colors.pink : colors.black_text}/>,
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styleTab}
          >
            {routeMap[label]}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  tabBar={(props) => <TinderCatBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
