/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLessonStudent = /* GraphQL */ `
  subscription OnCreateLessonStudent(
    $filter: ModelSubscriptionLessonStudentFilterInput
  ) {
    onCreateLessonStudent(filter: $filter) {
      id
      UserInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonStudentUserInfoId
    }
  }
`;
export const onUpdateLessonStudent = /* GraphQL */ `
  subscription OnUpdateLessonStudent(
    $filter: ModelSubscriptionLessonStudentFilterInput
  ) {
    onUpdateLessonStudent(filter: $filter) {
      id
      UserInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonStudentUserInfoId
    }
  }
`;
export const onDeleteLessonStudent = /* GraphQL */ `
  subscription OnDeleteLessonStudent(
    $filter: ModelSubscriptionLessonStudentFilterInput
  ) {
    onDeleteLessonStudent(filter: $filter) {
      id
      UserInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonStudentUserInfoId
    }
  }
`;
export const onCreateLessonTeacher = /* GraphQL */ `
  subscription OnCreateLessonTeacher(
    $filter: ModelSubscriptionLessonTeacherFilterInput
  ) {
    onCreateLessonTeacher(filter: $filter) {
      id
      UserInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTeacherUserInfoId
    }
  }
`;
export const onUpdateLessonTeacher = /* GraphQL */ `
  subscription OnUpdateLessonTeacher(
    $filter: ModelSubscriptionLessonTeacherFilterInput
  ) {
    onUpdateLessonTeacher(filter: $filter) {
      id
      UserInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTeacherUserInfoId
    }
  }
`;
export const onDeleteLessonTeacher = /* GraphQL */ `
  subscription OnDeleteLessonTeacher(
    $filter: ModelSubscriptionLessonTeacherFilterInput
  ) {
    onDeleteLessonTeacher(filter: $filter) {
      id
      UserInfo {
        id
        name
        address
        picture
        phone_number
        cognitoID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonTeacherUserInfoId
    }
  }
`;
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onCreateUserInfo(filter: $filter) {
      id
      name
      address
      picture
      phone_number
      cognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onUpdateUserInfo(filter: $filter) {
      id
      name
      address
      picture
      phone_number
      cognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onDeleteUserInfo(filter: $filter) {
      id
      name
      address
      picture
      phone_number
      cognitoID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateHomework = /* GraphQL */ `
  subscription OnCreateHomework(
    $filter: ModelSubscriptionHomeworkFilterInput
    $owner: String
  ) {
    onCreateHomework(filter: $filter, owner: $owner) {
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
export const onUpdateHomework = /* GraphQL */ `
  subscription OnUpdateHomework(
    $filter: ModelSubscriptionHomeworkFilterInput
    $owner: String
  ) {
    onUpdateHomework(filter: $filter, owner: $owner) {
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
export const onDeleteHomework = /* GraphQL */ `
  subscription OnDeleteHomework(
    $filter: ModelSubscriptionHomeworkFilterInput
    $owner: String
  ) {
    onDeleteHomework(filter: $filter, owner: $owner) {
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
export const onCreateLessonOffer = /* GraphQL */ `
  subscription OnCreateLessonOffer(
    $filter: ModelSubscriptionLessonOfferFilterInput
    $owner: String
  ) {
    onCreateLessonOffer(filter: $filter, owner: $owner) {
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
      address
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
      ownerCognitoID
      city
      LessonStudent {
        id
        UserInfo {
          id
          name
          address
          picture
          phone_number
          cognitoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonStudentUserInfoId
      }
      LessonTeacher {
        id
        UserInfo {
          id
          name
          address
          picture
          phone_number
          cognitoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonTeacherUserInfoId
      }
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonOfferSubjectId
      lessonOfferLessonStudentId
      lessonOfferLessonTeacherId
      owner
    }
  }
`;
export const onUpdateLessonOffer = /* GraphQL */ `
  subscription OnUpdateLessonOffer(
    $filter: ModelSubscriptionLessonOfferFilterInput
    $owner: String
  ) {
    onUpdateLessonOffer(filter: $filter, owner: $owner) {
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
      address
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
      ownerCognitoID
      city
      LessonStudent {
        id
        UserInfo {
          id
          name
          address
          picture
          phone_number
          cognitoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonStudentUserInfoId
      }
      LessonTeacher {
        id
        UserInfo {
          id
          name
          address
          picture
          phone_number
          cognitoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonTeacherUserInfoId
      }
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonOfferSubjectId
      lessonOfferLessonStudentId
      lessonOfferLessonTeacherId
      owner
    }
  }
`;
export const onDeleteLessonOffer = /* GraphQL */ `
  subscription OnDeleteLessonOffer(
    $filter: ModelSubscriptionLessonOfferFilterInput
    $owner: String
  ) {
    onDeleteLessonOffer(filter: $filter, owner: $owner) {
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
      address
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
      ownerCognitoID
      city
      LessonStudent {
        id
        UserInfo {
          id
          name
          address
          picture
          phone_number
          cognitoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonStudentUserInfoId
      }
      LessonTeacher {
        id
        UserInfo {
          id
          name
          address
          picture
          phone_number
          cognitoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonTeacherUserInfoId
      }
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonOfferSubjectId
      lessonOfferLessonStudentId
      lessonOfferLessonTeacherId
      owner
    }
  }
`;
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool(
    $filter: ModelSubscriptionSchoolFilterInput
    $owner: String
  ) {
    onCreateSchool(filter: $filter, owner: $owner) {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool(
    $filter: ModelSubscriptionSchoolFilterInput
    $owner: String
  ) {
    onUpdateSchool(filter: $filter, owner: $owner) {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool(
    $filter: ModelSubscriptionSchoolFilterInput
    $owner: String
  ) {
    onDeleteSchool(filter: $filter, owner: $owner) {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject(
    $filter: ModelSubscriptionSubjectFilterInput
    $owner: String
  ) {
    onCreateSubject(filter: $filter, owner: $owner) {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject(
    $filter: ModelSubscriptionSubjectFilterInput
    $owner: String
  ) {
    onUpdateSubject(filter: $filter, owner: $owner) {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject(
    $filter: ModelSubscriptionSubjectFilterInput
    $owner: String
  ) {
    onDeleteSubject(filter: $filter, owner: $owner) {
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
