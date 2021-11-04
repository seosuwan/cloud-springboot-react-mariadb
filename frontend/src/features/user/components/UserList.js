import Layout from 'features/common/components/Layout';
import React from 'react';
import { UserListForm } from '..';
import styled from "styled-components";


export default function UserList() {
  return (
    <Layout>
      <Main><UserListForm/></Main>
    </Layout>
  );
}
const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
`