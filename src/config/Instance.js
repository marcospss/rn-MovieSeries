import axios from 'axios';
import SETTINGS from './Settings';

export default axios.create({
  baseURL: `${SETTINGS.apiEndpoint}`
});
