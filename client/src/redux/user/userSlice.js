
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};


//userSlice is just a manager that manages everything related to the user.
//one slice = one topic. userSlice only cares about user stuff.
const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },


    //state  = current data sitting in your store RIGHT NOW
         //{ currentUser: null, loading: true, error: null }

    //action = the new data coming IN from your component
         //{ payload: { username: "ahmed", email: "ahmed@gmail.com" } }



    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
     deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
}
});

/*

Ahmed clicks Sign In
        ↓
dispatch(signInStart())
        ↓
Store: { loading: true }  →  spinner shows ⏳
        ↓
API call runs...
        ↓
   ✅ Success?                    ❌ Failed?
        ↓                               ↓
dispatch(signInSuccess(data))   dispatch(signInFailure(msg))
        ↓                               ↓
Store: {                        Store: {
  currentUser: ahmed,             currentUser: null,
  loading: false                  loading: false,
}                                 error: "Wrong password"
        ↓                               ↓
Avatar in Navbar ✅             Red error message ❌

*/

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,

} = userSlice.actions;

export default userSlice.reducer;



