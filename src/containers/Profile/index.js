import React from 'react'
import { useQuery } from "react-apollo"

import { GET_ARTIST_PROFILE } from '../../queries'



const Profile = (props) => {
  const id = props.match.params.id
  console.log({ id })

  const {
    data,
    loading,
    error
  } = useQuery(GET_ARTIST_PROFILE, {
    variables: { id }
  })


  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>No Data</p>;


  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div >
  )
}
export default Profile