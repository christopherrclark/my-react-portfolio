
import { useState } from "react"
import Aboutme from './pages/Aboutme'
import Contactme from "./pages/Contactme";
import Portfolio from "./pages/Portfolio";
import Navigation from './components/Navigation';

function App() {
  const [ current, setCurrent ] = useState("home")
  function getPage(){
    if(current === "home"){
      return <Aboutme/>
    }else if(current === "contact") {
      return <Contactme/>
    }else if(current === "portfolio") {
      return <Portfolio/>
    }
  }
  return (
    <div className="App">
      <Navigation current={current} setCurrent={setCurrent}/>
      {getPage()}
    </div>
  );
}

export default App;
