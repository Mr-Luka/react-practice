
import './App.css';
import suggestedFriends from "./index.js";
{/* writting a comment */}
const divStyle = { backgroundColor: "blue" };
divStyle.backgroundColor = "red";


function App() {

  return (
    <div className="App">
      <p>add the JSX elements described in these pseudocode comments</p>
      <br />
      <main>
        <h2>People You May Know</h2>
    
        {suggestedFriends.map((friend)=>{
          <div className="card">
            <img className="picture" src={friend.picture} alt="user profile"/>
          </div>
        })}
      </main>
    </div>
  );
}

export default App;
