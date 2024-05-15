import logo from './logo.svg';
import './App.css';
{/* writting a comment */}
const divStyle = { backgroundColor: "blue" };
divStyle.backgroundColor = "red";

const firstName = "Skill";
const lastName = "Crusher";
const renderVariables = <h1>Hey {firstName + " " + lastName}!</h1>;
// this element will render a p element with 8 as the text
const evaluateAnyExpressions = <p>{1 + 2 + 5}</p>;
function getTime() {
  const now = new Date();
  return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 id="page-tittle">Luka's Page</h1>
          <h2>I crush skillz. All day, everyday.</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
