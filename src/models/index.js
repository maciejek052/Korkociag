// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LessonCandidate, UserInfo, LessonStudent, LessonTeacher, Homework, LessonOffer, Subject, School } = initSchema(schema);

export {
  LessonCandidate,
  UserInfo,
  LessonStudent,
  LessonTeacher,
  Homework,
  LessonOffer,
  Subject,
  School
};