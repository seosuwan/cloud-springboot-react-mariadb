import axios from 'axios';
const SERVER = 'http://localhost:8080'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege..'
}
const userJoin = x => axios.post(`${SERVER}/users`, JSON.stringify(x),{headers})
const fetchOne = x => axios.get(`${SERVER}/users/${x.userId}`)
const fetchList = x =>  axios.get(`${SERVER}/users`)
const userLogin = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x), {headers})
const userModify = x => axios.post(`${SERVER}/users`, JSON.stringify(x),{headers})
const userRemove = x => axios.delete(`${SERVER}/users/${x.userId}`)

export default {
  userJoin,
  fetchOne,
  fetchList,
  userLogin,
  userModify,
  userRemove
}