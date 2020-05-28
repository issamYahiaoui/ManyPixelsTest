import React from 'react'
import { useQuery } from "react-apollo"

import styled from 'styled-components'


import { GET_POPULAR_ARTISTS } from '../../queries'

const Container = styled.div`
  display: flex;
  justify-content : center;
  align-items: center ;
`

const Home = () => {
  const {
    data,
    loading,
    error
  } = useQuery(GET_POPULAR_ARTISTS)
  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>No Data</p>;
  return (
    <Container>
      <p>{JSON.stringify(data)}</p>
    </Container >
  )
}
export default Home