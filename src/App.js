import './App.css';
import Banner from './Banner';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
     
     {/* Navbar*/}

     <Banner/>

     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
