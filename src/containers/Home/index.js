import React from 'react'
import { useQuery } from "react-apollo"

import { GET_POPULAR_ARTISTS } from '../../queries'



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
    <div>
      <p>{JSON.stringify(data)}</p>
    </div >
  )
}
export default Home