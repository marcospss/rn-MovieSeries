export default class FavoritesSchema {
    static schema = {
      name: 'Favorites',
      primaryKey: 'id',
      properties: {
        id: { type: 'int', indexed: true },
        title: 'string',
        date: 'date',
        backdropPath: 'string',
        overview: 'string',
        voteAverage: 'double',
        isFavorite: 'bool',
        mediaType: 'string',
      },
    };
  }
  