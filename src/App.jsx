import './App.css'
import { useState } from 'react'
import ContactList from "./components/ContactList"
import SelectedContact from './components/SelectedContact'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
      { selectedContactId ? (
        //<h1>SELECTED CONTACT</h1>
        <SelectedContact
          myId={selectedContactId}
          pickMyId={setSelectedContactId}
        />
      ) : (
        <ContactList chosenId={setSelectedContactId}/> 
      )}
    </>
  )
}