import { ApolloClient,InMemoryCache, gql } from '@apollo/client';


const client = new ApolloClient({
    uri : "http://localhost:4000/",
    cache : new InMemoryCache(),
});

client.query({
    query:gql`
    {
        movie(id: 50639) {
            title
        }
    }
    `
}).then(data =>console.log(data));

export default client