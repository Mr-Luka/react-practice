
import './App.css';
import suggestedFriends from "./index.js";
{/* writting a comment */}
const divStyle = { backgroundColor: "blue" };
divStyle.backgroundColor = "red";


function App() {
const firstName = "Luka";
const lastName= "Pav";
  return (
    <div className="App">
      <p>add the JSX elements described in these pseudocode comments</p>
      <br />
      <main>
        <h2>People You May Know {firstName} {lastName}</h2>
        <div className="card">
                <button className="primary">Add Friend</button>
                <button>Remove</button>
                <div className="card-text">
                  <h5 className="username">{firstName}</h5>
                  <span className="mutual-friends">{lastName}</span>
                </div>
        </div>    
        {suggestedFriends.map((friend)=>{
          <div className="card">
            <img className="picture" src={friend.picture} alt="user profile"/>
            <div className="card-text">
              <h5 className="username">{friend.name}</h5>
              <span className="mutual-friends">{friend.mutualFriendCount}</span>
              <div className="card-actions">
              </div>
            </div>
          </div>
        })}
      </main>
    </div>
  );
}

export default App;
