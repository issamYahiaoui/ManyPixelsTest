import React from 'react'
import { useQuery } from "react-apollo"
import {
  Row,
  Col,
  Spin,
  Empty
} from 'antd'
import { Link } from 'react-router-dom'

import { ArtistCard, Container } from '../../components/Home'
import { GET_POPULAR_ARTISTS } from '../../queries'


//TODO: add pagination
const Home = () => {

  const {
    data,
    loading,
    error
  } = useQuery(GET_POPULAR_ARTISTS)

  if (loading) return <Spin size="large" />
  if (error) return <p>ERROR</p>
  if (!data) return <Empty />

  return (
    <Container>
      <h1>Popular Artists</h1>
      <br />
      <Row glutter={[16, 16]}>
        {
          data && data.popular_artists && data.popular_artists.artists
          && data.popular_artists.artists.map(artist =>
            <Col key={artist.id} md={8} sm={12} xs={24}>
              <Link to={`profile/${artist.id}`}>
                <ArtistCard artist={artist} />
              </Link>
            </Col>
          )
        }
      </Row>

    </Container >
  )
}
export default Home