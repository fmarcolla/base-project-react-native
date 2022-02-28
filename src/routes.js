
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/signIn';
import Main from './pages/main';

const Stack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export const AuthRoutes = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}