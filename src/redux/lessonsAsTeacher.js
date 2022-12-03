import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DataStore } from 'aws-amplify'
import { LessonOffer } from '../models'

export const fetchLessonsAsTeacher = createAsyncThunk(
    'fetchLessonsAsTeacher',
    async () => {
        const response = await DataStore.query(LessonOffer)
        console.log("REDUX: lessons as teacher fetched")
        return (JSON.stringify(response))
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