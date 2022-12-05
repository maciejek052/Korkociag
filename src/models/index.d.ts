import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





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
  readonly lessonoffers?: (LessonOfferUserInfo | null)[] | null;
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
  readonly lessonoffers: AsyncCollection<LessonOfferUserInfo>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo>) => UserInfo) & {
  copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo>) => MutableModel<UserInfo> | void): UserInfo;
}

type EagerLessonOffer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonOffer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Subject?: Subject | null;
  readonly location?: string | null;
  readonly locationRadius?: number | null;
  readonly place?: (string | null)[] | null;
  readonly days?: (string | null)[] | null;
  readonly hours?: (string | null)[] | null;
  readonly Homework?: (Homework | null)[] | null;
  readonly UserInfos?: (LessonOfferUserInfo | null)[] | null;
  readonly ownerCognitoID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonOfferSubjectId?: string | null;
}

type LazyLessonOffer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonOffer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Subject: AsyncItem<Subject | undefined>;
  readonly location?: string | null;
  readonly locationRadius?: number | null;
  readonly place?: (string | null)[] | null;
  readonly days?: (string | null)[] | null;
  readonly hours?: (string | null)[] | null;
  readonly Homework: AsyncCollection<Homework>;
  readonly UserInfos: AsyncCollection<LessonOfferUserInfo>;
  readonly ownerCognitoID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonOfferSubjectId?: string | null;
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

type EagerLessonOfferUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonOfferUserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userInfoId?: string | null;
  readonly lessonOfferId?: string | null;
  readonly userInfo: UserInfo;
  readonly lessonOffer: LessonOffer;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLessonOfferUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonOfferUserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userInfoId?: string | null;
  readonly lessonOfferId?: string | null;
  readonly userInfo: AsyncItem<UserInfo>;
  readonly lessonOffer: AsyncItem<LessonOffer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LessonOfferUserInfo = LazyLoading extends LazyLoadingDisabled ? EagerLessonOfferUserInfo : LazyLessonOfferUserInfo

export declare const LessonOfferUserInfo: (new (init: ModelInit<LessonOfferUserInfo>) => LessonOfferUserInfo) & {
  copyOf(source: LessonOfferUserInfo, mutator: (draft: MutableModel<LessonOfferUserInfo>) => MutableModel<LessonOfferUserInfo> | void): LessonOfferUserInfo;
}