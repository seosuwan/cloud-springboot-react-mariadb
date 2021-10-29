import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginPage } from '../reducer/userSlice';

export default function UserLogin() {
  const [login, setLogin] = useState({})
  const dispatch = useDispatch()
  const history =useHistory()
  const {username, password} = login
  
  
  const handleChange = e => {
    const {value, name} = e.target
    setLogin({
      ...login,
      [name] : value
    })
  }

  const changeNull = ls =>{
    for(const i of ls ){
      document.getElementById(i).value = ''
    }
  }
  
  const handleClick = async e =>{
    e.preventDefault()
    e.stopPropagation()
    const loginRequest = {username, password}
    await dispatch(loginPage(loginRequest))
    const loginUser = JSON.parse(localStorage.getItem('sessionUser'))
    if(loginUser.username != null){
      alert(`${loginUser.name} 님 환영합니다!!!!!`)
      history.push("/userDetail")
    }else{
      alert('아이디, 비번 오류로 로그인 실패')
        document.getElementById('username').value = ''
        document.getElementById('password').value = '' 
      }

    /*
    userLogin(loginRequest)
    .then(res => {
      const user = res.data;
      if(user.username != null){
        alert('로그인 성공, '+ JSON.stringify(res.data))
        localStorage.setItem('sessionUser', JSON.stringify(res.data))
        history.push("/userDetail")
      }else{
        alert('아이디, 비번 오류로 로그인 실패')
        document.getElementById('username').value = ''
        document.getElementById('password').value = '' 
      }
      
    })
    .catch(err => {
      alert('로그인 실패' + err)
      changeNull(['username','password'])
    })
    */
  }
  
  return (
    <div>
      <h1>유저 로그인</h1>
      <form method="POST">
        <ul>
          <li><label for="id">아이디</label>
          <input type="text" id="username"
              name="username" value={username} onChange={handleChange}/></li>
          <li><label for="pw">비밀번호</label>
          <input type="password" id="password" name="password" onChange={handleChange}/></li>
          <li><input type="button" title="로그인" value="로그인" onClick={handleClick}/></li>
        </ul>
      </form>
    </div>
  );
}