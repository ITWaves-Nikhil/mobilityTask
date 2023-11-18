import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.users = {
        ...state.users,
        [action.payload.email]: action.payload,
      };
    },
  },
});

export const {addUser} = userSlice.actions;
export const selectUser = state => state.user.user;
export default userSlice.reducer;
