import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user/reducer/UserAPI';

const userJoinPage = async(x) => {
  const res = await userAPI.userJoin(x)
  return res.data
}
const userFetchOne = async(x) => {
  const res = await userAPI.fetchOne(x)
  return res.data
}
const userFetchList = async() => {
  const res = await userAPI.fetchList()
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
const userRemovePage = async(x) =>{
  const res = await userAPI.userRemovePage(x)
  return res.data
} 

export const joinPage = createAsyncThunk('users/join',userJoinPage)
export const userFetchOne = createAsyncThunk('users/one',userFetchOne)
export const userFetchList = createAsyncThunk('users/list',userFetchList)
export const userLoginPage = createAsyncThunk('users/login',userLoginPage)
export const userModifyPage = createAsyncThunk('users/modify',userModifyPage)
export const userRemovePage = createAsyncThunk('users/remove',userRemovePage)

export default counterSlice.reducer;
