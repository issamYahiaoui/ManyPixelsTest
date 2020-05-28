import React from 'react'
import { Layout } from 'antd';

import Header from '../Header'
import Footer from '../Footer'

const { Content } = Layout;



const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Layout>
  )
}


export default BaseLayout