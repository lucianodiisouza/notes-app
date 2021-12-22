import { AddCard, Header } from "./components";

const App = () => {
  const addCard = () => {
    console.log("do something");
  };
  return (
    <div>
      <Header />
      <AddCard onClick={addCard} />
    </div>
  );
};

export default App;
