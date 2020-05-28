import gql from "graphql-tag";


const GET_POPULAR_ARTISTS = gql`
  {
    popular_artists {
    artists {
      id,
      name,
      nationality,
      imageUrl
    
    } 
  }
  }
`;

const GET_ARTIST_PROFILE = gql`
 query ARTIST_PROFILE($id: String!) {
    artist(id: $id) {
      id,
      name,
      bio,
      years,
      birthday,
      deathday,
      nationality,
      imageUrl,
      artworks{
        id,
        title,
        imageUrl
      }
    }
  }
`;

export {
  GET_ARTIST_PROFILE,
  GET_POPULAR_ARTISTS
}