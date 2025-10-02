// app/_layout.tsx
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'


export  function Root() {
  return (
      <View style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="index" options={{ title: 'Streams' }} />   
        </Stack>
            </View>
  )
}

export default function RootLayout() {
  return (
      <Root />
  )
}