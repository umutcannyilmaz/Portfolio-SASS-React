import "./styles/app.css"
import Introduction from './components/Introduction';
import Github from "./components/Github";
function App() {
  return (
    <div className="container">
     <Introduction/>
     <Github/>
    </div>
  );
}

export default App;
