import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
// eslint-disable-next-line import/no-cycle
import ArticleScreen from '../screens/ArticleScreen';

export type RootStackParamList = {
  Home: undefined;
  Article: undefined | { url: string; title: string };
};

const AppNavigator: FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
