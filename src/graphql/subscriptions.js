/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onCreateUserInfo(filter: $filter) {
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
export const onUpdateUserInfo = /* GraphQL */ `
  subscription OnUpdateUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onUpdateUserInfo(filter: $filter) {
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
export const onDeleteUserInfo = /* GraphQL */ `
  subscription OnDeleteUserInfo($filter: ModelSubscriptionUserInfoFilterInput) {
    onDeleteUserInfo(filter: $filter) {
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
export const onCreateLessonOfferUserInfo = /* GraphQL */ `
  subscription OnCreateLessonOfferUserInfo(
    $filter: ModelSubscriptionLessonOfferUserInfoFilterInput
    $owner: String
  ) {
    onCreateLessonOfferUserInfo(filter: $filter, owner: $owner) {
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
export const onUpdateLessonOfferUserInfo = /* GraphQL */ `
  subscription OnUpdateLessonOfferUserInfo(
    $filter: ModelSubscriptionLessonOfferUserInfoFilterInput
    $owner: String
  ) {
    onUpdateLessonOfferUserInfo(filter: $filter, owner: $owner) {
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
export const onDeleteLessonOfferUserInfo = /* GraphQL */ `
  subscription OnDeleteLessonOfferUserInfo(
    $filter: ModelSubscriptionLessonOfferUserInfoFilterInput
    $owner: String
  ) {
    onDeleteLessonOfferUserInfo(filter: $filter, owner: $owner) {
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
