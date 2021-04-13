import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>

    <h1 className="text-center">Login</h1>
    <p>Email Adress</p>
    <input type="text" placeholder="adresse@email.com">

    </input>
    
    <p>Password</p>
    <input type="password" placeholder="password">
    
    </input>
    <br></br>

    <input type="checkbox"></input>
    <label> Remember Me</label>

    </div>
  );
}

export default App;
