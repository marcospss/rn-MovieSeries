import SETTINGS from './../config/Settings';
import INSTANCE from './../config/Instance';

const paramsDefault = `api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`;

/**
 * Get Now Playing
 * Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
 * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
 * @method getNowPlaying()
 * @returns  List of movies in theatres
 */
export function getNowPlaying() {
    return INSTANCE.get(`/movie/now_playing?${paramsDefault}`);
}

/**
 * Get Upcoming
 * Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
 * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
 * @method getUpcoming()
 * @returns  List of upcoming movies in theatres
 */
export function getUpcoming() {
    return INSTANCE.get(`/movie/upcoming?${paramsDefault}`);
}
