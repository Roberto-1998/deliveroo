import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-url-polyfill/auto';
import { store } from './store';
import { Provider } from 'react-redux';

import { BasketScreen, DeliveryScreen, HomeScreen, PreparingOrderScreen, RestaurantScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen
              name='Basket'
              component={BasketScreen}
              options={{
                presentation: 'modal',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='PreparationOrder'
              component={PreparingOrderScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Delivery'
              component={DeliveryScreen}
              options={{
                presentation: 'fullScreenModal',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
