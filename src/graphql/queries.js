/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLessonCandidate = /* GraphQL */ `
  query GetLessonCandidate($id: ID!) {
    getLessonCandidate(id: $id) {
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
      }
      lessonofferID
      studentAddress
      createdAt
      updatedAt
      lessonCandidateUserInfoId
    }
  }
`;
export const listLessonCandidates = /* GraphQL */ `
  query ListLessonCandidates(
    $filter: ModelLessonCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonCandidates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        }
        lessonofferID
        studentAddress
        createdAt
        updatedAt
        lessonCandidateUserInfoId
      }
      nextToken
    }
  }
`;
export const lessonCandidatesByLessonofferID = /* GraphQL */ `
  query LessonCandidatesByLessonofferID(
    $lessonofferID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLessonCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lessonCandidatesByLessonofferID(
      lessonofferID: $lessonofferID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        }
        lessonofferID
        studentAddress
        createdAt
        updatedAt
        lessonCandidateUserInfoId
      }
      nextToken
    }
  }
`;
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
      }
      studentAddress
      createdAt
      updatedAt
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
        }
        studentAddress
        createdAt
        updatedAt
        lessonStudentUserInfoId
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
        lessonTeacherUserInfoId
      }
      nextToken
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
      }
      nextToken
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
        owner
      }
      nextToken
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
        owner
      }
      nextToken
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
          owner
        }
        createdAt
        updatedAt
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
          owner
        }
        nextToken
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
        }
        studentAddress
        createdAt
        updatedAt
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
        }
        createdAt
        updatedAt
        lessonTeacherUserInfoId
      }
      price
      LessonCandidates {
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
          }
          lessonofferID
          studentAddress
          createdAt
          updatedAt
          lessonCandidateUserInfoId
        }
        nextToken
      }
      studentAddress
      createdAt
      updatedAt
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
          School {
            id
            name
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
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
            owner
          }
          nextToken
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
          }
          studentAddress
          createdAt
          updatedAt
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
          }
          createdAt
          updatedAt
          lessonTeacherUserInfoId
        }
        price
        LessonCandidates {
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
            }
            lessonofferID
            studentAddress
            createdAt
            updatedAt
            lessonCandidateUserInfoId
          }
          nextToken
        }
        studentAddress
        createdAt
        updatedAt
        lessonOfferSubjectId
        lessonOfferLessonStudentId
        lessonOfferLessonTeacherId
        owner
      }
      nextToken
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
        owner
      }
      nextToken
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
        owner
      }
      createdAt
      updatedAt
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
          owner
        }
        createdAt
        updatedAt
        subjectSchoolId
        owner
      }
      nextToken
    }
  }
`;
