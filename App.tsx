import { NavigationContainer } from '@react-navigation/native'
import { UnauthenticatedPages } from './components/pages/stacks/UnauthenticatedPages'

export default function App() {
  return (
    <NavigationContainer>
      <UnauthenticatedPages />
    </NavigationContainer>
  )
}
