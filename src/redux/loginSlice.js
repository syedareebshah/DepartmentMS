import { createAsyncThunk ,createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store'

// Define a type for the slice state
// interface LoginState {
//   isLoggedIn: boolean,
// }

//Define the initial state using that type

const initialState = {
    isLoggedIn: false
}

export const loginSlice = createSlice({
    name: 'login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginFlag: (state, action) => {
      state.isLoggedIn = action.payload
      console.log(state.isLoggedIn,"here")  
    },
    
  },
})

export const { loginFlag } = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLoginFlag = (state) => state.login.isLoggedIn

export default loginSlice.reducer