import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Inicial from "../screens/TelaInicial";
import Detalhes from "../screens/TelaDetalhes";
import Config from "../screens/TelaConfig";
import Lista from "../screens/TelaDetalhes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Inicial}
        options={{
          tabBarIcon: () => <Feather name="home" size={25} />,
        }}
      />
      <Tab.Screen
        name="Lista"
        component={Lista}
        options={{
          tabBarIcon: () => <Feather name="list" size={25} />,
        }}
      />
      <Tab.Screen
        name="Configuração"
        component={Config}
        options={{
          tabBarIcon: () => <Feather name="settings" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
}
