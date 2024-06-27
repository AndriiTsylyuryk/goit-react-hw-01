import Alert from "./Alert/Alert";
import LoginButton from "./Button/Button";



const App = () => {
  return (
    <main>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined={true}>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <LoginButton variant="primary" />
    </main>
  );
};

export default App;
