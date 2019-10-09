import { useState, useEffect, useContext } from 'react';
import { ConfigContext } from '~/config/appContext';

export function useFavoriteStatus(mediaId) {
  const [isFavorite, setIsFavorite] = useState(false);
  const context = useContext(ConfigContext);
  useEffect(() => {
    setIsFavorite(false);
    context.favorites.forEach(item => {
        if (item.id === mediaId) {
            setIsFavorite(true);
        }
    });
  }, [mediaId, context.favorites]);

  return isFavorite;
}