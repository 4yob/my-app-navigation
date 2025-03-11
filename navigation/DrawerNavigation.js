import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Drawer2 from "../pages/Drawer2";
import DrawerScreen from "../pages/DrawerScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="DrawerScreen">
            <Drawer.Screen name="Drawer Screen" component={DrawerScreen} />
            <Drawer.Screen name="Drawer 2" component={Drawer2} />
        </Drawer.Navigator>
    );
}