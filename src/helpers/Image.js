import IMAGES_SETTINGS from "~/config/ImageSettings";
import defaultImage from '~/assets/images/default-image.png';

export const posterImage = (imagePath, size = 'w92') => {
    const sizeImage = IMAGES_SETTINGS.poster_sizes[size];
    if (!imagePath) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${imagePath}`;
}

export const stillImage = (imagePath, size = 'w92') => {
    const sizeImage = IMAGES_SETTINGS.still_sizes[size];
    if (!imagePath) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${imagePath}`;
}

export const backdropImage = (imagePath, size = 'w300') => {
    const sizeImage = IMAGES_SETTINGS.backdrop_sizes[size];
    if (!imagePath) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${imagePath}`;
}

export const profileImage = (imagePath, size = 'w185') => {
    const sizeImage = IMAGES_SETTINGS.profile_sizes[size];
    if (!imagePath) {
        return `${defaultImage}`;
    }
    return `${IMAGES_SETTINGS.secure_base_url}${sizeImage}${imagePath}`;
}
