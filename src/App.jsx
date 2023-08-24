import Container from 'react-bootstrap/Container';
import { Routes, Route, Link } from 'react-router-dom'
import "./App.css";
import HomePage from "./pages/HomePage"
import CountryDetailsPage from "./pages/CountryDetailsPage"

function App() {
  return (
    <>
      <Container fluid className="header">
        <Container >
          <Link to={`/`}>
            <h1>Wikicountries</h1>
          </Link>

        </Container>
      </Container>

      <Container className="container-general">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:alpha3Code" element={<CountryDetailsPage />} />
        </Routes>

      </Container>
    </>

  );
}

export default App;
