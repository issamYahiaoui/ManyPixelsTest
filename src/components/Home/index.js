import React from 'react'
import styled from 'styled-components'

import {
  Card
} from 'antd'


const { Meta } = Card

export const ArtistCard = ({ artist }) => {
  const { name, nationality, imageUrl } = artist
  return (
    <Card
      hoverable
      style={{ width: 240, margin: '2% 0' }}
      cover={<img alt="example" src={imageUrl} />}
    >
      <Meta title={name} description={nationality} />
    </Card>
  )
}

export const Container = styled.div`
width: 90%
`
