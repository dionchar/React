import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);

function App() {
  return (
    <div className="app"> {/* Use the 'app' class */}
      {/* Your app content */}
    </div>
  );
  
  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
      
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
export default App
