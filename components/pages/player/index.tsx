import React, { useEffect } from 'react'

import { View } from 'react-native'
import { useSound } from '../../../hooks/useSound'

export const PlayerScreen = () => {
  const { playSound } = useSound()

  useEffect(() => {
    console.log('Playing starting')
    playSound()
  }, [])

  return <View></View>
}
