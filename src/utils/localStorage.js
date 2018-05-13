import {AsyncStorage} from 'react-native'

export async function get () {
  try {
    const value = await AsyncStorage.getItem('token')
    if (value !== null) {
      return value
    }
  } catch (error) {
    console.log('Error getting data. ' + error)
  }
}

export async function set (value) {
  if (value === null) {
    try {
      await AsyncStorage.removeItem('token')
    } catch (error) {
      console.log('Error removing data. ' + error)
    }
  } else {
    try {
      await AsyncStorage.setItem('token', value)
    } catch (error) {
      console.log('Error setting data. ' + error)
    }
  }
}
