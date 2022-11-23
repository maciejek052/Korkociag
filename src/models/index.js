// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LessonOffer, Subject, School } = initSchema(schema);

export {
  LessonOffer,
  Subject,
  School
};