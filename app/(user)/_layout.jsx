import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack backBehavior="history">
      <Stack.Screen
        name="userprofile"
        options={{ title: "false", headerShown: false }}
      />
    </Stack>
  );
}
