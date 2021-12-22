import { useState } from "react";
import { AddCard, Card, Form, Header, Modal } from "./components";
import { CardProps } from "./components/Card/types";
import { FormDataProps } from "./components/Form/types";
import { sortColors } from "./utils/colors";

const App = () => {
  const [shouldOpenModal, setShouldOpenModal] = useState(false);
  const [mode, setMode] = useState<"create" | "edit" | "delete">("create");
  const [formData, setFormData] = useState<FormDataProps>();
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

  const openModalWindow = () => {
    setShouldOpenModal(true);
  };

  const closeModalWindow = () => {
    setShouldOpenModal(false);
  };

  const addCard = () => {
    setMode("create");
    cleanData();
    setShouldOpenModal(true);
  };

  const cleanData = () => {
    setFormData({
      title: "",
      subtitle: "",
      content: "",
    });
  };

  const submitForm = () => {
    console.log(formData);
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
