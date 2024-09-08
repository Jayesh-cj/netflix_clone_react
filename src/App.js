import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { actions, orginals } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Orginals' url={orginals} />
      <RowPost title='Action' isSmall url={actions} />
    </div>
  );
}

export default App;
