import gql from 'graphql-tag';

export const QUERY_LAUNCH_PROFILE = gql`
    query LaunchProfile($id:String!) {
  launch(id: $id) {
    flight_number
    mission_name
    mission_id
    launch_date_local
    launch_year
    launch_success
    details
    launch_site {
      site_name
    }
    rocket {
      rocket_id
      rocket_name
      rocket_type
    }
    links {
      flickr_images
      video_link
      article_link
    }
  }
}
`;