/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
      id
      createdAt
      message
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
      updatedAt
      chatMessageUserInfoId
    }
  }
`;
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
      id
      createdAt
      message
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
      updatedAt
      chatMessageUserInfoId
    }
  }
`;
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
      id
      createdAt
      message
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
      updatedAt
      chatMessageUserInfoId
    }
  }
`;
export const createLessonCandidate = /* GraphQL */ `
  mutation CreateLessonCandidate(
    $input: CreateLessonCandidateInput!
    $condition: ModelLessonCandidateConditionInput
  ) {
    createLessonCandidate(input: $input, condition: $condition) {
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
export const updateLessonCandidate = /* GraphQL */ `
  mutation UpdateLessonCandidate(
    $input: UpdateLessonCandidateInput!
    $condition: ModelLessonCandidateConditionInput
  ) {
    updateLessonCandidate(input: $input, condition: $condition) {
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
export const deleteLessonCandidate = /* GraphQL */ `
  mutation DeleteLessonCandidate(
    $input: DeleteLessonCandidateInput!
    $condition: ModelLessonCandidateConditionInput
  ) {
    deleteLessonCandidate(input: $input, condition: $condition) {
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
export const createLessonStudent = /* GraphQL */ `
  mutation CreateLessonStudent(
    $input: CreateLessonStudentInput!
    $condition: ModelLessonStudentConditionInput
  ) {
    createLessonStudent(input: $input, condition: $condition) {
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
export const updateLessonStudent = /* GraphQL */ `
  mutation UpdateLessonStudent(
    $input: UpdateLessonStudentInput!
    $condition: ModelLessonStudentConditionInput
  ) {
    updateLessonStudent(input: $input, condition: $condition) {
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
export const deleteLessonStudent = /* GraphQL */ `
  mutation DeleteLessonStudent(
    $input: DeleteLessonStudentInput!
    $condition: ModelLessonStudentConditionInput
  ) {
    deleteLessonStudent(input: $input, condition: $condition) {
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
export const createLessonTeacher = /* GraphQL */ `
  mutation CreateLessonTeacher(
    $input: CreateLessonTeacherInput!
    $condition: ModelLessonTeacherConditionInput
  ) {
    createLessonTeacher(input: $input, condition: $condition) {
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
export const updateLessonTeacher = /* GraphQL */ `
  mutation UpdateLessonTeacher(
    $input: UpdateLessonTeacherInput!
    $condition: ModelLessonTeacherConditionInput
  ) {
    updateLessonTeacher(input: $input, condition: $condition) {
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
export const deleteLessonTeacher = /* GraphQL */ `
  mutation DeleteLessonTeacher(
    $input: DeleteLessonTeacherInput!
    $condition: ModelLessonTeacherConditionInput
  ) {
    deleteLessonTeacher(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      ChatMessages {
        items {
          id
          createdAt
          message
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
          updatedAt
          chatMessageUserInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
      lessonOfferSubjectId
      lessonOfferLessonStudentId
      lessonOfferLessonTeacherId
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
      ChatMessages {
        items {
          id
          createdAt
          message
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
          updatedAt
          chatMessageUserInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
      lessonOfferSubjectId
      lessonOfferLessonStudentId
      lessonOfferLessonTeacherId
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
      ChatMessages {
        items {
          id
          createdAt
          message
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
          updatedAt
          chatMessageUserInfoId
        }
        nextToken
      }
      createdAt
      updatedAt
      lessonOfferSubjectId
      lessonOfferLessonStudentId
      lessonOfferLessonTeacherId
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
        owner
      }
      createdAt
      updatedAt
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
        owner
      }
      createdAt
      updatedAt
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
        owner
      }
      createdAt
      updatedAt
      subjectSchoolId
      owner
    }
  }
`;
