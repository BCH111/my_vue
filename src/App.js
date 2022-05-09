import './assets/css/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pcontent from "./components/Pcontent";
import HomeList from "./components/HomeList";
function App() {
  let dataList = {
    title:"新闻列表",
    list:[
      {
        name:"111111111111111"
      },
      {
        name:"222222222222"
      },
      {
        name:"3333333333333333"
      }
    ]
  }
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeList/>} />
            <Route exact path="/pcontent/:id" element={<Pcontent/>} /></Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
