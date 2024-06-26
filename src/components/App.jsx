import Greetings from "./Greetings/Greetings";
import Header from "./Header/header";
import Welcome from "./Welcome/welcome";


const App = () => {
  return (
    <main>
      <Header />
      <Welcome />
      <Greetings />
    </main>
  );
};

export default App;
