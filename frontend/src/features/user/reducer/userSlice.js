import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user';

const userJoinPage = async (x) => {
   const res = await userAPI.userJoin(x)
   return res.data
}
const userDetailPage = async (x) => {
  const res = await userAPI.userDetail(x)
  return res.data
}
const userListPage = async ({page}) => {
  const res = await userAPI.userList(page)
  return res.data
}
const userLoginPage = async (x) => {
  const res = await userAPI.userLogin(x) 
  return res.data
}
const userModifyPage = async (x) => {
  const res = await userAPI.userModify(x)
  return res.data
}
const userRemovePage = async (x) => {
  const res = await userAPI.userRemove(x)
  return res.data
}
const EXIST = async (x) => {
  const res = await userAPI.exist(x)
  return res.data
}

export const joinPage = createAsyncThunk('users/join', userJoinPage)
export const detailPage = createAsyncThunk('users/dtail', userDetailPage)
export const listPage = createAsyncThunk('users/list', userListPage)
export const loginPage = createAsyncThunk('users/login', userLoginPage)
export const modifyPage = createAsyncThunk('users/modify', userModifyPage)
export const removePage = createAsyncThunk('users/remove', userRemovePage)
export const exist = createAsyncThunk('users/exist', EXIST)

const changeNull = ls =>{
  for(const i of ls ){
    document.getElementById(i).value = ''
  }
}
const userSlice = createSlice({
  name: 'users',//내 집에서 부르는 이름!
  //store = initialstate
  initialState: {
    userState: {
      username:'', password:'', email:'', name:'', regDate: ''
    },
    usersState : [],
    type: '',
    keyword: '',
    params: {}
  },
  reducers: {},
  extraReducers: {
    [joinPage.fulfilled]: ( state, action ) => { 
      state.userState = action.payload 
      window.location.href = `/users/login`
    },
    [exist.fulfilled]: ( state, action ) => { 
      if(action.payload){window.location.href='/users/add'}
      else{ alert(`사용가능함`) }
    },
    [detailPage.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload},
    [listPage.fulfilled]: ( state, {meta, payload} ) => { state.usersState = payload },
    [loginPage.fulfilled]: ( state, {meta, payload} ) => {
      state.userState = payload
      window.localStorage.setItem('sessionUser', JSON.stringify(payload))
      if(payload.username != null){
        alert(`${payload.name}님 환영합니다`)
        window.location.href = `/users/detail`
      }else{
        alert('아이디, 비번 오류로 로그인 실패  ')
        changeNull(['username','password'])
      }
    },
    [modifyPage.fulfilled]: ( state, action ) => { 
      localStorage.setItem('sessionUser', JSON.stringify(action.payload))
      window.location.href = "/users/detail"
    },
    [removePage.fulfilled]: () => { 
      window.localStorage.removeItem("sessionUser"); 
      window.localStorage.clear(); 
      window.location.href = "/home"
    }
  }

})
export const currentUserState = state => state.users.userState
export const currentUsersState = state => state.users.usersState
export const currentUserParam = state => state.users.param //슬라이스상태에서 state
export default userSlice.reducer;