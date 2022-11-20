import { configureStore } from "@reduxjs/toolkit";
import userInformationReducer from './userInformation'

export const store = configureStore({
    reducer: {
        userInformation: userInformationReducer
    }
})