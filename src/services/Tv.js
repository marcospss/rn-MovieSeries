import SETTINGS from './../config/Settings';
import INSTANCE from './../config/Instance';

const paramsDefault = `api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`;

/**
 * Get Latest
 * Get the most newly created TV show. This is a live response and will continuously change.
 * @method getLatest()
 * @returns  List the most newly created TV show
 */
export function getLatest() {
    return INSTANCE.get(`/tv/latest?${paramsDefault}`);
}

/**
 * Get TV Airing Today
 * Get a list of TV shows that are airing today. This query is purely day based as we do not currently support airing times.
 * You can specify a  to offset the day calculation. Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00).
 * @method getAiringToday()
 * @returns  List of TV shows that are airing today
 */
export function getAiringToday() {
    return INSTANCE.get(`/tv/airing_today?${paramsDefault}`);
}

/**
 * Get TV On The Air
 * Get a list of shows that are currently on the air.
 * This query looks for any TV show that has an episode with an air date in the next 7 days.
 * @method getOnTheAir()
 * @returns  List of shows that are currently on the air
 */
export function getOnTheAir() {
    return INSTANCE.get(`/tv/on_the_air?${paramsDefault}`);
}
