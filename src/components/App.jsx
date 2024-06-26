import Alert from "./Alert/Alert";
import Greetings from "./Greetings/Greetings";
import Header from "./Header/Header";
import Message from "./Message/Message";
import Welcome from "./Welcome/Welcome";

const App = () => {
  return (
    <main>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </main>
  );
};

export default App;
