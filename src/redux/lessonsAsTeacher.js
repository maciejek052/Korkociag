import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API, graphqlOperation } from 'aws-amplify'
import { LessonOffer } from '../models'
import * as queries from '../graphql/queries'

export const fetchLessonsAsTeacher = createAsyncThunk(
    'fetchLessonsAsTeacher',
    async (userID) => {
        const lessonQuery = await API.graphql(
            graphqlOperation(queries.listLessonTeachers, {lessonTeacherUserInfoId: userID})
        ); 
        console.log("REDUX: lessons as teacher fetched")
        // console.log(lessonQuery)
        return lessonQuery; 
    }
)

export const lessonsAsTeacherSlice = createSlice({
    name: 'lessonsAsTeacher',
    initialState: {
        lesson: '',
        loading: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchLessonsAsTeacher.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchLessonsAsTeacher.fulfilled, (state, action) => {
            state.lesson = action.payload // change to array and push
            state.loading = false
        })
        builder.addCase(fetchLessonsAsTeacher.rejected, state => {
            state.loading = false
        })
    }
})
export const selectLessonsAsTeacher = (state) => state.lessonsAsTeacher.lesson
export default lessonsAsTeacherSlice.reducer