import { useEffect, useState } from "react";
import { AddCard, Card, Form, Header, Modal } from "./components";
import { CardProps } from "./components/Card/types";
import { FormDataProps } from "./components/Form/types";
import { sortColors } from "./utils/colors";

const App = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [mode, setMode] = useState<"create" | "edit" | "delete">("create");
  const [formData, setFormData] = useState<FormDataProps>();
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem("cards", JSON.stringify(cards));
    }
  }, [cards]);

  useEffect(() => {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  const openModalWindow = () => {
    setShouldOpenModal(true);
  };

  const closeModalWindow = () => {
    setShouldOpenModal(false);
    cleanData();
  };

  const addCard = () => {
    setMode("create");
    cleanData();
    openModalWindow();
  };

  const cleanData = () => {
    setFormData({
      title: "",
      subtitle: "",
      content: "",
    });
  };

  const editCard = (id: number) => {
    setMode("edit");
    const card = cards.find((card) => card.id === id);
    setFormData(card);
    openModalWindow();
  };

  const deleteCard = (id: number) => {
    setMode("delete");
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  const submitForm = () => {
    if (mode === "create") {
      if (formData?.title && formData?.subtitle && formData?.content) {
        const { title, subtitle, content } = formData;
        const newItem = {
          title,
          subtitle,
          content,
          id: Date.now(),
          date: new Date().toLocaleString(),
          cardColor: sortColors(),
        };
        const newCards = [...cards, newItem];
        setCards(newCards);
        closeModalWindow();
      }
    } else if (mode === "edit") {
      if (formData?.title && formData?.subtitle && formData?.content) {
        const { title, subtitle, content, id } = formData;
        const newCards = cards.map((card) => {
          if (card.id === id) {
            return {
              ...card,
              title,
              subtitle,
              content,
            };
          }
          return card;
        });
        setCards(newCards);
        closeModalWindow();
      }
    }
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
              <Card
                {...card}
                key={index}
                edit={() => editCard(card.id)}
                deleteItem={() => deleteCard(card.id)}
              />
            ))
          ) : (
            <p>You dont have any notes</p>
          )}
        </div>
      </main>
      <Modal
        hide={closeModalWindow}
        show={shouldOpenModal}
        mode={mode}
        submitForm={submitForm}
      >
        <Form formData={formData} setFormData={setFormData} />
      </Modal>
    </>
  );
};

export default App;
