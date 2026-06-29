import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 mt-10 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Contact Management</h1>

        <ContactForm contacts={contacts} setContacts={setContacts} />

        <ContactList contacts={contacts} setContacts={setContacts} />
      </div>
    </div>
  );
}

export default App;
