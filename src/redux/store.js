import { configureStore } from "@reduxjs/toolkit";
import userInformationReducer from './userInformation'
import lessonAsTeacherReducer from './lessonsAsTeacher'

export const store = configureStore({
    reducer: {
        userInformation: userInformationReducer,
        lessonsAsTeacher: lessonAsTeacherReducer
    }
})