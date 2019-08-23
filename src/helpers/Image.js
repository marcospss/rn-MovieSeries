import IMAGES_SETTINGS from "~/config/ImageSettings";
import defaultImage from '~/assets/images/default-image.png';

export const posterImage = (poster_path, size = 'w92') => {
    const sizeImage = IMAGES_SETTINGS.poster_sizes[size];
    if (!poster_path) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${poster_path}`;
}

export const backdropImage = (backdrop_path, size = 'w300') => {
    const sizeImage = IMAGES_SETTINGS.backdrop_sizes[size];
    if (!backdrop_path) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${backdrop_path}`;
}

export const profileImage = (profile_sizes, size = 'w185') => {
    const sizeImage = IMAGES_SETTINGS.profile_sizes[size];
    if (!profile_sizes) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${profile_sizes}`;
}
