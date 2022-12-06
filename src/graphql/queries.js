/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLessonStudent = /* GraphQL */ `
  query GetLessonStudent($id: ID!) {
    getLessonStudent(id: $id) {
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
export const listLessonStudents = /* GraphQL */ `
  query ListLessonStudents(
    $filter: ModelLessonStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLessonStudents = /* GraphQL */ `
  query SyncLessonStudents(
    $filter: ModelLessonStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLessonTeacher = /* GraphQL */ `
  query GetLessonTeacher($id: ID!) {
    getLessonTeacher(id: $id) {
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
export const listLessonTeachers = /* GraphQL */ `
  query ListLessonTeachers(
    $filter: ModelLessonTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLessonTeachers = /* GraphQL */ `
  query SyncLessonTeachers(
    $filter: ModelLessonTeacherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonTeachers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
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
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserInfos = /* GraphQL */ `
  query SyncUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getHomework = /* GraphQL */ `
  query GetHomework($id: ID!) {
    getHomework(id: $id) {
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
export const listHomework = /* GraphQL */ `
  query ListHomework(
    $filter: ModelHomeworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomework(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncHomework = /* GraphQL */ `
  query SyncHomework(
    $filter: ModelHomeworkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomework(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const homeworkByLessonofferID = /* GraphQL */ `
  query HomeworkByLessonofferID(
    $lessonofferID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHomeworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    homeworkByLessonofferID(
      lessonofferID: $lessonofferID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getLessonOffer = /* GraphQL */ `
  query GetLessonOffer($id: ID!) {
    getLessonOffer(id: $id) {
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
export const listLessonOffers = /* GraphQL */ `
  query ListLessonOffers(
    $filter: ModelLessonOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        address
        locationRadius
        place
        days
        hours
        Homework {
          nextToken
          startedAt
        }
        ownerCognitoID
        city
        LessonStudent {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonStudentUserInfoId
          UserInfo {
            address
            cognitoID
            id
            name
            phone_number
            picture
          }
        }
        LessonTeacher {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTeacherUserInfoId
          UserInfo {
            address
            cognitoID
            id
            name
            phone_number
            picture
          }
        }
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
      nextToken
      startedAt
    }
  }
`;
export const syncLessonOffers = /* GraphQL */ `
  query SyncLessonOffers(
    $filter: ModelLessonOfferFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonOffers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        address
        locationRadius
        place
        days
        hours
        Homework {
          nextToken
          startedAt
        }
        ownerCognitoID
        city
        LessonStudent {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonStudentUserInfoId
        }
        LessonTeacher {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonTeacherUserInfoId
        }
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
      nextToken
      startedAt
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
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
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
  }
`;
export const syncSchools = /* GraphQL */ `
  query SyncSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
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
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSubjects = /* GraphQL */ `
  query SyncSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
