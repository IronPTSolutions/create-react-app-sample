import logo from './logo.svg';
import './App.css';

const user = {
  name: "Marcos",
  surname: "Monzón",
  profession: "Alchemist",
  country: "Cuba"
}

const users = [
  {
    name: "Marcos",
    surname: "Monzón",
    profession: "Alchemist",
    country: "Cuba"
  },
  {
    name: "Manu",
    surname: "Carrillo",
    profession: "Comedor de saulitos",
    country: "Torrijos"
  }
]

function App() {
  const nameToUpperCase  = (name) => name.toUpperCase()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi {user.name} {user.surname}</h1>

        {users.map((user, index) => {
          return (
            <div key={index}>
              <p>Nombre: {nameToUpperCase(user.name)}</p>
              <p>Apellido: {user.surname}</p>
              <p>Profesión: {user.profession}</p>
            </div>
          )
        })}

        {users.length === 3
          ? (
            <div>
              hay {users.length} elementos en users
            </div>
          ) : (
            <div>
               hay menos de 3 elementos en users
            </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
