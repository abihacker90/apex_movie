import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { BrowserRouter as Link, Route, Routes, Router } from "react-router-dom";

function App() {
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });
  const link = from([
    errorLink,
    new HttpLink({ uri: "https://tmdb.sandbox.zoosh.ie/dev/grphql" }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  return (
    <ApolloProvider client={client}>
     
        <Navbar />
         <Routes>
           <Route path="/" element={ <Search />} /> 
           <Route path="/popular" element={<Movies />} /> 
        </Routes> 
    </ApolloProvider>
  );
}

export default App;
