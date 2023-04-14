import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Movies/>} />
            <Route path="/movies/:id" element={<Movie/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
