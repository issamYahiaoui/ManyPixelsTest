import React from 'react'
import { useQuery } from "react-apollo"
import {
  Link
} from 'react-router-dom'

import styled from 'styled-components'
import {
  Card,
  Row,
  Col
} from 'antd'




import { GET_POPULAR_ARTISTS } from '../../queries'


const { Meta } = Card;

const Container = styled.div`
  width: 90%
`

const ArtistCard = ({ artist }) => {
  const { id, name, nationality, imageUrl } = artist
  return (
    <Link to={`profile/${id}`}>
      <Card
        hoverable
        style={{ width: 240, margin: '2%' }}
        cover={<img alt="example" src={imageUrl} />}
      >
        <Meta title={name} description={nationality} />
      </Card>
    </Link>
  )
}
const Home = () => {
  const {
    data,
    loading,
    error
  } = useQuery(GET_POPULAR_ARTISTS)
  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>No Data</p>;
  window.data = data
  return (
    <Container>

      <Row glutter={[16, 16]}>
        {
          data.popular_artists.artists.map(artist =>
            <Col key={artist.id} md={8} sm={12} xs={24}>
              <ArtistCard artist={artist} />
            </Col>
          )
        }
      </Row>

    </Container >
  )
}
export default Home