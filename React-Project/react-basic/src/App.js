import AnimeList from "./components/AnimeList"
import './App.css'

function App() {
  const design = {color:'blue', textAlign:"center", fontSize:"2rem"}
  
  return (
    <div className="container">
      <h1 style={design}>Anime Blog</h1>
      <AnimeList/>
    </div>
  );
}

export default App;
