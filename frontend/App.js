import { StyleSheet } from 'react-native';
import Welcome from './pages/login/Welcome.js';
import SignIn from './pages/login/In.js';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './pages/login/Up.js';
import { useEffect, useState } from 'react';

import AuthContext from './context/AuthContext.js';


const RootStack = createStackNavigator()

export default function App() {

  const [auth, setAuth] = useState({
    isOnline: false,
    isConnected: false
  });

  useEffect(() => {



  }, [])

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
              <RootStack.Screen name="Welcome" component={Welcome} />
              <RootStack.Screen name="SignIn" component={SignIn} />
              <RootStack.Screen name="SignUp" component={SignUp} />
          </RootStack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
