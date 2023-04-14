import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
    query getMovie($movieId:ID!) {
        movie(id : $movieId) {
            id
            title
            small_cover_image
            genres
        }
    }
`
export default function Movie(){
    const {id} = useParams();
    const {data, loading, error} = useQuery(GET_MOVIE,{
        variables : {
            movieId : id,
        }
    });
    console.log(data,loading);
    if(loading){
        return <h1>Loading...</h1>;
    }
    if(error){
        return <h1>Could not fetch :(</h1>;
    }
    return (
        <div>test
        </div>
    );
}