import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import appRouters from './appRoutes';
import { SplashScreen } from 'application/features/splash';
import { LoginScreen } from 'application/features/login';
import { navigationRef } from './navigationAction';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={appRouters.dashboard} component={SplashScreen} />
                <Stack.Screen name={appRouters.login} component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
