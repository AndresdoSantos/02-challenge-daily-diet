import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/home'
import { DietDetails } from '../screens/diet-details'
import { MealForm } from '../screens/meal-form'
import { Feedback } from '../screens/feedback'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRouter() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
        initialRouteName="profile"
      >
        <Screen name="home" component={Home} />
        <Screen name="diet-details" component={DietDetails} />
        <Screen name="meal-form" component={MealForm} />
        <Screen name="feedback" component={Feedback} />
      </Navigator>
    </NavigationContainer>
  )
}
