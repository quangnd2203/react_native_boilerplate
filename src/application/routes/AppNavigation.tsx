import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import appRouters from './appRoutes';
import { SplashScreen } from 'application/features/splash';
import { LoginScreen } from 'application/features/login';
import { navigationRef } from './navigationAction';
import { CounterScreen } from '../features/counter';
import { ProductScreen } from '../features/product';

const Stack = createStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={appRouters.dashboard} component={SplashScreen} />
                <Stack.Screen name={appRouters.login} component={LoginScreen} />
                <Stack.Screen name={appRouters.counter} component={CounterScreen} />
                <Stack.Screen name={appRouters.product} component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
