import FastImage from 'react-native-fast-image'

export function Profile() {
  return (
    <FastImage
      style={{ width: 200, height: 200 }}
      source={{
        uri: 'https://lh3.googleusercontent.com/a/AAcHTtf0msEGHjf0vLFh1_sk8SVbNl_nLqH-48VHRWP9=s96-c-rg-br100',
        headers: { Authorization: 'someAuthToken' },
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  )
}
