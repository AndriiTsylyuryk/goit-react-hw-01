import Greetings from "./Greetings/Greetings";
import Header from "./Header/Header";
import Message from "./Message/Message";
import Welcome from "./Welcome/Welcome";

const App = () => {
  const isOnline = true;
  const age = 18;
  const fruits = ["banana", "apple", "lemon", "penis"];
  return (
    <main>
      <Message author="Petro" message="Hello" />
      <Message author="Stepan" message="Bnj" />
      <Message message="Bnj" />

      {isOnline && <h1>Welcome back</h1>}
      {!isOnline && <h1>BAD</h1>}

      {age > 18 ? <h2>Good</h2> : <h2>Bad</h2>}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </main>
  );
};

export default App;
