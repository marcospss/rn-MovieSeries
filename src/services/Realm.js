import Realm from 'realm';

import FavoritesSchema from '~/schemas/Favorites';

export default function getRealm() {
  return Realm.open({
    schema: [FavoritesSchema],
  });
}