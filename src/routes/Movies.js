import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom";
import Genre from "../components/Genre";
import Card from "../components/Card";

const ALL_MOVIES = gql`
    query getMovies {
        allMovies{
            id
            title
            rating
            genres
            summary
            year
            background_image
            small_cover_image
            medium_cover_image
            large_cover_image
        }
    }
`;

export default function Movies(){
    const {data, loading, error} = useQuery(ALL_MOVIES);
    if(loading){
        return <h1>Loading...</h1>;
    }
    if(error){
        return <h1>Could not fetch :(</h1>;
    }
    return (
        <div>
            {/* <section className="genre-section">
                <Genre></Genre>
            </section> */}
            <ul>
                {data.allMovies.map(movie => <Card key={movie.id} movie={movie}/>)}
            </ul>
        </div>
    );
}