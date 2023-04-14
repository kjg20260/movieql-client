import { Link } from "react-router-dom";

const genres = ['Action','Adventure',',Animation','Biography','Comedy','Crime','Documentary','Drama','Family','Fantasy','Film Noir','History','Horror','Music','Musical','Mystery','Romance','Sci-Fi','Short','Sport','Superhero','Thriller','War','Western']; 

export default function Headers() {
    return (
        <>
            <div>
                <h2>장르</h2>
            </div>
            <div>
                <ul>
                    {genres.map(genre => {
                        return (
                            <span>{genre}</span>
                        )
                    })}
                </ul>
            </div>
        </>
    )
};