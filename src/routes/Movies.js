import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom";
import Genre from "../components/Genre";
const ALL_MOVIES = gql`
    query getMovies {
        allMovies{
            title
            id
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
                {data.allMovies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} id={movie.id}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}