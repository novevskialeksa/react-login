import React , {useState} from 'react'

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }

  const [user, setUser] = useState[{name: "", email: ""}];
  const [error, setError] = useState("");
  
  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout!");
  }

  return (
    <div className="App">

      Hello!!

    </div>
  );
}

export default App;
