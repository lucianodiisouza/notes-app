import { useState } from "react";
import { AddCard, Card, Header } from "./components";
import { CardProps } from "./components/Card/types";
import { sortColors } from "./utils/colors";

const App = () => {
  const [cards, setCards] = useState<CardProps[]>([
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
    <>
      <main>
        <Header />
        <div
          className={length > 0 ? "cards-container" : "cards-container-empty"}
        >
          <AddCard onClick={addCard} />
          {length > 0 ? (
            cards.map((card, index) => (
              <Card color={sortColors()} {...card} key={index} />
            ))
          ) : (
            <p>You dont have any notes</p>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
