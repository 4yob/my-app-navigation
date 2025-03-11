import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer2 from './navigation/DrawerNavigation';
//import Stack2 from './navigation/StackNavigation.js';
//import Stack3 from './navigation/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer2 />
    </NavigationContainer>
  );
}