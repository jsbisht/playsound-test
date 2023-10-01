import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from '../../../types'
import { PN_PLAYER } from '../../../utility/constants/app'

import { PlayerScreen } from '../player'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const UnauthenticatedPages = () => {
  return (
    <Stack.Navigator initialRouteName={PN_PLAYER}>
      <Stack.Screen
        name={PN_PLAYER}
        component={PlayerScreen}
        options={{ headerBackVisible: true }}
      />
    </Stack.Navigator>
  )
}
