import { useState } from "react";
import "./App.css";
import ContactList from "./src/components/ContactList";
import SelectedContact from "./src/components/SelectedContact";

export default function App() {
  const [SelectedContactId, SetSelectedContactId] = useState(null);

  return (
    <>
      {SelectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}
