import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { AddCard, Card, Form, Header, Modal } from "./components";
import { CardProps } from "./components/Card/types";
import { FormDataProps } from "./components/Form/types";
import { sortColors } from "./utils/colors";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [mode, setMode] = useState<"create" | "edit" | "delete" | "read">(
    "create"
  );
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

  const editCard = (id: number) => {
    setMode("edit");
    const card = cards.find((card) => card.id === id);
    setFormData(card);
    openModalWindow();
  };

  const viewCard = (id: number) => {
    setMode("read");
    const card = cards.find((card) => card.id === id);
    setFormData(card);
    openModalWindow();
  };

  const cleanData = () => {
    setFormData({
      title: "",
      subtitle: "",
      content: "",
    });
  };

  const deleteCard = (id: number) => {
    setMode("delete");
    try {
      if (cards.length > 1) {
        const newCards = cards.filter((card) => card.id !== id);
        console.log(newCards);
        setCards(newCards);
        toast.success("Card deleted successfully");
      } else {
        setCards([]);
        toast.success("Card deleted successfully");
      }
    } catch (err) {
      toast.error("Error while deleting card");
    }
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
          color: sortColors(),
        };
        const newCards = [...cards, newItem];
        setCards(newCards);
        toast.success("Card added successfully");
        closeModalWindow();
      } else {
        toast.error("Please fill all fields");
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
              id: Date.now(),
              date: new Date().toLocaleString(),
            };
          }
          toast.success("Card updated successfully");
          return card;
        });
        setCards(newCards);
        closeModalWindow();
      } else {
        toast.error("Please fill all fields");
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
            cards
              .sort((a, b) => b.id - a.id)
              .map((card, index) => (
                <Card
                  {...card}
                  key={index}
                  edit={() => editCard(card.id)}
                  deleteItem={() => deleteCard(card.id)}
                  view={() => viewCard(card.id)}
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
        <Form
          formData={formData}
          setFormData={setFormData}
          readonly={mode === "read"}
        />
      </Modal>
      <ToastContainer />
    </>
  );
};

export default App;
