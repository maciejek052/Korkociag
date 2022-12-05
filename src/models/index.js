// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserInfo, LessonOffer, Subject, School, Homework, LessonOfferUserInfo } = initSchema(schema);

export {
  UserInfo,
  LessonOffer,
  Subject,
  School,
  Homework,
  LessonOfferUserInfo
};