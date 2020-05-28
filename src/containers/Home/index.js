import React from 'react'
import { useQuery } from "react-apollo"
import {
  Link
} from 'react-router-dom'

import styled from 'styled-components'
import {
  Card,
  Row,
  Col,
  Spin,
  Empty
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
        style={{ width: 240, margin: '2% 0' }}
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
  if (loading) return <Spin size="large" />;
  if (error) return <p>ERROR</p>;
  if (!data) return <Empty />;;

  return (
    <Container>
      <h1>Popular Artists</h1>
      <br />
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