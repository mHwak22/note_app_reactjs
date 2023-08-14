import './App.css';

import NotesContainer from "./Components/NotesContainer/NotesContainer.js"
import Sidebar from "./Components/Sidebar/sidebar.js";

function App() {
  return (
<div className="app">
  <Sidebar/>
  <NotesContainer/>
</div>  
  );
}

export default App;
