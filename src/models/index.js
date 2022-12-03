// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Homework, LessonOffer, Subject, School } = initSchema(schema);

export {
  Homework,
  LessonOffer,
  Subject,
  School
};