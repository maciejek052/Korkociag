// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { School, Subject } = initSchema(schema);

export {
  School,
  Subject
};