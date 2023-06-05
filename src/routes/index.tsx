import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRouter() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}
