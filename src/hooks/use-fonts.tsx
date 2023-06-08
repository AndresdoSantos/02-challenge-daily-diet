/* eslint-disable camelcase */
import {
  useFonts as useNunitoSans,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { Text } from 'react-native'

export function useFonts() {
  const [fontsLoaded] = useNunitoSans({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  if (!fontsLoaded) {
    return <Text>Loading</Text>
  }
}
