import SETTINGS from './../config/Settings';
import INSTANCE from './../config/Instance';

const paramsDefault = `api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`;

/**
 * Movie/TV Discover
 * Discover movies by different types of data like average rating, number of votes, genres and certifications. You can get a valid list of certifications from the  method.
 * Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.
 * @method getDiscover(filters: object)
 * @param { String } mediaType
 * @param { String } sortBy
 * @param { String } year
 * @param { String } genre
 * @param { String } fieldFilter
 * @returns Movie List Result Object
 */
export const getDiscover = (filters) => {
  const mediaType = filters.mediaType,
    sortBy = filters.sortBy,
    year = filters.year,
    genre = filters.genre,
    fieldFilter = (mediaType === 'movie') ? 'year' : 'first_air_date_year';
  // TODO: https://github.com/axios/axios#config-defaults
  return INSTANCE.get(`/discover/${mediaType}?${paramsDefault}&sort_by=${sortBy}&with_genres=${genre}&${fieldFilter}=${year}`);
}