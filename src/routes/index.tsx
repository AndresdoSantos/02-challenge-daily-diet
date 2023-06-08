import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/home'
import { DietDetails } from '../screens/diet-details'
import { NewMealForm } from '../screens/new-meal-form'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRouter() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
      >
        <Screen name="home" component={Home} />
        <Screen name="diet-details" component={DietDetails} />
        <Screen name="new-meal-form" component={NewMealForm} />
      </Navigator>
    </NavigationContainer>
  )
}
