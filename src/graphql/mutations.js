/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
      id
      name
      address
      picture
      phone_number
      cognitoID
      lessonoffers {
        items {
          id
          userInfoId
          lessonOfferId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
      id
      name
      address
      picture
      phone_number
      cognitoID
      lessonoffers {
        items {
          id
          userInfoId
          lessonOfferId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
      id
      name
      address
      picture
      phone_number
      cognitoID
      lessonoffers {
        items {
          id
          userInfoId
          lessonOfferId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createHomework = /* GraphQL */ `
  mutation CreateHomework(
    $input: CreateHomeworkInput!
    $condition: ModelHomeworkConditionInput
  ) {
    createHomework(input: $input, condition: $condition) {
      id
      date
      description
      lessonofferID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateHomework = /* GraphQL */ `
  mutation UpdateHomework(
    $input: UpdateHomeworkInput!
    $condition: ModelHomeworkConditionInput
  ) {
    updateHomework(input: $input, condition: $condition) {
      id
      date
      description
      lessonofferID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteHomework = /* GraphQL */ `
  mutation DeleteHomework(
    $input: DeleteHomeworkInput!
    $condition: ModelHomeworkConditionInput
  ) {
    deleteHomework(input: $input, condition: $condition) {
      id
      date
      description
      lessonofferID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createLessonOffer = /* GraphQL */ `
  mutation CreateLessonOffer(
    $input: CreateLessonOfferInput!
    $condition: ModelLessonOfferConditionInput
  ) {
    createLessonOffer(input: $input, condition: $condition) {
      id
      Subject {
        id
        name
        School {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        subjectSchoolId
        owner
      }
      location
      locationRadius
      place
      days
      hours
      Homework {
        items {
          id
          date
          description
          lessonofferID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      UserInfos {
        items {
          id
          userInfoId
          lessonOfferId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ownerCognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonOfferSubjectId
      owner
    }
  }
`;
export const updateLessonOffer = /* GraphQL */ `
  mutation UpdateLessonOffer(
    $input: UpdateLessonOfferInput!
    $condition: ModelLessonOfferConditionInput
  ) {
    updateLessonOffer(input: $input, condition: $condition) {
      id
      Subject {
        id
        name
        School {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        subjectSchoolId
        owner
      }
      location
      locationRadius
      place
      days
      hours
      Homework {
        items {
          id
          date
          description
          lessonofferID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      UserInfos {
        items {
          id
          userInfoId
          lessonOfferId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ownerCognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonOfferSubjectId
      owner
    }
  }
`;
export const deleteLessonOffer = /* GraphQL */ `
  mutation DeleteLessonOffer(
    $input: DeleteLessonOfferInput!
    $condition: ModelLessonOfferConditionInput
  ) {
    deleteLessonOffer(input: $input, condition: $condition) {
      id
      Subject {
        id
        name
        School {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        subjectSchoolId
        owner
      }
      location
      locationRadius
      place
      days
      hours
      Homework {
        items {
          id
          date
          description
          lessonofferID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      UserInfos {
        items {
          id
          userInfoId
          lessonOfferId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      ownerCognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonOfferSubjectId
      owner
    }
  }
`;
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
      id
      name
      School {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      subjectSchoolId
      owner
    }
  }
`;
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
      id
      name
      School {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      subjectSchoolId
      owner
    }
  }
`;
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
      id
      name
      School {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      subjectSchoolId
      owner
    }
  }
`;
export const createLessonOfferUserInfo = /* GraphQL */ `
  mutation CreateLessonOfferUserInfo(
    $input: CreateLessonOfferUserInfoInput!
    $condition: ModelLessonOfferUserInfoConditionInput
  ) {
    createLessonOfferUserInfo(input: $input, condition: $condition) {
      id
      userInfoId
      lessonOfferId
      userInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        lessonoffers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lessonOffer {
        id
        Subject {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          subjectSchoolId
          owner
        }
        location
        locationRadius
        place
        days
        hours
        Homework {
          nextToken
          startedAt
        }
        UserInfos {
          nextToken
          startedAt
        }
        ownerCognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonOfferSubjectId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateLessonOfferUserInfo = /* GraphQL */ `
  mutation UpdateLessonOfferUserInfo(
    $input: UpdateLessonOfferUserInfoInput!
    $condition: ModelLessonOfferUserInfoConditionInput
  ) {
    updateLessonOfferUserInfo(input: $input, condition: $condition) {
      id
      userInfoId
      lessonOfferId
      userInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        lessonoffers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lessonOffer {
        id
        Subject {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          subjectSchoolId
          owner
        }
        location
        locationRadius
        place
        days
        hours
        Homework {
          nextToken
          startedAt
        }
        UserInfos {
          nextToken
          startedAt
        }
        ownerCognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonOfferSubjectId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteLessonOfferUserInfo = /* GraphQL */ `
  mutation DeleteLessonOfferUserInfo(
    $input: DeleteLessonOfferUserInfoInput!
    $condition: ModelLessonOfferUserInfoConditionInput
  ) {
    deleteLessonOfferUserInfo(input: $input, condition: $condition) {
      id
      userInfoId
      lessonOfferId
      userInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        lessonoffers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      lessonOffer {
        id
        Subject {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          subjectSchoolId
          owner
        }
        location
        locationRadius
        place
        days
        hours
        Homework {
          nextToken
          startedAt
        }
        UserInfos {
          nextToken
          startedAt
        }
        ownerCognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonOfferSubjectId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
