import gql from "graphql-tag";


const GET_POPULAR_ARTISTS = gql`
  {
    popular_artists {
    artists {
      id,
      name,
      bio,
    } 
  }
  }
`;

const GET_ARTIST_PROFILE = gql`
 query ARTIST_PROFILE($id: String!) {
    artist(id: $id) {
      id
    }
  }
`;

export {
  GET_ARTIST_PROFILE,
  GET_POPULAR_ARTISTS
}