import { Logout } from 'features/user';
import styled from 'styled-components';
import Layout from '../components/Layout';


export default function Home(){
  return(
      <Layout>
      <Main><h1>내일 죽을 것처럼 오늘을 살고
          영원히 살 것처럼 내일을 꿈꾸어라.</h1></Main>
    </Layout>
    )
}
const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
`