import React from 'react'
import styled from 'styled-components'
import {
  Link
} from "react-router-dom";
import {
  Menu,
  Layout
} from 'antd'

const { Header } = Layout
const Logo = styled.div`
  width: 50px;
  height: 50px;
  float: left;
  margin-right: 2%;
  cursor: pointer
`

const BaseHeader = () => {
  return (
    <Header>
      <Link to="/">
        <Logo>
          <img src="/logo.png" alt="" style={{ width: '100%' }} />
        </Logo>
      </Link>
      <Menu theme="dark" mode="horizontal" >
        <Link to="/">
          <Menu.Item >Home</Menu.Item>
        </Link>
      </Menu>
    </Header>
  )
}
export default BaseHeader