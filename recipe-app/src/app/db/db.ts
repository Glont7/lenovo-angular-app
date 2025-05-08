import { i, init } from '@instantdb/core';


const API_ID = 'ec916851-6aef-4699-a878-1bb897fc02c0';
const schema = i.schema({
  entities: {
    recipes: i.entity({
      id: i.number(),
      name: i.string(),
      image: i.string(),
      difficulty: i.string(),
      prepTimeMinutes: i.number(),
    }),
  },
});

const database = init({ appId: API_ID, schema: schema });

export { database, schema };