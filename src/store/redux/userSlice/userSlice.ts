import { createAppSlice } from 'store/createAppSlice'

import { UserRequestDto, UserResponseDto, UserInitialState } from './types'
import { error } from 'console'

const userDataInitialState: UserInitialState = {
  userObj: undefined,
  isLoading: false,
  error: undefined,
}

export const userSlice = createAppSlice({
  name: 'REGISTER_USER',
  initialState: userDataInitialState,
  reducers: create => ({
    createUser: create.asyncThunk(
      async (userData: UserRequestDto, { rejectWithValue }) => {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        })

        const result = await response.json()
        if (!response.ok) {
          return rejectWithValue(result.message || 'Failed to register user')
        }
        return result
      },
      {
        pending: (state: UserInitialState) => {
          state.userObj = undefined
          state.error = undefined
          state.isLoading = true
        },
        fulfilled: (state: UserInitialState, action) => {
          state.isLoading = false
          state.userObj = action.payload
        },
        rejected: (state: UserInitialState, action) => {
          state.isLoading = false
          state.error = action.payload as string
        },
      },
    ),

    updateUser: create.asyncThunk(
      async (userData: UserRequestDto, { rejectWithValue }) => {
        const response = await fetch('/api/users/{userId}', {
          method: 'PUT',
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })

        const result = await response.json()
        if (!response.ok) {
          return rejectWithValue(result.message || 'Failed to update user data')
        }
        return result
      },
      {
        pending: (state: UserInitialState) => {
          state.isLoading = true
          state.error = undefined
        },
        fulfilled: (state: UserInitialState, action) => {
          state.isLoading = false
          state.userObj = action.payload
        },
        rejected: (state: UserInitialState, action) => {
          state.isLoading = false
          state.error = action.payload as string
        },
      },
    ),

    deleteUser: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        const response = await fetch('/api/users/{userId}', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          },
          method: 'DELETE',
        })

        if (!response.ok) {
          const result = await response.json()
          return rejectWithValue(result.message || 'Failed to delete user')
        }
        return 'User deleted successfully'
      },
      {
        pending: (state: UserInitialState) => {
          state.isLoading = true
          state.error = undefined
        },
        fulfilled: (state: UserInitialState) => {
          state.isLoading = false
          state.userObj = undefined
          state.error = undefined
        },
        rejected: (state: UserInitialState, action) => {
          state.isLoading = false
          state.error = action.payload as string
        },
      },
    ),
  }),
  selectors: {
    user_data: (state: UserInitialState) => ({
      userObj: state.userObj,
      isLoading: state.isLoading,
      error: state.error,
    }),
  },
})

export const userSliceAction = userSlice.actions
export const userSliceSelectors = userSlice.selectors
