import React from 'react'
import { useQuery } from "react-apollo"

import {
  Descriptions,
  Spin,
  Empty,
  Card,
  Row,
  Col
} from 'antd'

import { GET_ARTIST_PROFILE } from '../../queries'
import { ArtworksContainer, Container } from '../../components/Profile'


const { Item } = Descriptions
const { Meta } = Card



const Profile = (props) => {

  const id = props.match.params.id

  const {
    data,
    loading,
    error
  } = useQuery(GET_ARTIST_PROFILE, {
    variables: { id }
  })

  if (loading) return <Spin size="large" />;
  if (error) return <p>ERROR</p>;
  if (!data) return <Empty />;


  const { name, bio, nationality, birthday, gender, deathday, imageUrl, artworks, years } = data.artist


  return (
    <Container>
      <Row>
        <Col md={8} xs={24}>
          <Card
            style={{ width: 240 }}
            cover={<img alt="example" src={imageUrl} />}
          >
            <Meta title={name} description={nationality} />
          </Card>
        </Col>
        <Col md={16} xs={24}>
          <Descriptions>
            <Item label="Name">{name || 'N/A'}</Item>
            <Item label="Nationality">{nationality || 'N/A'}</Item>
            <Item label="Years">{years || 'N/A'}</Item>
            <Item label="Birthday">{birthday || 'N/A'}</Item>
            <Item label="Deathday">{deathday || 'N/A'}</Item>
            <Item label="gender">{gender || 'N/A'}</Item>
          </Descriptions>
          <br />
          <Descriptions>
            <Item label="Bio">{bio || 'N/A'}</Item>
          </Descriptions>
        </Col>

      </Row>
      <br />
      <ArtworksContainer>

        <h1>Art Works</h1>
        <Row glutter={[16, 16]}>
          { !data &&  <Empty />}
          {
             artworks && 
             artworks.map(artwork =>
              <Col key={artwork.id} md={6} sm={12} xs={24}>
                <Card
                  style={{ width: 140, margin: '3%' }}
                  cover={<img alt="example" src={artwork.imageUrl} />}
                >
                  <Meta title={artwork.title} />
                </Card>
              </Col>
            )
          }
        </Row>
      </ArtworksContainer>

    </Container >
  )
}
export default Profile