/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
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
export const getLessonOfferUserInfo = /* GraphQL */ `
  query GetLessonOfferUserInfo($id: ID!) {
    getLessonOfferUserInfo(id: $id) {
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
export const listLessonOfferUserInfos = /* GraphQL */ `
  query ListLessonOfferUserInfos(
    $filter: ModelLessonOfferUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonOfferUserInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        lessonOffer {
          id
          location
          locationRadius
          place
          days
          hours
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
      nextToken
      startedAt
    }
  }
`;
export const syncLessonOfferUserInfos = /* GraphQL */ `
  query SyncLessonOfferUserInfos(
    $filter: ModelLessonOfferUserInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonOfferUserInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        lessonOffer {
          id
          location
          locationRadius
          place
          days
          hours
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
      nextToken
      startedAt
    }
  }
`;
export const lessonOfferUserInfosByUserInfoId = /* GraphQL */ `
  query LessonOfferUserInfosByUserInfoId(
    $userInfoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonOfferUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonOfferUserInfosByUserInfoId(
      userInfoId: $userInfoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        lessonOffer {
          id
          location
          locationRadius
          place
          days
          hours
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
      nextToken
      startedAt
    }
  }
`;
export const lessonOfferUserInfosByLessonOfferId = /* GraphQL */ `
  query LessonOfferUserInfosByLessonOfferId(
    $lessonOfferId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonOfferUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonOfferUserInfosByLessonOfferId(
      lessonOfferId: $lessonOfferId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        lessonOffer {
          id
          location
          locationRadius
          place
          days
          hours
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
      nextToken
      startedAt
    }
  }
`;
