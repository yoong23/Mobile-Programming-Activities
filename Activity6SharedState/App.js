
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AppProvider, AppContext } from './AppContext';
import ShopTab from './ShopTab';
import CartTab from './CartTab';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { cartItems } = useContext(AppContext);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#172554',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#94A3B8',
          tabBarStyle: {
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }}
      >
    <Tab.Screen
      name="Shop"
      component={ShopTab}
      options={{
        title: 'Shop',
        tabBarLabel: 'Shop',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={focused ? 'storefront' : 'storefront-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />

        <Tab.Screen
          name="Cart"
          component={CartTab}
          options={{
            title: 'My Cart',
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'cart' : 'cart-outline'}
                size={size}
                color={color}
              />
            ),
            title: 'My Cart',
            tabBarLabel: 'Cart',
            tabBarBadge: cartCount > 0 ? cartCount : undefined,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
