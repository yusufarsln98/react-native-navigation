import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, Button, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Onboarding = ({ navigation }) => {
  const [test, setTest] = React.useState("test");

  return (
    <View>
      <Text>Select an option</Text>
      <Button 
        title="Login" 
        onPress={() => 
          navigation.navigate('Login', { test: test })
        } 
      />
      <Button 
        title="Sign Up" 
        onPress={() => 
          navigation.navigate('SignUp' , { test: test })
        } 
      />
    </View>
  );
};

const Login = ({ route }) => {
  return (
    <View>
      <Text>Login {route.params.test}</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const About = () => {
  return (
    <View>
      <Text>About</Text>
    </View>
  );
};

const OnboardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ title: 'Onboarding' }} />
      <Stack.Screen name="Login" component={Login} options={({ route }) => ({ title: `Sign In (${route.params.test})`})} />
      <Stack.Screen name="SignUp" component={SignUp}  options={{ title: 'Sign Up' }} />
    </Stack.Navigator>
  )
};

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{ tabBarIcon: (props) => <Ionicons name="home" {...props} /> }}
      />
      <Tab.Screen 
        name="OnboardingStack" 
        component={OnboardingStack} 
        options={{ 
          headerShown: false, 
          title:"Onboarding",
          tabBarIcon: (props) => <Ionicons name="person" {...props} />  
        }} 
      />
    </Tab.Navigator>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeTab" component={HomeTab} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

