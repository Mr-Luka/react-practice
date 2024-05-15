
import './App.css';
import suggestedFriends from "./index.js";
{/* writting a comment */}
const divStyle = { backgroundColor: "blue" };
divStyle.backgroundColor = "red";


function App() {

  return (

        <div>
        {suggestedFriends.map((friend)=>{
          <div className="card">
            <img className="picture" src={friend.picture} alt="user profile"/>
          </div>
        })}

        </div>

  );
}

export default App;
