import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { PropsWithChildren, useCallback } from 'react'
import { View } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function SetupFonts({ children }: PropsWithChildren) {
  const [fontsLoaded] = useFonts({
    'Poppins-Light': require('./assets/fonts/poppins/Poppins-Light.ttf'),
    'Poppins-Black': require('./assets/fonts/poppins/Poppins-Black.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  )
}
