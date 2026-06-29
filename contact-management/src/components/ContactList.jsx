import { useEffect } from "react";

const API_URL = "http://localhost:5000/api/contacts";

function ContactList({ contacts, setContacts }) {
  // GET contacts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch(() => console.log("Failed to fetch contacts"));
  }, [setContacts]);

  // DELETE contact
  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?",
    );

    if (!confirmDelete) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      // UI update without reload
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch {
      alert("Failed to delete contact");
    }
  };

  return (
    <div>
      <h2 className="font-semibold mb-2">Submitted Contacts</h2>

      {contacts.length === 0 && (
        <p className="text-gray-500">No contacts yet</p>
      )}

      {contacts.map((c) => (
        <div
          key={c._id}
          className="flex justify-between items-center bg-gray-50 p-3 mb-2 rounded"
        >
          <div>
            <p className="font-medium">{c.name}</p>
            {c.email && <p className="text-sm text-gray-600">📧 {c.email}</p>}
            <p className="text-sm text-gray-600">📞 {c.phone}</p>
          </div>

          <button
            onClick={() => deleteContact(c._id)}
            className="text-red-600 text-sm hover:underline"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
