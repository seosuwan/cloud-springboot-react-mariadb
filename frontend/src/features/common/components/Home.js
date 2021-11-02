import { Logout } from 'features/user';
import styled from 'styled-components';
import LayOut from '../layout/Layout';

export default function Home(){
  return(
    <div>
      
      {localStorage.length > 0 ?
      <><h3><Br/>{JSON.parse(window.localStorage.getItem('sessionUser')).name}님 접속중</h3> <Logout/></>
      : <>
      <button onClick = {e => window.location.href = `/users/add`}>회원가입</button>
      <button onClick = {e => window.location.href = `/users/login`}>로그인</button>
      </>}
      <p>내일 죽을 것처럼 오늘을 살고
          영원히 살 것처럼 내일을 꿈꾸어라.</p>
    </div>
    )
}
const Br = styled.br`
text-align: center;
`