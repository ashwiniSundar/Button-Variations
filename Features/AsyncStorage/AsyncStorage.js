import { AsyncStorage } from 'react-native'

export const storeItem = async (data) => {
  const { key, value } = data
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (e) {}
}
export const getItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key).then((data) => data)
  } catch (e) {}
}
export const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys().then((data) => data)
  } catch (e) {}
}

export const clearAsyncStorage = async () => {
  try {
    return await AsyncStorage.clear()
  } catch (e) {}
}
export const removeItem = async (key) => {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (e) {}
}
