
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
            <div className="card-text">
              <h5 className="username">{friend.name}</h5>
              <span className="mutual-friends">{friend.mutualFriendCount}</span>
              <div className="card-actions">
                <button className="primary">Add Friend</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
        })}
      </main>
    </div>
  );
}

export default App;
