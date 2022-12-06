// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LessonStudent, UserInfo, LessonTeacher, Homework, LessonOffer, Subject, School } = initSchema(schema);

export {
  LessonStudent,
  UserInfo,
  LessonTeacher,
  Homework,
  LessonOffer,
  Subject,
  School
};