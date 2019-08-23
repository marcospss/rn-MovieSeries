import SETTINGS from './../config/Settings';
import INSTANCE from './../config/Instance';

const paramsDefault = `api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`;

/**
 * Multi Search
 * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
 * @method getMultiSearch(query: object)
 * @param { String } query
 * @returns  Movies, tv shows and people in a single request.
 */
export function getMultiSearch(query) {
  return INSTANCE.get(`/search/multi?${paramsDefault}&query=${query}`);
}