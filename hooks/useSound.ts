import { Audio } from 'expo-av'
import { useEffect, useRef } from 'react'
import alarmSound from '../assets/sounds/alarm-clock.mp3'

export function useSound() {
  const sound = useRef<Audio.Sound | null>(null)

  async function playSound() {
    try {
      console.log('Loading Sound')
      sound.current = new Audio.Sound()

      await sound.current.loadAsync(alarmSound)
      console.log('Playing Sound')
      await sound.current.replayAsync()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    return () => {
      console.log('Unloading Sound')
      if (sound.current) {
        sound.current.unloadAsync()
      }
    }
  }, [])

  return { playSound }
}
