import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Auth } from 'aws-amplify'


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = Auth.currentUserInfo()
        return response
    }
)

export const userInformationSlice = createSlice({
    name: 'userInformation',
    initialState: {
        user: '',
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload // change to array and push
            state.loading = false
        })
        builder.addCase(fetchUser.rejected, state => {
            state.loading = false
        })
    }
})
export default userInformationSlice.reducer

/*
export const userInformationSlice = createSlice({
    name: 'userInformation',
    initialState: {
        name: 'przed zmiana',
        avatar: '',
        userObject: undefined
    },
    reducers: {
        name: (state, action) => {
            state.name = action.payload
        },
        avatar: (state, action) => {
            state.avatar = action.payload
        },
        userObject: (state, action) => {
            state.userObject = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { name, avatar, userObject } = userInformationSlice.actions

export default userInformationSlice.reducer
*/
