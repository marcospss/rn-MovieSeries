import AsyncStorage from '@react-native-community/async-storage';
import SETTINGS from '~/config/Settings';
import Reactotron from 'reactotron-react-native';

export default {
  async getData() {
    try {
      const response = await AsyncStorage.getItem(SETTINGS.storeName);
      return await JSON.parse(response) || [];
    } catch (error) {
      Reactotron.log('getData -> error -> ', error);
    }
  },

  async setValue(data) {
    const collection = await this.getData();
    const mergeValues = Object.assign(collection, data);
    Reactotron.log('mergeValues -> ', mergeValues);
    try {
      AsyncStorage.setItem(SETTINGS.storeName, JSON.stringify(data));
    } catch (error) {
      Reactotron.log('setValue -> error -> ', error);
    }
  },

  async removeValue(data) {
    try {
      return await AsyncStorage.getItem(SETTINGS.storeName);
    } catch (error) {
      Reactotron.log('removeValue -> error -> ', error);
    }
  },

  mergeValues(collection, newData) {
    return [...collection, newData];
  },

};
