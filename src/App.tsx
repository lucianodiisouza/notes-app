import { AddCard, Card, Header } from "./components";

const App = () => {
  const addCard = () => {
    console.log("do something");
  };
  return (
    <div>
      <Header />
      <AddCard onClick={addCard} />
      <Card title="title" subtitle="subtitle" date="date" />
    </div>
  );
};

export default App;
