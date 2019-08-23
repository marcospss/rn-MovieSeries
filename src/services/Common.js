import SETTINGS from '~/config/Settings';
import INSTANCE from '~/config/Instance';

const paramsDefault = `api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`;

/**
 * Get Credits
 * Get the cast and crew for a movie.
 * Get the credits (cast and crew) that have been added to a TV show.
 * @method getCredits(properties)
 * @param properties
 * @returns Returns the cast and crew of a movie or TV show.
 */
export function getCredits(properties) {
  const mediaType = properties.mediaType,
    id = properties.mediaId;
  return INSTANCE.get(`/${mediaType}/${id}/credits?${paramsDefault}`);
}

/**
 * Get Recommendations
 * Get a list of recommended movies for a movie or list of TV show recommendations for this item.
 * @param properties
 */
export function getRecommendations(properties) {
  const mediaType = properties.mediaType,
    id = properties.mediaId;
  return INSTANCE.get(`/${mediaType}/${id}/recommendations?${paramsDefault}`);
}

/**
 * Get Similar
 * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
 * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
 * @param properties
 */
export function getSimilar(properties) {
  const mediaType = properties.mediaType,
    id = properties.mediaId;
  return INSTANCE.get(`/${mediaType}/${id}/similar?${paramsDefault}`);
}

/**
 * Get Popular
 * Get a list of the current popular movies/tv shows on TMDb. This list updates daily.
 * @param properties
 */
export function getPopular(mediaType) {
  return INSTANCE.get(`/${mediaType}/popular?${paramsDefault}`);
}

/**
 * Get Top Rated
 * Get the top rated movies/tv shows on TMDb.
 * @param properties
 */
export function getTopRated(mediaType) {
  return INSTANCE.get(`/${mediaType}/top_rated?${paramsDefault}`);
}

/**
 * Get Details
 * Get the primary information about a movies/tv shows.
 * @param properties
 */
export function getDetails(properties) {
  const mediaType = properties.mediaType,
    id = properties.mediaId;
  return INSTANCE.get(`/${mediaType}/${id}?${paramsDefault}`);
}

/**
 * Get Genres
 * Get the list of official genres for movies/TV shows.
 * @param properties
 */
export function getGenres(mediaType) {
  return INSTANCE.get(`/genre/${mediaType}/list?${paramsDefault}`);
}
