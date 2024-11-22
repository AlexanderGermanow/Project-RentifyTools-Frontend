import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

import { registerUser } from 'store/redux/signUpSlice/signUpSlice'
import { signInOutSlice } from 'store/redux/signInSlice/signInSlice'
import { toolSlice } from './redux/ToolSlice/toolSlice'
// import { userSlice } from 'store/redux/userSlice/userSlice'

const rootReducer = combineSlices(registerUser, signInOutSlice, toolSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  })
  return store
}

export const store = makeStore()
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
