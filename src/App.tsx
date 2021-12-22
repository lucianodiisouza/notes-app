import { useState } from "react";
import { AddCard, Card, Header } from "./components";

const App = () => {
  const [cards, setCards] = useState([
    {
      title: "Title",
      subtitle: "Subtitle",
      date: "26th Mar 2021",
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      date: "26th Mar 2021",
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      date: "26th Mar 2021",
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      date: "26th Mar 2021",
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      date: "26th Mar 2021",
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      date: "26th Mar 2021",
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      date: "26th Mar 2021",
    },
    {
      title: "Title",
      subtitle: "Subtitle",
      date: "26th Mar 2021",
    },
  ]);

  const addCard = () => {
    console.log("do something");
  };

  const length = cards.length;

  return (
    <div>
      <Header />
      <div className={length > 0 ? "cards-container" : "cards-container-empty"}>
        <AddCard onClick={addCard} />
        {length > 0 ? (
          cards.map((card, index) => (
            <Card title="title" subtitle="subtitle" date="date" key={index} />
          ))
        ) : (
          <p>You dont have any notes</p>
        )}
      </div>
    </div>
  );
};

export default App;
