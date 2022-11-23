import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





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