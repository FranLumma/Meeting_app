import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { display: "none" },
        tabBarStyle: { borderTopWidth: 0 },
      }}
    >
      <Tabs.Screen
        name="cadastro"
        options={{
          title: "Cadastro",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen name="fornecedorlista" options={{ title: "Fornecedores" }} />
    </Tabs>
  );
}
