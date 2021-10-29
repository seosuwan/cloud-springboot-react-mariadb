import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user';

const userJoinPage = async(x) => {
  const res = await userAPI.userJoin(x)
  return res.data
}
const userDetailPage = async(x) => {
 const res = await userAPI.userDetail(x)
 return res.data
}
const userListPage = async() => {
 const res = await userAPI.userList()
 return res.data
}
const userLoginPage = async(x) => {
 const res = await userAPI.userLogin(x) 
 return res.data
}
const userModifyPage = async(x) => {
 const res = await userAPI.userModify(x)
 return res.data
}
const userRemovePage = async(x) => {
 const res = await userAPI.userRemove(x)
 return res.data
}

export const joinPage = createAsyncThunk('userJoin', userJoinPage)
export const detailPage = createAsyncThunk('userDtail', userDetailPage)
export const listPage = createAsyncThunk('userList', userListPage)
export const loginPage = createAsyncThunk('userLogin', userLoginPage)
export const modifyPage = createAsyncThunk('userModify', userModifyPage)
export const removePage = createAsyncThunk('userRemove', userRemovePage)

const userSlice = createSlice({//덕스패턴 변수와메서드를 보고 객체의 타입을 결정한다.
 name: 'users',
 initialState: {
   userState: {
     username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
   },
   type: '',
   keyword: '',
   params: {}
 },
 reducers: {},
 extraReducers: {
   [joinPage.fulfilled]: ( state, action ) => { state.userState = action.payload },
   [detailPage.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload},
   [listPage.fulfilled]: ( state, {meta, payload} ) => { state.pageResult = payload },
   [loginPage.fulfilled]: ( state, {meta, payload} ) => {
     state.userState = payload
     window.localStorage.setItem('sessionUser', JSON.stringify(payload))
   },
   [modifyPage.fulfilled]: ( state, action ) => { 
     state.userState = action.payload 
     window.localStorage.setItem('sessionUser', JSON.stringify(action.payload))
   },
   [removePage.fulfilled]: ( state, {meta, payload }) => { 
     state.userState = payload
     window.localStorage.setItem('sessionUser', '')
   }
 }

})
export const currentUserState = state => state.users.userState
export const currentUserParam = state => state.users.param
export default userSlice.reducer;

