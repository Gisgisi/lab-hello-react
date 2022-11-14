import './App.css';
import ironhackLogo from './images/Ironhack.png'
import menu from './images/menu-top-xs.png'
import Comp from './componenets/Comp';


function App() {
  return (
    <><div className="App-header">
      <img src={ironhackLogo} />
      <img src={menu} />
      <h1> Say hello to ReactJs</h1>
      <p>You will learn how to use </p>
      <p>the most popular fronend library</p>
      <p>and become a super Ninja developer</p>
      <button>Awesome!</button>
      </div>
      <div>
      <Comp/>
    </div>
    </>
  );
}
export default App;