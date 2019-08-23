import axios from 'axios';

/**
 * Performing multiple concurrent requests
 * @param {Array} requests 
 */
export const multipleRequests = (requests) => {
  return axios.all(requests)
    .then(axios.spread((...requests) => {
      return {
        ...requests
      }
    }))
}
