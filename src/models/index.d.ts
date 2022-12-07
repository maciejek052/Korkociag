import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerLessonStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonStudent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserInfo?: UserInfo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonStudentUserInfoId?: string | null;
}

type LazyLessonStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonStudent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserInfo: AsyncItem<UserInfo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonStudentUserInfoId?: string | null;
}

export declare type LessonStudent = LazyLoading extends LazyLoadingDisabled ? EagerLessonStudent : LazyLessonStudent

export declare const LessonStudent: (new (init: ModelInit<LessonStudent>) => LessonStudent) & {
  copyOf(source: LessonStudent, mutator: (draft: MutableModel<LessonStudent>) => MutableModel<LessonStudent> | void): LessonStudent;
}

type EagerUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly picture?: string | null;
  readonly phone_number?: string | null;
  readonly cognitoID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly picture?: string | null;
  readonly phone_number?: string | null;
  readonly cognitoID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo>) => UserInfo) & {
  copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo>) => MutableModel<UserInfo> | void): UserInfo;
}

type EagerLessonTeacher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonTeacher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserInfo?: UserInfo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonTeacherUserInfoId?: string | null;
}

type LazyLessonTeacher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonTeacher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserInfo: AsyncItem<UserInfo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonTeacherUserInfoId?: string | null;
}

export declare type LessonTeacher = LazyLoading extends LazyLoadingDisabled ? EagerLessonTeacher : LazyLessonTeacher

export declare const LessonTeacher: (new (init: ModelInit<LessonTeacher>) => LessonTeacher) & {
  copyOf(source: LessonTeacher, mutator: (draft: MutableModel<LessonTeacher>) => MutableModel<LessonTeacher> | void): LessonTeacher;
}

type EagerHomework = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Homework, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly description?: string | null;
  readonly lessonofferID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHomework = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Homework, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly description?: string | null;
  readonly lessonofferID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Homework = LazyLoading extends LazyLoadingDisabled ? EagerHomework : LazyHomework

export declare const Homework: (new (init: ModelInit<Homework>) => Homework) & {
  copyOf(source: Homework, mutator: (draft: MutableModel<Homework>) => MutableModel<Homework> | void): Homework;
}

type EagerLessonOffer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonOffer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Subject?: Subject | null;
  readonly address?: string | null;
  readonly locationRadius?: number | null;
  readonly place?: string | null;
  readonly days?: (string | null)[] | null;
  readonly hours?: (string | null)[] | null;
  readonly Homework?: (Homework | null)[] | null;
  readonly ownerCognitoID?: string | null;
  readonly city?: string | null;
  readonly LessonStudent?: LessonStudent | null;
  readonly LessonTeacher?: LessonTeacher | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonOfferSubjectId?: string | null;
  readonly lessonOfferLessonStudentId?: string | null;
  readonly lessonOfferLessonTeacherId?: string | null;
}

type LazyLessonOffer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonOffer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Subject: AsyncItem<Subject | undefined>;
  readonly address?: string | null;
  readonly locationRadius?: number | null;
  readonly place?: string | null;
  readonly days?: (string | null)[] | null;
  readonly hours?: (string | null)[] | null;
  readonly Homework: AsyncCollection<Homework>;
  readonly ownerCognitoID?: string | null;
  readonly city?: string | null;
  readonly LessonStudent: AsyncItem<LessonStudent | undefined>;
  readonly LessonTeacher: AsyncItem<LessonTeacher | undefined>;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonOfferSubjectId?: string | null;
  readonly lessonOfferLessonStudentId?: string | null;
  readonly lessonOfferLessonTeacherId?: string | null;
}

export declare type LessonOffer = LazyLoading extends LazyLoadingDisabled ? EagerLessonOffer : LazyLessonOffer

export declare const LessonOffer: (new (init: ModelInit<LessonOffer>) => LessonOffer) & {
  copyOf(source: LessonOffer, mutator: (draft: MutableModel<LessonOffer>) => MutableModel<LessonOffer> | void): LessonOffer;
}

type EagerSubject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly School?: School | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly subjectSchoolId?: string | null;
}

type LazySubject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly School: AsyncItem<School | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly subjectSchoolId?: string | null;
}

export declare type Subject = LazyLoading extends LazyLoadingDisabled ? EagerSubject : LazySubject

export declare const Subject: (new (init: ModelInit<Subject>) => Subject) & {
  copyOf(source: Subject, mutator: (draft: MutableModel<Subject>) => MutableModel<Subject> | void): Subject;
}

type EagerSchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type School = LazyLoading extends LazyLoadingDisabled ? EagerSchool : LazySchool

export declare const School: (new (init: ModelInit<School>) => School) & {
  copyOf(source: School, mutator: (draft: MutableModel<School>) => MutableModel<School> | void): School;
}