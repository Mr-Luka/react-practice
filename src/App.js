import logo from './logo.svg';
import './App.css';
{/* writting a comment */}
const divStyle = { backgroundColor: "blue" };
divStyle.backgroundColor = "red";


function App() {
  const firstName = "Luka";
  const lastName = "Pav";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 id="page-tittle">{firstName} {lastName}'s Page</h1>
          <h2>I crush skillz. All day, everyday.</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
