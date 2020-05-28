import React from 'react'
import { Layout } from 'antd';
import styled from 'styled-components'

import Header from '../Header'


const { Content } = Layout;


const Wrapper = styled(Layout)`
  background-color: white;
  width: 100%;
 
`

const Container = styled(Content)`
    padding: 2%; 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px

`


const BaseLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}


export default BaseLayout