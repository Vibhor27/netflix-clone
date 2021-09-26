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
     
    </div>
  );
}

export default App;
