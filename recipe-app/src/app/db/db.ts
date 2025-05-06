import { i, init } from '@instantdb/core';
import {environment} from '../../environments/environment'

const API_ID = environment.API_ID;
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
